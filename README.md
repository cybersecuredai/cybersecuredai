
# Multi-Model Router (minimal)

![CI](https://github.com/cybersecuredai/cybersecuredai/actions/workflows/ci.yml/badge.svg)

See `SPEC.md` for the full technical specification.

Run locally (dev):

```bash
# Install dependencies (npm or pnpm)
npm install

# Compile & run (production-like)
npx tsc -p tsconfig.json
node dist/app/server.js

# Or run in dev mode with ts-node-dev for fast iteration
npx ts-node-dev --respawn --transpile-only app/server.ts
```

Endpoints:

- GET / -> basic API info
- GET /health -> {"status":"ok"}
- POST /invoke -> invoke LLM routing (see SPEC.md)
- POST /image -> image generation

### Quick start

- Requirements
	- Node 22
	- pnpm or npm
- Install and run
	- pnpm install
	- pnpm dev
- Health
	- GET /health → {"status":"ok"}

### Environment (.env)

Do not commit `.env`. Create it from `.env.example` and fill only the keys you have.

Use placeholders locally if you don't want to store real secrets in the repo. Example variables (DO NOT copy real keys into version control):

- OPENAI_API_KEY=REDACTED
- ANTHROPIC_API_KEY=REDACTED
- GEMINI_API_KEY=REDACTED
- DEEPSEEK_API_KEY=REDACTED
- DEEPSEEK_BASE_URL=
- STABILITY_API_KEY=REDACTED
- GOOGLE_PROJECT=
- GOOGLE_LOCATION=

For CI, add these values to your repository secrets and the workflow will forward them to the test job.

Curl examples:

```bash
curl http://localhost:3000/

curl http://localhost:3000/health

curl -X POST http://localhost:3000/invoke \
	-H 'Content-Type: application/json' \
	-d '{"task":"code","input":"generate a function to add two numbers"}'
```

Environment variables (see `.env.example`):
- PORT (default 3000)
- LOG_LEVEL
- OPENAI_API_KEY, ANTHROPIC_API_KEY, GEMINI_API_KEY, DEEPSEEK_API_KEY, DEEPSEEK_BASE_URL

Next steps / Open issues:
- Wire real provider adapters behind feature flags (OpenAI, Anthropic, Gemini, DeepSeek)
- Image provider auth (Vertex SA JSON)
- Observability: Prometheus metrics + OpenTelemetry
- Cost estimator and retry/fallback policies

+ ## What’s new in v0.2
+ - Scene Endpoint: POST /scene for DAG-style multi-node execution
+ - DeepAI Provider: Chat adapter added; Image adapter optional behind FEATURE_DEEPAI_IMAGE
+ - GovCloud OIDC: JWT Bearer auth middleware with issuer and audience validation
+ - ORCA Rebrand: Marketing route at /orca and reference-html import for 53 static pages
+
+ ## Technical Spec
+ See SPEC.md for full details of endpoints, routing, auth, config, and testing:
+ - [SPEC.md](./SPEC.md)
+
+ ## Quickstart
+ 1. Install
+    ```bash
+    npm ci
+    ```
+ 2. Env
+    ```bash
+    cp .env.example .env
+    # Required
+    # OPENAI_API_KEY=...
+    # ANTHROPIC_API_KEY=...
+    # GEMINI_API_KEY=...
+    # DEEPSEEK_API_KEY=...
+    # Optional (v0.2)
+    # DEEPAI_API_KEY=...
+    # OIDC_ISSUER_URL=...
+    # OIDC_CLIENT_ID=...
+    # OIDC_AUDIENCE=...
+    # FEATURE_DEEPAI_IMAGE=0
+    # FEATURE_SCENE_ENDPOINT=1
+    ```
+ 3. Run
+    ```bash
+    npm run dev
+    # or
+    npm run start
+    ```
+ 4. Health
+    ```
+    GET /health  -> { "status": "ok" }
+    ```
+
+ ## Endpoints (v0.2)
+ - POST /invoke  — LLM tasks
+ - POST /image   — Image generation
+ - POST /scene   — Execute a scene graph (DAG)
+ - GET  /health  — Readiness
+
+ ## Providers
+ - LLM: gpt5, claude, gemini, deepseek, deepai
+ - Images: vertex, stability, openai, deepai (FEATURE_DEEPAI_IMAGE=1)
+
+ ## Auth (GovCloud OIDC)
+ - Authorization: Bearer <JWT>
+ - Env: OIDC_ISSUER_URL, OIDC_AUDIENCE, OIDC_CLIENT_ID
+ - Deny-by-default; scope-gate tasks/providers
+
+ ## ORCA Web Rebrand
+ - Next.js route at /orca with OrcaHero, ComplianceBadges, FeatureGrid, CTASection
+ - Static reference set (53 pages) under reference-html/ or public/legacy/
+ - Assets in public/orca
+
+ ## Contributing
+ - Branches tracking v0.2:
+   - feature/scene-endpoint
+   - feature/deepai-adapter
+   - web-code_govcloud-oidc
+   - cybersecuredai-rebrand-to-orca