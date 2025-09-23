
import { AIAdapter, ImageRequest, ImageResponse } from './adapter-types';
// Debug: Log registration
console.log('[VertexImageAdapter] Loading Vertex adapter module');

const VertexImageAdapter: AIAdapter = {
  name: 'vertex',
  async image(request: ImageRequest): Promise<ImageResponse> {
    console.log('[VertexImageAdapter] image() called');
    // Real Vertex AI image generation using googleapis
  const { GoogleAuth } = await import('google-auth-library');
  const fetch = (await import('node-fetch')).default;
  const credsJson = process.env.GOOGLE_CREDENTIALS1_JSON;
    if (!credsJson) {
      console.error('[VertexImageAdapter] GOOGLE_CREDENTIALS1_JSON missing');
      throw new Error('Vertex AI service account JSON missing');
    }
    const creds = typeof credsJson === 'string' ? JSON.parse(credsJson) : credsJson;
    const auth = new GoogleAuth({ credentials: creds, scopes: ['https://www.googleapis.com/auth/cloud-platform'] });
    const client = await auth.getClient();
    const at = await client.getAccessToken();
    const token = typeof at === 'string' ? at : at.token!;
    console.log('Vertex SA:', creds.client_email);
    console.log('Auth token prefix:', token.slice(0, 12));
    const headers = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
    console.log('[VertexImageAdapter] Using project:', process.env.GCP_PROJECT_ID || creds.project_id);
  const project = process.env.GCP_PROJECT_ID_GCP || creds.project_id;
    const location = process.env.GCP_PROJECT_LOCATION || 'us-central1';
    const model = request.model || 'imagegeneration';
    const endpoint = `https://us-central1-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/publishers/google/models/${model}:predict`;
    const start = Date.now();
    try {
      console.log('[VertexImageAdapter] Sending request to Vertex endpoint:', endpoint);
      // Use getRequestHeaders to ensure a valid OAuth2 Bearer token
      const headersObj = await client.getRequestHeaders();
      const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          instances: [{ prompt: request.prompt || request.input || 'Generate an image' }],
          parameters: {}
        })
      });
      if (!response.ok) {
        const err = await response.text();
        console.error(`[VertexImageAdapter] Vertex AI error: ${response.status} ${err}`);
        throw new Error(`Vertex AI error: ${response.status} ${err}`);
      }
      const data = await response.json();
      const b64 = data.predictions?.[0]?.bytesBase64Encoded || null;
      if (!b64) {
        console.error('[VertexImageAdapter] No image returned from Vertex AI');
        throw new Error('No image returned from Vertex AI');
      }
      return {
        id: 'vertex-image-' + Date.now(),
        provider: 'vertex',
        model,
        url: null,
        b64,
        raw: data,
        meta: { status: 'ok', latencyMs: Date.now() - start }
      };
    } catch (err: any) {
      throw err;
    }
  }
};


export default VertexImageAdapter;

import { registerAdapter } from './manager';
console.log('[VertexImageAdapter] Registering Vertex adapter');
// Add logging inside the image method for runtime errors
const origImage = VertexImageAdapter.image;
VertexImageAdapter.image = async function(...args) {
  try {
    return await origImage.apply(this, args);
  } catch (err) {
    console.error('[VertexImageAdapter] Error in image method:', err);
    throw err;
  }
};
registerAdapter(VertexImageAdapter);
console.log('[VertexImageAdapter] Registered Vertex adapter');
