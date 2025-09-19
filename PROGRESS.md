# Project Progress Snapshot

_Last updated: 2025-09-19_

## TODO List (with status)

- [x] Gemini & DeepSeek adapters
- [x] GPT-5 & Claude adapters
- [x] .env example & secret loading
- [x] InvokeSchema (zod) & types
- [x] /invoke & /image handlers
- [x] Routing Matrix v0.1
- [x] Scaffold Fastify server & base endpoints
- [x] Devcontainer & Codespaces bootstrap
- [x] Image providers wired
- [-] Unit tests: routing decisions & schema (in progress)
- [-] Provider timeouts & typed errors (P0, in progress)
- [-] Return structured error shape from endpoints (P0, in progress)
- [-] Smoke tests: /health and minimal /invoke (P0, in progress)
- [ ] Structured logging context (P1)
- [ ] Dockerfile & docker-compose verification (P1)
- [ ] Finalize Purpose & Scope (P1)
- [ ] Single retry to alternate provider (P1)
- [ ] Metrics & latency histograms (P2)
- [ ] Baseline load test (P2)
- [ ] Select cloud deployment target (P2)
- [ ] CORS allowlist & rate limiting (P2)
- [ ] Document integration & feature branches (P2)
- [ ] Fill GitHub URL & collection links in SPEC (P2)
- [ ] Integration tests per provider (P2)
- [ ] OpenTelemetry hook points (P2)
- [ ] Track open spec issues (P2)
- [ ] Sync Replit code into this repo
- [ ] Verify devcontainer by running locally

## Current Branch
- `feature/adapters-stubs`

## Last Actions
- P0 items (timeouts, structured errors) implemented and tested
- Unit and smoke tests pass
- CI workflow runs smoke and unit tests
- Endpoint error shape is now structured and tested

## How to Save Progress
Run:
```bash
./scripts/save_progress.sh
```
This will commit and push the current state and progress doc to your branch.# Progress Snapshot — Multi-Model Router

Last updated: 2025-09-19T17:20:00Z
Branch: feature/adapters-stubs

This file is an auto-maintained snapshot of the project's current to-do list and recent progress. Keep this file committed so it can be referenced if your Codespace disconnects.

## High-level status
- Development server: runs locally on port 5000 in dev mode (uses `ENABLE_MOCK_ADAPTER=true` for smoke tests).
- Smoke tests: present and passing (`scripts/smoke-runner.js`, `npm run test:smoke`).
- Unit tests: added and passing via `vitest` (tests in `tests/`).
- P0 work (timeouts + structured errors): implemented and covered by unit tests.

## To-Do List (snapshot)
- [x] Gemini & DeepSeek adapters — implemented
- [x] GPT-5 & Claude adapters — implemented
- [x] .env example & secret loading — implemented
- [x] InvokeSchema (zod) & types — implemented
- [x] /invoke & /image handlers — implemented
- [x] Routing Matrix v0.1 — implemented
- [x] Scaffold Fastify server & base endpoints — implemented
- [x] Devcontainer & Codespaces bootstrap — implemented
- [x] Image providers wired — implemented
- [~] Unit tests: routing decisions & schema — in-progress (tests added under `tests/`)
- [~] Provider timeouts & typed errors (P0) — in-progress (implemented)
- [~] Return structured error shape from endpoints (P0) — in-progress (implemented)
- [~] Smoke tests: /health and minimal /invoke (P0) — in-progress (implemented)
- [ ] Structured logging context (P1)
- [ ] Dockerfile & docker-compose verification (P1)
- [ ] Finalize Purpose & Scope (P1)
- [ ] Single retry to alternate provider (P1)
- [ ] Metrics & latency histograms (P2)
- [ ] Baseline load test (P2)
- [ ] Select cloud deployment target (P2)
- [ ] CORS allowlist & rate limiting (P2)
- [ ] Document integration & feature branches (P2)
- [ ] Fill GitHub URL & collection links in SPEC (P2)
- [ ] Integration tests per provider (P2)
- [ ] OpenTelemetry hook points (P2)
- [ ] Track open spec issues (P2)
- [ ] Sync Replit code into this repo
- [ ] Verify devcontainer by running locally

## Recent actions (local)
- Added `mock-adapter` to support dev/CI smoke tests.
- Added typed errors and timeout wrapper: `server/adapters/errors.ts`, `server/utils/timeout.ts`.
- Integrated timeouts into manager (`server/adapters/manager.ts`) and returned structured error metadata.
- Updated endpoints to return structured error payloads (`server/routes.ts`).
- Added unit and HTTP smoke tests and a CI workflow: `.github/workflows/ci.yml`.

## How to update/save this snapshot locally and push
Run these commands from the repository root to stage, commit and push the snapshot (replace branch name if needed):

```bash
# stage the snapshot and helper
git add PROGRESS.md scripts/save_progress.sh || true

# commit with a clear message
git commit -m "chore: save progress snapshot (PROGRESS.md)" || echo "Nothing to commit"

# push to current branch
git push origin $(git rev-parse --abbrev-ref HEAD)
```

If you prefer a one-shot helper, run:

```bash
./scripts/save_progress.sh
```

(The helper commits `PROGRESS.md` and pushes to the current branch.)

## Where to look next
- `tests/` — unit & timeout tests
- `scripts/smoke-runner.js` and `scripts/smoke.sh` — smoke test runners
- `server/adapters/mock-adapter.ts` — local mock provider used in dev and CI
- `server/adapters/manager.ts` — provider selection, timeouts, and error shaping
- `server/routes.ts` — API endpoints and structured error responses

