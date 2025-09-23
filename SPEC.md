# Multi-Model Router — Technical Specification (v0.2)
Status: Active • Owner: Sam Bascal • Codebase: <cybersecuredai/cybersecuredai>

## 1) Summary of Changes
- Added Scene Endpoint for DAG-style multi-node execution
- Added DeepAI provider (chat required; image optional behind feature flag)
- Added GovCloud OIDC JWT auth middleware
- Added ORCA web rebrand deliverables (/orca route + reference-html)
- Tracked work via feature branches created in repo

## 2) Endpoints
- POST /invoke — LLM tasks
- POST /image — image generation
- POST /scene — execute a scene graph of nodes
- GET /health — readiness

Request schemas (TypeScript):
```ts
import { z } from "zod";

export const InvokeSchema = z.object({
  task: z.enum(["code","reasoning_long","reasoning_cost_sensitive","chat_general","chat_cost_sensitive","image_generate"]),
  input: z.string(),
  options: z.object({
    tokens: z.number().optional(),
    mode: z.enum(["think","fast"]).optional(),
    image: z.object({
      prompt: z.string().optional(),
      size: z.string().optional(),
      provider: z.enum(["vertex","stability","openai","deepai"]).optional()
    }).optional()
  }).optional()
});

export type SceneNode = {
  id: string;
  type: "chat" | "image" | "tool";
  provider?: "gpt5" | "claude" | "gemini" | "deepseek" | "deepai" | "vertex" | "stability" | "openai";
  input?: string;
  params?: Record<string, any>;
  dependsOn?: string[]; // execute after these ids
};
export const SceneRequestSchema = z.object({ nodes: z.array(z.any()) });
```

## 3) Providers
- LLM: gpt5, claude, gemini, deepseek, deepai
- Images: vertex, stability, openai, deepai (gated by FEATURE_DEEPAI_IMAGE)

## 4) Routing Matrix (delta highlights)
- chat_cost_sensitive → deepai primary, deepseek fallback
- image_generate → include deepai when FEATURE_DEEPAI_IMAGE=1
- existing v0.1 routes remain for code, reasoning_long, chat_general

## 5) Auth (GovCloud OIDC)
- Default: JWT auth via /api/auth endpoints (implemented).  
- OIDC (GovCloud) planned: when OIDC_ISSUER_URL, OIDC_AUDIENCE, OIDC_CLIENT_ID are set, enforce Bearer JWT validation against OIDC issuer (to be wired).  
- Deny-by-default, scope-gate tasks/providers.

## 6) Configuration and Secrets (additions)
- DEEPAI_API_KEY
- OIDC_ISSUER_URL, OIDC_CLIENT_ID, OIDC_AUDIENCE
- FEATURE_DEEPAI_IMAGE=0|1
- FEATURE_SCENE_ENDPOINT=0|1
- Existing: OPENAI_API_KEY, ANTHROPIC_API_KEY, GEMINI_API_KEY, DEEPSEEK_API_KEY, DEEPSEEK_BASE_URL, LOG_LEVEL, PORT

## 7) Observability
- Pino JSON logs with requestId and structured fields (implemented)
- Metrics: invocation counters, failure counters, latency histograms (implemented)
- Tracing: hooks for OpenTelemetry (initialized; spans around adapter calls)

## 8) Error Handling & Retries
- Provider timeouts with typed errors (implemented)
- Single retry with exponential backoff and fallback to next provider in AI_PROVIDER_ORDER (implemented)
- Error shape: { provider, code, message, retryable } (returned as structured error payloads)

## 9) Security & Data Handling
- No persistence of inputs/outputs by default
- Redact secrets in logs
- CORS disabled by default; allowlist as needed

## 10) Deployment (GovCloud)
- ECS/Fargate in private subnets behind ALB + WAF
- OIDC environment for API, Vertex SA via secret manager
- /health for target group

## 11) Testing Plan
- Unit: routing decisions, schema validation
- Integration: each provider (incl. DeepAI chat; image behind flag)
- Smoke: /health, minimal /invoke
- Load: latency and error baselines per provider

## 12) Branches (tracking)
- feature/scene-endpoint — /scene executor, schema, tests
- feature/deepai-adapter — DeepAI chat adapter; image gated
- web-code_govcloud-oidc — OIDC middleware and infra wiring
- cybersecuredai-rebrand-to-orca — /orca route + reference-html import

## 13) Links
- README.md for quickstart
- requests/: Postman/Insomnia collections
```diff
+ SPEC updated to v0.2 with scene endpoint, DeepAI provider, OIDC, and ORCA web rebrand.
```

## Addendum A) Retry & Error Model
- Error shape: `{ provider, code, message, retryable }`
- Timeout handling: per-request `timeoutMs` or default `DEFAULT_PROVIDER_TIMEOUT_MS`
- Retry policy: single retry with exponential backoff + jitter for retryable errors (HTTP 5xx, 429, ETIMEDOUT)
- Fallback policy: on retryable failure of a provider, attempt next provider in `AI_PROVIDER_ORDER`

## Addendum B) Metrics (names/labels)
- ai_requests_total{endpoint,provider,model,status}
- ai_errors_total{endpoint,provider,model,error_type}
- ai_latency_seconds{endpoint,provider,model}
Buckets: 0.01, 0.05, 0.1, 0.25, 0.5, 1, 2, 5 (seconds)

## Addendum C) Auth/Scopes Overview
- Scopes gate tasks/providers (deny-by-default):
  - scope:invoke.chat → /api/ai/invoke tasks: chat_general, chat_cost_sensitive
  - scope:invoke.code → /api/ai/invoke tasks: code
  - scope:image.generate → /api/ai/image
  - scope:scene.execute → /api/ai/scene (when FEATURE_SCENE_ENDPOINT=1)
- OIDC JWT enforcement: validate iss/aud/client; map claims→scopes

## Addendum D) Scene Example
Three-node DAG (chat → image; tool runs in parallel):
```json
{
  "nodes": [
    { "id": "n1", "type": "chat", "provider": "deepseek", "input": "Write a caption for a cyber defense poster" },
    { "id": "n2", "type": "image", "provider": "vertex", "params": { "size": "1024x1024" }, "dependsOn": ["n1"] },
    { "id": "n3", "type": "tool", "params": { "name": "extract-keywords" } }
  ]
}
```

## Open Issues & Next Steps
- Structured logging context (requestId propagation) — implemented with pino-http
- Verify Dockerfile/docker-compose build/run paths
- Fill README/spec link references with live collections
- Add integration tests per provider and baseline load test
- Add OpenTelemetry spans around adapter calls