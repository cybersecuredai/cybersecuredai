export async function retryWithBackoff<T>(fn: () => Promise<T>, attempts = 3, baseMs = 100) : Promise<T> {
  let lastErr: any;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const jitter = Math.random() * baseMs;
      const delay = baseMs * Math.pow(2, i) + jitter;
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw lastErr;
}

export function isRetryableError(err: any) {
  if (!err) return false;
  const retryable = err.status >= 500 || err.status === 429 || err.code === 'ETIMEDOUT';
  return retryable;
}
