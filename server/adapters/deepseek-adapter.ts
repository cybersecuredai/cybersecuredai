import { AIAdapter, ImageRequest, ImageResponse } from './adapter-types';
import { loadDeepSeekAuth, validateImageSize } from './image-auth';
import crypto from 'crypto';

const NAME = 'deepseek';

export const DeepSeekAdapter: AIAdapter = {
  name: NAME,
  supportsInvoke: false,
  supportsImage: true,
  image: async (req: ImageRequest): Promise<ImageResponse> => {
    const start = Date.now();
    try {
      const auth = loadDeepSeekAuth();
      if (!auth.apiKey) {
        throw new Error('auth_missing');
      }
      const sizeCheck = validateImageSize(req.size);
      if (!sizeCheck.ok) {
        throw new Error(sizeCheck.error || 'invalid_size');
      }
      // Simulated image response
      const b64 = Buffer.from(`deepseek-placeholder:${req.prompt}`).toString('base64');
      return {
        id: crypto.randomUUID(), provider: NAME, model: req.model || 'deepseek-sim', url: null,
        b64: `data:image/png;base64,${b64}`,
        metadata: { width: sizeCheck.width || 512, height: sizeCheck.height || 512, format: 'png', sizeBytes: b64.length },
        raw: { simulated: true },
        meta: { latencyMs: Date.now() - start, status: 'ok' }
      };
    } catch (err: any) {
      console.error('[DeepSeekAdapter] Error in image method:', err);
      return {
        id: crypto.randomUUID(), provider: NAME, model: req.model || 'deepseek-sim', url: null, b64: null,
        raw: { error: err?.message || err },
        meta: { latencyMs: Date.now() - start, status: 'error', error: err?.message || 'Unknown error' }
      };
    }
  }
};

if (process.env.DEEPSEEK_API_KEY || process.env.FEATURE_DEEPSEEK === 'true') {
  try {
    const { registerAdapter } = require('./manager');
    registerAdapter(DeepSeekAdapter);
  } catch (err) {
    // ignore
  }
}
