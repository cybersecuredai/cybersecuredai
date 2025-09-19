import { AIAdapter, InvokeRequest, InvokeResponse, ImageRequest, ImageResponse } from './adapter-types';
import crypto from 'crypto';

export const MockAdapter: AIAdapter = {
  name: 'mock-adapter',
  supportsInvoke: true,
  supportsImage: true,
  invoke: async (req: InvokeRequest): Promise<InvokeResponse> => {
    const id = crypto.randomUUID();
    const start = Date.now();
    // simple echo-like response
    const output = typeof req.input === 'string' ? `mock response: ${req.input}` : { echoed: req.input };
    const latencyMs = Date.now() - start;
    return {
      id,
      provider: 'mock-adapter',
      model: req.model || 'mock-model',
      output,
      raw: { mocked: true },
      meta: { latencyMs, status: 'ok' }
    };
  },
  image: async (req: ImageRequest): Promise<ImageResponse> => {
    const id = crypto.randomUUID();
    const start = Date.now();
    const latencyMs = Date.now() - start;
    return {
      id,
      provider: 'mock-adapter',
      model: req.model || 'mock-image-model',
      url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
      b64: null,
      raw: { mocked: true },
      meta: { latencyMs, status: 'ok' }
    };
  }
};

// Auto-register helper when explicitly enabled (development/test runs)
if (process.env.ENABLE_MOCK_ADAPTER === 'true') {
  // Delay require of manager to avoid circular imports at module load
  import('./manager').then(({ registerAdapter }) => {
    registerAdapter(MockAdapter);
  }).catch(() => {
    // ignore registration errors during optional mock import
  });
}

export default MockAdapter;
