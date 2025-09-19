import { AIAdapter, InvokeRequest, ImageRequest, InvokeResponse, ImageResponse } from './adapter-types';
import crypto from 'crypto';
import { requestsTotal, errorsTotal, latencyHistogram } from '../observability/metrics';
import { retryWithBackoff, isRetryableError } from '../retry/retry';
import { estimateInvokeCost, estimateImageCost, attachEstimateToInvoke, attachEstimateToImage } from '../cost/cost-estimator';
import { consumeBudget, getBudgetFor } from '../cost/budget-guard';
import { trace } from '@opentelemetry/api';
import { withTimeout } from '../utils/timeout';
import { TimeoutError, ProviderError } from './errors';

const adapters: Record<string, AIAdapter> = {};

export function registerAdapter(adapter: AIAdapter) {
  adapters[adapter.name] = adapter;
}

export function getAdapter(name: string): AIAdapter | undefined {
  return adapters[name];
}

export function listAdapters(): string[] {
  return Object.keys(adapters);
}

// Test helper to clear registered adapters (useful for unit tests)
export function clearAdapters() {
  for (const k of Object.keys(adapters)) delete adapters[k];
}

export function chooseAdapterByPolicy(preferred?: string): AIAdapter | undefined {
  if (preferred && adapters[preferred]) return adapters[preferred];
  // simple priority: configured env order or fallback to first registered
  const order = (process.env.AI_PROVIDER_ORDER || '').split(',').map(s => s.trim()).filter(Boolean);
  for (const name of order) {
    if (adapters[name]) return adapters[name];
  }
  const keys = Object.keys(adapters);
  return keys.length ? adapters[keys[0]] : undefined;
}

export async function invoke(request: InvokeRequest) : Promise<InvokeResponse> {
  // Try providers in policy order (single adapter chosen by default, fallback to next on retryable errors)
  const order = (process.env.AI_PROVIDER_ORDER || '').split(',').map(s => s.trim()).filter(Boolean);
  const tried: string[] = [];

  // If preferred provided, try it first
  if (request.providerOverride) order.unshift(request.providerOverride);

  // If order empty, fallback to registered adapters
  const candidates = order.length ? order : Object.keys(adapters);

  for (const name of candidates) {
    const adapter = adapters[name];
    if (!adapter || !adapter.invoke) continue;
    tried.push(name);

    const span = trace.getTracer('multi-model-router').startSpan('adapter.invoke', { attributes: { provider: name, model: request.model || '' } });
    const start = Date.now();
    try {
      // Estimate cost and check budgets before calling provider
      const estimate = { costUsd: estimateInvokeCost(name, request) };
      const budgetId = process.env.BUDGET_SCOPE || name; // can be global scope or provider-specific
      const budgetOk = consumeBudget(budgetId, estimate.costUsd);
      if (!budgetOk) {
        const latencyMs = Date.now() - start;
        span.setAttribute('status', 'error');
        span.setAttribute('error', 'budget_exceeded');
        span.end();
        errorsTotal.inc({ endpoint: '/api/ai/invoke', provider: name, model: request.model || 'unknown', error_type: 'budget_exceeded' } as any, 1);
        return { id: crypto.randomUUID(), provider: name, model: request.model || 'unknown', output: '', raw: { budgetId }, meta: { latencyMs, status: 'error', error: 'budget_exceeded' } };
      }
  // Use request timeoutMs or provider default (5000ms)
  const timeoutMs = request.timeoutMs || parseInt(process.env.DEFAULT_PROVIDER_TIMEOUT_MS || '5000', 10);
  const resp = await retryWithBackoff(() => withTimeout(adapter.invoke!(request), timeoutMs), 2, 100);
      // attach estimate to response
      attachEstimateToInvoke(resp, estimate);

      const latencyMs = Date.now() - start;
      requestsTotal.inc({ endpoint: '/api/ai/invoke', provider: name, model: resp.model || request.model || 'unknown', status: 'ok' } as any, 1);
      latencyHistogram.observe({ endpoint: '/api/ai/invoke', provider: name, model: resp.model || request.model || 'unknown' } as any, latencyMs / 1000);

      span.setAttribute('latency_ms', latencyMs);
      span.setAttribute('status', 'ok');
      span.end();
      return resp;
    } catch (err: any) {
      const latencyMs = Date.now() - start;
      errorsTotal.inc({ endpoint: '/api/ai/invoke', provider: name, model: request.model || 'unknown', error_type: err?.message || 'error' } as any, 1);
      requestsTotal.inc({ endpoint: '/api/ai/invoke', provider: name, model: request.model || 'unknown', status: 'error' } as any, 1);
      span.setAttribute('latency_ms', latencyMs);
      span.setAttribute('status', 'error');
      span.setAttribute('error', err?.message || 'error');
      span.end();
      // Map timeout to typed TimeoutError so callers can handle it
      if (err instanceof Error && err.message === 'timeout') {
        const toErr = new TimeoutError(name);
        if (!isRetryableError(toErr)) {
          return { id: crypto.randomUUID(), provider: name, model: request.model || 'unknown', output: '', raw: toErr, meta: { latencyMs, status: 'error', error: toErr.message, code: toErr.code } };
        }
        // else continue to next provider
      }

      // if error is retryable, try next provider; otherwise fail fast
      if (!isRetryableError(err)) {
        const pErr = err instanceof Error ? new ProviderError(name, err.message, err) : new ProviderError(name);
        return { id: crypto.randomUUID(), provider: name, model: request.model || 'unknown', output: '', raw: pErr, meta: { latencyMs, status: 'error', error: pErr.message, code: pErr.code } };
      }
      // else continue to next provider
    }
  }

  return { id: crypto.randomUUID(), provider: 'none', model: request.model || 'unknown', output: '', raw: { tried }, meta: { latencyMs: 0, status: 'error', error: 'No adapter available or all providers failed' } };
}

