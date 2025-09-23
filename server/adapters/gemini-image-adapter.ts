import { AIAdapter, ImageRequest, ImageResponse } from './adapter-types';

const GeminiImageAdapter: AIAdapter = {
  name: 'gemini',
  async image(request: ImageRequest): Promise<ImageResponse> {
    const start = Date.now();
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error('Gemini API key missing');
      const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: request.prompt ?? "Say hello" }] }],
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Gemini API error: ${res.status} ${err}`);
      }
      const data = await res.json();
      const b64 = data.candidates?.[0]?.content?.parts?.[0]?.text || null;
      if (!b64) throw new Error('No image or text returned from Gemini');
      return {
        id: 'gemini-image-' + Date.now(),
        provider: 'gemini',
        model: request.model || 'gemini-1.5-flash',
        url: null,
        b64,
        raw: data,
        meta: { status: 'ok', latencyMs: Date.now() - start }
      };
    } catch (err: any) {
      console.error('[GeminiImageAdapter] Error in image method:', err);
      return {
        id: 'gemini-image-' + Date.now(),
        provider: 'gemini',
        model: request.model || 'gemini-1.5-flash',
        url: null,
        b64: null,
        raw: { error: err?.message || err },
        meta: { status: 'error', latencyMs: Date.now() - start, error: err?.message || 'Unknown error' }
      };
    }
  }
};

export default GeminiImageAdapter;

import { registerAdapter } from './manager';
registerAdapter(GeminiImageAdapter);
