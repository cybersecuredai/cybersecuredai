import { AIAdapter, InvokeRequest, InvokeResponse, ImageRequest, ImageResponse } from './adapter-types';
import crypto from 'crypto';

const NAME = 'openai';

export const OpenAIAdapter: AIAdapter = {
  name: NAME,
  supportsInvoke: true,
  supportsImage: true,
  invoke: async (req: InvokeRequest): Promise<InvokeResponse> => {
    // simple simulation - in production call OpenAI SDK
    const start = Date.now();
    const output = `Simulated OpenAI response for task=${req.task} input=${req.input.substring(0,120)}`;
    const latencyMs = Date.now() - start;

    return {
      id: crypto.randomUUID(),
      provider: NAME,
      model: req.model || 'gpt-sim-1',
      usage: { tokens: Math.min(1000, Math.max(1, Math.floor(req.input.length / 4))) },
      output,
      raw: { simulated: true },
      meta: { latencyMs, status: 'ok' }
    };
  },
  image: async (req: ImageRequest): Promise<ImageResponse> => {
    const start = Date.now();
    const id = crypto.randomUUID();
    const latencyMs = Date.now() - start;

    // return data URL placeholder
    const b64 = Buffer.from(`placeholder image for ${req.prompt}`).toString('base64');

    return {
      id,
      provider: NAME,
      model: req.model || 'dall-e-sim',
      url: null,
      b64: `data:image/png;base64,${b64}`,
      metadata: { width: 512, height: 512, format: 'png', sizeBytes: b64.length },
      raw: { simulated: true },
      meta: { latencyMs, status: 'ok' }
    };
  }
};

// Auto-register when env present or FEATURE_OPENAI=true
if (process.env.OPENAI_API_KEY || process.env.FEATURE_OPENAI === 'true') {
  try {
    const { registerAdapter } = require('./manager');
    registerAdapter(OpenAIAdapter);
  } catch (err) {
    // ignore during static analysis
  }
}
