// Alias for compatibility with Google image adapter stub
export const loadGoogleAuth = loadGoogleCredentials;
/**
 * Image provider auth loaders and helpers
 */
import fs from 'fs';

export function loadGoogleCredentials(): any | null {
  const raw = process.env.GOOGLE_CREDENTIALS_JSON || process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch (err) {
    try {
      // treat as file path
      const content = fs.readFileSync(raw, 'utf8');
      return JSON.parse(content);
    } catch (err2) {
      console.error('Failed to parse GOOGLE_CREDENTIALS_JSON:', err2);
      return null;
    }
  }
}

export function loadDeepSeekAuth(): { apiKey?: string; baseUrl?: string } {
  return {
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseUrl: process.env.DEEPSEEK_BASE_URL
  };
}

export function validateImageSize(size?: string, maxWidth = 2048, maxHeight = 2048) {
  if (!size) return { ok: true };
  const parts = size.split('x').map(s => parseInt(s, 10));
  if (parts.length !== 2 || parts.some(isNaN)) return { ok: false, error: 'invalid size format' };
  const [w, h] = parts;
  if (w > maxWidth || h > maxHeight) return { ok: false, error: 'size exceeds maximum allowed' };
  return { ok: true, width: w, height: h };
}

export function enforceContentType(mimetype: string) {
  const allowed = ['image/png', 'image/jpeg', 'image/webp'];
  return allowed.includes(mimetype);
}
