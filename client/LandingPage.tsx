import React, { useEffect, useState } from 'react';

export default function LandingPage() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/ai/image/providers')
      .then(res => res.json())
      .then(data => {
        setProviders(data.providers || []);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load providers');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading image providers...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <h1>Available Image Providers</h1>
      <ul>
        {providers.map((p: any) => (
          <li key={p.name}>
            <strong>{p.name}</strong> {p.supportsImage ? '(Image)' : ''} {p.supportsInvoke ? '(Text)' : ''}
          </li>
        ))}
      </ul>
    </main>
  );
}<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>CyberSecured AI — Multi‑Model Router</title>
	<link rel="stylesheet" href="styles.css">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
	<meta name="description" content="Route tasks across GPT‑5, Claude, Gemini 2.5 Pro, and DeepSeek. Secure. Fast. Cost‑aware.">
</head>
<body>
	<header class="site-header">
		<div class="container row">
			<div class="brand">CyberSecured AI</div>
			<nav class="nav">
				<a href="#features">Features</a>
				<a href="#how-it-works">How it works</a>
				<a href="#demo">Live demo</a>
				<a class="btn small primary" href="#get-started">Get started</a>
			</nav>
		</div>
	</header>

	<section class="hero">
		<div class="container">
			<h1>Multi‑Model Router for Secure AI</h1>
			<p class="lead">
				Intelligently route tasks to GPT‑5, Claude, Gemini 2.5 Pro, and DeepSeek.
				Latency‑optimized. Cost‑aware. Gov‑ready.
			</p>
			<div class="cta-group">
				<a class="btn primary" href="#get-started">Deploy from GitHub</a>
				<a class="btn ghost" href="#demo">Try a live call</a>
			</div>
			<div class="badges">
				<span class="badge">Fastify + TypeScript</span>
				<span class="badge">/health & /invoke</span>
				<span class="badge">Docker‑ready</span>
			</div>
		</div>
	</section>

	<section id="features" class="section">
		<div class="container grid-3">
			<div class="card">
				<h3>Smart routing</h3>
				<p>Code → GPT‑5. Long reasoning → Gemini 2.5 Pro. Cost‑sensitive → DeepSeek. Chat → Claude.</p>
			</div>
			<div class="card">
				<h3>Fallbacks</h3>
				<p>Automatic failover between providers to keep SLOs green.</p>
			</div>
			<div class="card">
				<h3>Secure by default</h3>
				<p>Environment‑only keys. Works with AWS Secrets Manager or Azure Key Vault.</p>
			</div>
		</div>
	</section>

	<section id="how-it-works" class="section alt">
		<div class="container">
			<h2>How it works</h2>
			<ol class="steps">
				<li>Client sends task to <code>/invoke</code> with <code>{ task, input, options }</code>.</li>
				<li>Router validates, picks provider, calls model, and returns <code>{ provider, result }</code>.</li>
				<li>Fallback engages on errors or policy constraints.</li>
			</ol>
			<pre class="code"><code>{
  "task": "chat_general",
  "input": "Summarize zero trust for K‑12"
}</code></pre>
		</div>
	</section>

	<section id="demo" class="section">
		<div class="container">
			<h2>Live demo</h2>
			<p>Set your API base in the field below and click Run. No keys stored in the browser.</p>
			<div class="demo">
				<label>Router API Base</label>
				<input id="apiBase" placeholder="https://your-domain.example.com" />
				<label>Task</label>
				<select id="task">
					<option value="chat_general">chat_general</option>
					<option value="code">code</option>
					<option value="reasoning_long">reasoning_long</option>
					<option value="reasoning_cost_sensitive">reasoning_cost_sensitive</option>
					<option value="image_generate">image_generate</option>
				</select>
				<label>Input</label>
				<textarea id="input" rows="4" placeholder="Type your prompt...">Say hello from the CyberSecured router.</textarea>
				<button id="run" class="btn primary">Run</button>
				<pre id="out" class="code"></pre>
			</div>
		</div>
	</section>

	<section id="get-started" class="section alt">
		<div class="container">
			<h2>Get started</h2>
			<div class="grid-2">
				<div class="card">
					<h3>Local quickstart</h3>
					<pre class="code"><code>pnpm install
pnpm dev   # server listens on PORT or 8080
# Health:
curl http://localhost:8080/health</code></pre>
				</div>
				<div class="card">
					<h3>Docker</h3>
					<pre class="code"><code>docker compose up -d --build
