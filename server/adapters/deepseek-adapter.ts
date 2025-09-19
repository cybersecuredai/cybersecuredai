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
    const auth = loadDeepSeekAuth();
    if (!auth.apiKey) {
      return {
        id: crypto.randomUUID(), provider: NAME, model: req.model || 'deepseek-sim', url: null, b64: null,
        meta: { latencyMs: Date.now() - start, status: 'error', error: 'auth_missing' }
      };
    }

    const sizeCheck = validateImageSize(req.size);
    if (!sizeCheck.ok) {
      return {
        id: crypto.randomUUID(), provider: NAME, model: req.model || 'deepseek-sim', url: null, b64: null,
        meta: { latencyMs: Date.now() - start, status: 'error', error: sizeCheck.error }
      };
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
