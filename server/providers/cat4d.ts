import type { ProviderRequest, ProviderResponse } from "../types";

export async function callCAT4D(
  req: ProviderRequest,
  cfg: { baseUrl?: string; timeoutMs?: number } = {}
): Promise<ProviderResponse> {
  const base = cfg.baseUrl ?? process.env.CAT4D_BASE_URL ?? "http://localhost:8082";
  const started = Date.now();
  try {
    const r = await fetch(`${base}/run`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: req.prompt, params: req.params ?? {} }),
      signal: AbortSignal.timeout(cfg.timeoutMs ?? 60_000),
    });
    if (!r.ok) return {
      ok: false, provider: "cat4d", model: "sidecar",
      error: { code: "SIDE_CAR", message: await r.text().catch(()=>"") },
      latencyMs: Date.now() - started
    };
    const data = await r.json();
    return {
      ok: true, provider: "cat4d", model: "sidecar",
      outputText: data.text ?? data.output ?? "",
      assets: data.assets ?? [],
      raw: data,
      usage: { promptTokens: null, completionTokens: null, totalTokens: null, estimatedCostUsd: 0 },
      latencyMs: Date.now() - started
    };
  } catch (e: any) {
    return {
      ok: false, provider: "cat4d", model: "sidecar",
      error: { code: "NETWORK", message: e?.message || "cat4d sidecar error" },
      latencyMs: Date.now() - started
    };
  }
}
