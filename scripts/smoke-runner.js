import fetch from 'node-fetch';

async function checkHealth() {
  const res = await fetch('http://127.0.0.1:5000/api/health', { timeout: 5000 });
  if (res.status !== 200) throw new Error(`health status ${res.status}`);
  const body = await res.json();
  console.log('health OK:', body.status);
}

async function checkInvoke() {
  const res = await fetch('http://127.0.0.1:5000/api/ai/invoke', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: 'chat', input: 'hello', model: 'test-model' }),
    timeout: 5000
  });
  const text = await res.text();
  console.log('/api/ai/invoke status', res.status);
  console.log(text);
}

(async () => {
  try {
    await checkHealth();
    await checkInvoke();
    console.log('Smoke tests passed');
    process.exit(0);
  } catch (err) {
    console.error('Smoke tests failed:', err.message);
    process.exit(2);
  }
})();