export async function generateImage(request: ImageRequest): Promise<ImageResponse> {
  const order = (process.env.AI_PROVIDER_ORDER || '').split(',').map(s => s.trim()).filter(Boolean);
  if (request.providerOverride) order.unshift(request.providerOverride);
  const candidates = order.length ? order : Object.keys(adapters);

  for (const name of candidates) {
    const adapter = adapters[name];
    if (!adapter || !adapter.image) continue;

    const span = trace.getTracer('multi-model-router').startSpan('adapter.image', { attributes: { provider: name, model: request.model || '' } });
    const start = Date.now();
    try {
      const estimate = { costUsd: estimateImageCost(name, request) };
      const budgetId = process.env.BUDGET_SCOPE || name;
      const budgetOk = consumeBudget(budgetId, estimate.costUsd);
      if (!budgetOk) {
        const latencyMs = Date.now() - start;
        span.setAttribute('status', 'error');
        span.setAttribute('error', 'budget_exceeded');
        span.end();
        errorsTotal.inc({ endpoint: '/api/ai/image', provider: name, model: request.model || 'unknown', error_type: 'budget_exceeded' } as any, 1);
        return { id: crypto.randomUUID(), provider: name, model: request.model || 'unknown', url: null, b64: null, raw: { budgetId }, meta: { latencyMs, status: 'error', error: 'budget_exceeded' } };
      }

  const timeoutMs = parseInt(process.env.DEFAULT_PROVIDER_TIMEOUT_MS || '5000', 10);
  const resp = await retryWithBackoff(() => withTimeout(adapter.image!(request), timeoutMs), 2, 100);
      attachEstimateToImage(resp, estimate);
      const latencyMs = Date.now() - start;
      requestsTotal.inc({ endpoint: '/api/ai/image', provider: name, model: resp.model || request.model || 'unknown', status: 'ok' } as any, 1);
      latencyHistogram.observe({ endpoint: '/api/ai/image', provider: name, model: resp.model || request.model || 'unknown' } as any, latencyMs / 1000);
      span.setAttribute('latency_ms', latencyMs);
      span.setAttribute('status', 'ok');
      span.end();
      return resp;
    } catch (err: any) {
      const latencyMs = Date.now() - start;
      errorsTotal.inc({ endpoint: '/api/ai/image', provider: name, model: request.model || 'unknown', error_type: err?.message || 'error' } as any, 1);
      requestsTotal.inc({ endpoint: '/api/ai/image', provider: name, model: request.model || 'unknown', status: 'error' } as any, 1);
      span.setAttribute('latency_ms', latencyMs);
      span.setAttribute('status', 'error');
      span.setAttribute('error', err?.message || 'error');
      span.end();

      if (err instanceof Error && err.message === 'timeout') {
        const toErr = new TimeoutError(name);
        if (!isRetryableError(toErr)) {
          return { id: crypto.randomUUID(), provider: name, model: request.model || 'unknown', url: null, b64: null, raw: toErr, meta: { latencyMs, status: 'error', error: toErr.message, code: toErr.code } };
        }
      }

      if (!isRetryableError(err)) {
        const pErr = err instanceof Error ? new ProviderError(name, err.message, err) : new ProviderError(name);
        return { id: crypto.randomUUID(), provider: name, model: request.model || 'unknown', url: null, b64: null, raw: pErr, meta: { latencyMs, status: 'error', error: pErr.message, code: pErr.code } };
      }
    }
  }

  return { id: crypto.randomUUID(), provider: 'none', model: request.model || 'unknown', url: null, b64: null, raw: {}, meta: { latencyMs: 0, status: 'error', error: 'No image adapter available or all providers failed' } };
}

// If requested, load the mock adapter at runtime so tests can get a happy-path response
if (process.env.ENABLE_MOCK_ADAPTER === 'true') {
  import('./mock-adapter').catch(() => {
    // ignore errors during optional mock import
  });
}
