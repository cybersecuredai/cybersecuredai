import { InvokeRequest, InvokeResponse, ImageRequest, ImageResponse } from '../adapters/adapter-types';

// Simple per-provider rate table (USD per 1k tokens or per image)
const RATE_TABLE: Record<string, { per1kTokens?: number; perImage?: number }> = {
  openai: { per1kTokens: 0.02, perImage: 0.02 },
  anthropic: { per1kTokens: 0.03 },
  deepseek: { perImage: 0.05 },
  vertex: { per1kTokens: 0.015, perImage: 0.015 }
};

// Estimate cost for text invoke based on token estimate (very rough)
export function estimateInvokeCost(provider: string, req: InvokeRequest): number {
  const key = provider.toLowerCase();
  const rates = RATE_TABLE[key] || {};

  // rough token estimate: 1 token per 4 chars
  const tokens = Math.max(1, Math.ceil(req.input.length / 4));
  const per1k = rates.per1kTokens || 0.05; // default
  const cost = (tokens / 1000) * per1k;
  return Number(cost.toFixed(8));
}

export function estimateImageCost(provider: string, req: ImageRequest): number {
  const key = provider.toLowerCase();
  const rates = RATE_TABLE[key] || {};
  const perImage = rates.perImage ?? 0.05;
  return Number(perImage.toFixed(8));
}

export type UsageEstimate = { costUsd: number };

export function attachEstimateToInvoke(resp: InvokeResponse, estimate: UsageEstimate) {
  resp.usage = resp.usage || {};
  resp.usage.costUsd = (resp.usage.costUsd || 0) + estimate.costUsd;
}

export function attachEstimateToImage(resp: ImageResponse, estimate: UsageEstimate) {
  resp.metadata = resp.metadata || {};
  // store cost under metadata for now
  (resp as any).costUsd = (resp as any).costUsd || 0;
  (resp as any).costUsd += estimate.costUsd;
}

export default { estimateInvokeCost, estimateImageCost };
