import { AIAdapter, ImageRequest, ImageResponse } from './adapter-types';
import { loadGoogleAuth } from './image-auth';

function hasGoogleCredentials() {
  return !!(process.env.GOOGLE_CREDENTIALS_JSON || process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
}
const GoogleImageAdapter: AIAdapter = {
  name: 'google',
  async image(request: ImageRequest): Promise<ImageResponse> {
    // Placeholder: implement real Google image API call
  if (!hasGoogleCredentials()) throw new Error('Google credentials missing');
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
