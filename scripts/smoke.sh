#!/usr/bin/env bash
set -euo pipefail
BASE=${BASE_URL:-http://localhost:5000}

echo "Checking health at $BASE/api/health"
resp=$(curl -4 -sS -m 5 -w "\n%{http_code}" "$BASE/api/health")
body=$(echo "$resp" | sed '$d')
code=$(echo "$resp" | tail -n1)

if [ "$code" != "200" ]; then
  echo "Health check failed: status=$code"
  echo "$body"
  exit 1
fi

echo "Health check OK"

# Minimal invoke using a mock provider (adapter manager will try configured adapters). We send a minimal valid payload.
echo "Testing /api/ai/invoke"
invoke_resp=$(curl -4 -sS -m 5 -w "\n%{http_code}" -X POST "$BASE/api/ai/invoke" -H 'Content-Type: application/json' -d '{"task":"chat","input":"hello","model":"test-model"}')
invoke_body=$(echo "$invoke_resp" | sed '$d')
invoke_code=$(echo "$invoke_resp" | tail -n1)

if [ "$invoke_code" = "200" ]; then
  echo "/api/ai/invoke OK"
  echo "$invoke_body" | jq '.' || true
else
  echo "/api/ai/invoke returned status=$invoke_code"
  echo "$invoke_body"
  exit 1
fi

echo "Smoke tests passed"
