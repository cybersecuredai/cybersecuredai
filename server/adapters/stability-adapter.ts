import { AIAdapter, ImageRequest, ImageResponse } from './adapter-types';
import crypto from 'crypto';

const NAME = 'stability';

export const StabilityAdapter: AIAdapter = {
  name: NAME,
  supportsInvoke: false,
  supportsImage: true,
  image: async (req: ImageRequest): Promise<ImageResponse> => {
    const start = Date.now();
    try {
      const apiKey = process.env.STABILITY_API;
      if (!apiKey) throw new Error('Stability API key missing');
      // Stub: In production, call Stability API here
      // For now, return a placeholder image
      const b64 = Buffer.from(`stability-placeholder:${req.prompt}`).toString('base64');
      return {
        id: crypto.randomUUID(),
        provider: NAME,
        model: req.model || 'stability-sim',
        url: null,
        b64: `data:image/png;base64,${b64}`,
        metadata: { width: 512, height: 512, format: 'png', sizeBytes: b64.length },
        raw: { simulated: true },
        meta: { latencyMs: Date.now() - start, status: 'ok' }
      };
    } catch (err: any) {
      console.error('[StabilityAdapter] Error in image method:', err);
      return {
        id: crypto.randomUUID(),
        provider: NAME,
        model: req.model || 'stability-sim',
        url: null,
        b64: null,
        raw: { error: err?.message || err },
        meta: { latencyMs: Date.now() - start, status: 'error', error: err?.message || 'Unknown error' }
      };
    }
  }
};

// Auto-register if env var is present
if (process.env.STABILITY_API) {
  try {
    const { registerAdapter } = require('./manager');
    registerAdapter(StabilityAdapter);
  } catch (err) {
    // ignore during static analysis
  }
}

export default StabilityAdapter;
