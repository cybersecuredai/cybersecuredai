import fetch from 'node-fetch';

const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);

(async () => {
  try {
    const res = await fetch('http://localhost:5000/api/ai/invoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: 'chat', input: 'hello', model: 'test-model' }),
      signal: controller.signal
    });
    console.log('status', res.status);
    const text = await res.text();
    console.log(text);
  } catch (err) {
    console.error('fetch error', err.message);
  }
})();
