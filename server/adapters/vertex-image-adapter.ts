import { AIAdapter, ImageRequest, ImageResponse } from './adapter-types';

const VertexImageAdapter: AIAdapter = {
  name: 'vertex',
  async image(request: ImageRequest): Promise<ImageResponse> {
    // Placeholder: implement real Vertex API call
    // Simulate auth check
    if (!process.env.VERTEX_API_KEY) throw new Error('Vertex API key missing');
    // Simulate image generation
    return {
      id: 'vertex-image-' + Date.now(),
      provider: 'vertex',
      model: request.model || 'default',
      url: null,
      b64: 'data:image/png;base64,FAKE_VERTEX_IMAGE',
      raw: {},
      meta: { status: 'ok', latencyMs: 100 }
    };
  }
};

export default VertexImageAdapter;

import { registerAdapter } from './manager';
registerAdapter(VertexImageAdapter);
