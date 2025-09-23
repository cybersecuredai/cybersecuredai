import type { ProviderRequest, ProviderResponse } from "../types";

export async function call4Diff(
  req: ProviderRequest,
  cfg: { baseUrl?: string; timeoutMs?: number } = {}
): Promise<ProviderResponse> {
  const base = cfg.baseUrl ?? process.env.FOURDIFF_BASE_URL ?? "http://localhost:8083";
  const started = Date.now();
  try {
    const r = await fetch(`${base}/run`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: req.prompt, params: req.params ?? {} }),
      signal: AbortSignal.timeout(cfg.timeoutMs ?? 120_000),
    });
    if (!r.ok) return {
      ok: false, provider: "4diff", model: "sidecar",
      error: { code: "SIDE_CAR", message: await r.text().catch(()=>"") },
      latencyMs: Date.now() - started
    };
    const data = await r.json();
    return {
      ok: true, provider: "4diff", model: "sidecar",
      outputText: data.text ?? data.output ?? "",
      assets: data.assets ?? [],
      raw: data,
      usage: { promptTokens: null, completionTokens: null, totalTokens: null, estimatedCostUsd: 0 },
      latencyMs: Date.now() - started
    };
  } catch (e: any) {
    return {
      ok: false, provider: "4diff", model: "sidecar",
      error: { code: "NETWORK", message: e?.message || "4diff sidecar error" },
      latencyMs: Date.now() - started
    };
  }
}
