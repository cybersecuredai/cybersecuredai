import { AIAdapter, ImageRequest, ImageResponse } from './adapter-types';

const GeminiImageAdapter: AIAdapter = {
  name: 'gemini',
  async image(request: ImageRequest): Promise<ImageResponse> {
    // Placeholder: implement real Gemini API call
    if (!process.env.GEMINI_API_KEY) throw new Error('Gemini API key missing');
    // Simulate image generation
    return {
      id: 'gemini-image-' + Date.now(),
      provider: 'gemini',
      model: request.model || 'default',
      url: null,
      b64: 'data:image/png;base64,FAKE_GEMINI_IMAGE',
      raw: {},
      meta: { status: 'ok', latencyMs: 100 }
    };
  }
};

export default GeminiImageAdapter;

import { registerAdapter } from './manager';
registerAdapter(GeminiImageAdapter);
