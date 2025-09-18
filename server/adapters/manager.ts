import { AIAdapter, InvokeRequest, ImageRequest, InvokeResponse, ImageResponse } from './adapter-types';
import crypto from 'crypto';

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
  const adapter = chooseAdapterByPolicy(request.providerOverride);
  if (!adapter || !adapter.invoke) {
    return {
      id: crypto.randomUUID(), provider: adapter?.name || 'none', model: request.model || 'unknown',
      output: '', meta: { latencyMs: 0, status: 'error', error: 'No adapter available' }
    };
  }

  return adapter.invoke(request);
}

export async function generateImage(request: ImageRequest): Promise<ImageResponse> {
  const adapter = chooseAdapterByPolicy(request.providerOverride);
  if (!adapter || !adapter.image) {
    return {
      id: crypto.randomUUID(), provider: adapter?.name || 'none', model: request.model || 'unknown', url: null, b64: null,
      meta: { latencyMs: 0, status: 'error', error: 'No image adapter available' }
    };
  }

  return adapter.image(request);
}