# or:
docker build -t router:latest .
docker run -p 8080:8080 --env-file .env router:latest</code></pre>
				</div>
			</div>
		</div>
	</section>

	<footer class="site-footer">
		<div class="container row">
			<div>© <span id="year"></span> CyberSecured AI</div>
			<div class="muted">Gov‑ready pathways: AWS GovCloud, Azure Government</div>
		</div>
	</footer>

	<script src="script.js"></script>
</body>
</html>
:root{
	--bg:#0b0f1a; --card:#121829; --muted:#98a2b3; --text:#e6eaf2; --primary:#4f7cff; --primary-600:#3e64d1; --accent:#34d399; --border:#20263a;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,Segoe UI,Arial,sans-serif}
a{color:var(--text);text-decoration:none}
.container{max-width:1100px;margin:0 auto;padding:0 20px}
.row{display:flex;align-items:center;justify-content:space-between;gap:16px}
.nav a{margin-left:16px;color:var(--muted)}
.nav a.btn{color:#fff}
.brand{font-weight:700}
.site-header{position:sticky;top:0;background:rgba(11,15,26,.8);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);z-index:10}
.site-header .container{height:64px}

.hero{padding:80px 0 40px;background:radial-gradient(1200px 600px at 80% -10%,rgba(79,124,255,.2),transparent)}
.hero h1{font-size:40px;margin:0 0 12px}
.lead{color:var(--muted);max-width:720px}
.cta-group{display:flex;gap:12px;margin-top:20px}
.btn{display:inline-block;padding:10px 16px;border-radius:8px;border:1px solid var(--border);background:transparent}
.btn.primary{background:var(--primary);border-color:var(--primary);color:#fff}
.btn.primary:hover{background:var(--primary-600)}
.btn.ghost{background:transparent}
.btn.small{padding:6px 10px;font-size:14px}

.badges{display:flex;gap:8px;margin-top:16px;flex-wrap:wrap}
.badge{border:1px solid var(--border);background:rgba(32,38,58,.6);padding:4px 8px;border-radius:999px;font-size:12px;color:var(--muted)}

.section{padding:56px 0;border-top:1px solid var(--border)}
.section.alt{background:#0d1324}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.card{background:var(--card);border:1px solid var(--border);padding:18px;border-radius:12px}
.card h3{margin-top:0}

.steps{counter-reset:step;padding-left:0;list-style:none}
.steps li{margin:8px 0;padding-left:0}
.code{background:#0a0f1f;border:1px solid var(--border);padding:12px;border-radius:10px;overflow:auto;color:#cbd5e1}

.demo{display:grid;gap:8px;grid-template-columns:1fr}
.demo input,.demo select,.demo textarea{background:#0b1020;border:1px solid var(--border);color:var(--text);padding:10px;border-radius:8px}
.demo label{font-size:14px;color:var(--muted)}
.demo .btn{margin-top:8px}

.site-footer{padding:28px 0;border-top:1px solid var(--border);color:var(--muted)}
.muted{color:var(--muted)}

@media (max-width:900px){
	.grid-3{grid-template-columns:1fr}
	.grid-2{grid-template-columns:1fr}
	.hero h1{font-size:32px}
}const $ = sel => document.querySelector(sel);
const apiInput = $('#apiBase');
const runBtn = $('#run');
const out = $('#out');
const year = $('#year');

year.textContent = new Date().getFullYear();

// Default from env‑injectable placeholder replaced at build or manually:
const DEFAULT_API = window.ROUTER_API_URL || '';
apiInput.value = DEFAULT_API;

runBtn?.addEventListener('click', async () => {
	const base = apiInput.value.trim().replace(/\/+$/,'');
	const task = $('#task').value;
	const input = $('#input').value;

	if (!base) {
		out.textContent = 'Set Router API Base first, e.g. https://router.example.com';
		return;
	}

	try {
		out.textContent = 'Calling ' + base + '/invoke ...';
		const res = await fetch(base + '/invoke', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ task, input })
		});
		const data = await res.json();
		out.textContent = JSON.stringify(data, null, 2);
	} catch (e) {
		out.textContent = 'Error: ' + (e && e.message ? e.message : String(e));
	}
});or // Rename to config.js and include with <script src="config.js"></script> before script.js
window.ROUTER_API_URL = "https://your-router.example.com";