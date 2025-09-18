import { AIAdapter, InvokeRequest, InvokeResponse, ImageRequest, ImageResponse } from './adapter-types';
import crypto from 'crypto';

const NAME = 'anthropic';

export const AnthropicAdapter: AIAdapter = {
  name: NAME,
  supportsInvoke: true,
  supportsImage: false,
  invoke: async (req: InvokeRequest): Promise<InvokeResponse> => {
    const start = Date.now();
    const output = `Simulated Anthropic response for task=${req.task} input=${req.input.substring(0,120)}`;
    const latencyMs = Date.now() - start;

    return {
      id: crypto.randomUUID(),
      provider: NAME,
      model: req.model || 'claude-sim-1',
      usage: { tokens: Math.min(1000, Math.max(1, Math.floor(req.input.length / 3))) },
      output,
      raw: { simulated: true },
      meta: { latencyMs, status: 'ok' }
    };
  }
};

if (process.env.ANTHROPIC_API_KEY || process.env.FEATURE_ANTHROPIC === 'true') {
  try {
    const { registerAdapter } = require('./manager');
    registerAdapter(AnthropicAdapter);
  } catch (err) {
    // ignore during static analysis
  }
}
