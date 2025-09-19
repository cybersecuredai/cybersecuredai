# Multi-Model Router - SPEC

This document describes the minimal technical specification for the Multi-Model Router service in this repository. It is intentionally concise and intended to match the README and the top priorities listed in the project board.

## API Endpoints

- GET / -> HTML info page (for docs / link unfurls)
- GET /health -> {"status":"ok"}
- POST /invoke -> route an LLM/text/completion request to a selected provider
- POST /image -> generate an image via a selected image provider

All POST endpoints accept JSON and return normalized JSON shapes shown below.

### POST /invoke

Request body (minimal):

{
  "task": "text" | "chat" | "code",
  "input": string,
  "provider": optional string (override routing),
  "model": optional string,
  "timeoutMs": optional number
}

Normalized response:

{
  "id": string,            // local request id
  "provider": string,      // provider name used (openai|anthropic|gemini|deepseek|...)
  "model": string,
  "usage": { tokens?: number, promptTokens?: number, completionTokens?: number, promptChars?: number, costUsd?: number },
  "output": string | object,
  "raw": object,           // raw provider response for debugging
  "meta": { latencyMs: number, status: "ok" | "error", error?: string }
}

### POST /image

Request body (minimal):

{
  "prompt": string,
  "provider": optional string,
  "model": optional string,
  "size": optional string (e.g. "1024x1024"),
}

Normalized response:

{
  "id": string,
  "provider": string,
  "model": string,
  "url": string | null,
  "b64": string | null,
  "metadata": { width?: number, height?: number, format?: string, sizeBytes?: number },
  "raw": object,
  "meta": { latencyMs: number, status: "ok" | "error", error?: string }
}

Only one of `url` or `b64` is required; adapters should prefer `url` if provider returns a hosted location. Adapters MUST enforce configured size and content-type limits and return 413 or 422-like normalized error in `meta.error` if limits are exceeded.

## Provider adapters & feature flags

- Adapters implement a common TypeScript interface (see code). Each adapter is registered behind a feature flag/environment gate.
- Supported provider env vars (examples):
  - OPENAI_API_KEY
  - ANTHROPIC_API_KEY
  - GEMINI_API_KEY or GOOGLE_CREDENTIALS_JSON (Vertex)
  - DEEPSEEK_API_KEY, DEEPSEEK_BASE_URL
  - STABILITY_API_KEY (stability for images)

- Feature gating: adapters only register if their env var is present OR an explicit feature flag (e.g., FEATURE_OPENAI=true) is set.

## Router policy

- A runtime routing policy determines provider order, per-provider model mapping, and per-provider timeouts. Policy should be configurable via JSON or environment.
- Policy fields: priority ordered providers, per-provider timeoutMs, per-task model mapping.
- Router returns normalized shape above and populates `meta.latencyMs`.

## Observability

- Expose Prometheus metrics endpoint `/metrics`.
- Minimum metrics:
  - requests_total{endpoint,provider,model,status}
  - errors_total{endpoint,provider,model,error_type}
  - latency_seconds_bucket (histogram) with labels endpoint,provider,model

- Add OpenTelemetry spans at adapter invocation boundaries with attributes: provider, model, latency_ms, status.

## Cost estimator & budgets

- Provide a lightweight per-call cost estimator (lookup table per provider+model). Return an estimated `usage.costUsd` in the normalized response when possible.
- Maintain in-memory rolling counters per provider (requests, estimated cost) with an API to get current totals. Add a budget-guard that refuses or routes to cheaper providers when a configured budget is exceeded.

## Retry and fallback

- Retry helper for idempotent calls using jittered exponential backoff.
- Fast-fail on authentication errors and 4xx client errors.
- On timeout or rate-limit (429/5xx), fallback to next provider in the policy list if available.

## Errors

- All errors should be normalized in the response `meta` block. HTTP status codes should reflect major classes (200 for normalized error objects when desirable, 4xx for client errors, 5xx for server errors).

## Security

- Do not log secrets. Redact API keys from logs. Only expose raw provider responses in `raw` when DEBUG flag is set.

## Run & Dev

- See `README.md`. Dev loop:

```bash
npm install
npx ts-node-dev --respawn --transpile-only app/server.ts
```

GET /health -> {"status":"ok"}

## Notes

- This SPEC is intentionally minimal and will be used to scaffold adapters, metrics, and retry helpers. Keep it in sync with README.md.
