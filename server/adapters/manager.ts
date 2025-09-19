import { AIAdapter, InvokeRequest, ImageRequest, InvokeResponse, ImageResponse } from './adapter-types';
import crypto from 'crypto';
import { requestsTotal, errorsTotal, latencyHistogram } from '../observability/metrics';
import { retryWithBackoff, isRetryableError } from '../retry/retry';
import { estimateInvokeCost, estimateImageCost, attachEstimateToInvoke, attachEstimateToImage } from '../cost/cost-estimator';
import { consumeBudget, getBudgetFor } from '../cost/budget-guard';
import { trace } from '@opentelemetry/api';

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
      const resp = await retryWithBackoff(() => adapter.invoke!(request), 2, 100);
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

      // if error is retryable, try next provider; otherwise fail fast
      if (!isRetryableError(err)) {
        return { id: crypto.randomUUID(), provider: name, model: request.model || 'unknown', output: '', raw: err, meta: { latencyMs, status: 'error', error: err?.message } };
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

      const resp = await retryWithBackoff(() => adapter.image!(request), 2, 100);
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

      if (!isRetryableError(err)) {
        return { id: crypto.randomUUID(), provider: name, model: request.model || 'unknown', url: null, b64: null, raw: err, meta: { latencyMs, status: 'error', error: err?.message } };
      }
    }
  }

  return { id: crypto.randomUUID(), provider: 'none', model: request.model || 'unknown', url: null, b64: null, raw: {}, meta: { latencyMs: 0, status: 'error', error: 'No image adapter available or all providers failed' } };
}
