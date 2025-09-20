import { AIAdapter, ImageRequest, ImageResponse } from './adapter-types';
import { loadGoogleAuth } from './image-auth';

const GoogleImageAdapter: AIAdapter = {
  name: 'google',
  async image(request: ImageRequest): Promise<ImageResponse> {
    // Placeholder: implement real Google image API call
    const auth = await loadGoogleAuth();
    if (!auth) throw new Error('Google credentials missing');
    // Simulate image generation
    return {
      id: 'google-image-' + Date.now(),
      provider: 'google',
      model: request.model || 'default',
      url: null,
      b64: 'data:image/png;base64,FAKE_GOOGLE_IMAGE',
      raw: {},
      meta: { status: 'ok', latencyMs: 100 }
    };
  }
};

export default GoogleImageAdapter;

// Auto-register if manager is loaded
import { registerAdapter } from './manager';
registerAdapter(GoogleImageAdapter);
