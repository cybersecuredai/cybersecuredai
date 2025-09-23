// app/providers/deepai.ts
import { z } from "zod";
import { ProviderRequest, ProviderResponse } from "../types";
import { withTimeout } from "../utils/timeout";
import { logEvent } from "../utils/logging";

const DeepAIConfig = z.object({
	apiKey: z.string(),
	baseUrl: z.string().default("https://api.deepai.org"),
	chatModel: z.string().default("text-gen"), // adjust if specific chat model id differs
	timeoutMs: z.number().default(30000),
});
export type DeepAIConfig = z.infer<typeof DeepAIConfig>;

function authHeaders(apiKey: string) {
	return {
		"Content-Type": "application/json",
		"Api-Key": apiKey,
	};
}

// Normalizes DeepAI text response to ProviderResponse
function normalizeText(data: any, model: string, startedAt: number): ProviderResponse {
	const text = data?.output?.text ?? data?.choices?.[0]?.text ?? data?.output ?? "";
	const usage = {
		promptTokens: data?.usage?.prompt_tokens ?? null,
		completionTokens: data?.usage?.completion_tokens ?? null,
		totalTokens: data?.usage?.total_tokens ?? null,
		estimatedCostUsd: null,
	};
	return {
		ok: true,
		provider: "deepai",
		model,
		outputText: text,
		raw: data,
		usage,
		latencyMs: Date.now() - startedAt,
	};
}

export async function callDeepAI(
	req: ProviderRequest,
	cfgRaw: Partial<DeepAIConfig>
): Promise<ProviderResponse> {
	const cfg = DeepAIConfig.parse(cfgRaw);
	const startedAt = Date.now();

	try {
		const url = `${cfg.baseUrl}/v1/text`; // update if DeepAI chat endpoint differs
		const body: Record<string, any> = {
			model: cfg.chatModel,
			input: req.prompt,
			temperature: req.params?.temperature ?? 0.7,
			max_tokens: req.params?.maxTokens ?? 1024,
		};

		const exec = async () => {
			const resp = await fetch(url, {
				method: "POST",
				headers: authHeaders(cfg.apiKey),
				body: JSON.stringify(body),
			});
			if (!resp.ok) {
				const errText = await resp.text().catch(() => "");
				throw new Error(`DeepAI ${resp.status}: ${errText || resp.statusText}`);
			}
			return resp.json();
		};

		const data = await withTimeout(exec(), cfg.timeoutMs, "deepai-timeout");
		const result = normalizeText(data, cfg.chatModel, startedAt);
		logEvent("provider.deepai.success", { latencyMs: result.latencyMs });
		return result;
	} catch (err: any) {
		logEvent("provider.deepai.error", { message: err?.message });
		return {
			ok: false,
			provider: "deepai",
			model: cfgRaw.chatModel ?? "text-gen",
			error: { code: "PROVIDER_ERROR", message: err?.message || "Unknown DeepAI error" },
			latencyMs: Date.now() - startedAt,
		};
	}
}

// Optional: image and voice stubs to flesh out in Phase 2
export async function callDeepAIImage(
	input: { prompt: string; size?: string; n?: number },
	cfgRaw: Partial<DeepAIConfig>
): Promise<ProviderResponse> {
	const cfg = DeepAIConfig.parse(cfgRaw);
	const startedAt = Date.now();
	try {
		const url = `${cfg.baseUrl}/v1/images`;
		const resp = await withTimeout(
			fetch(url, {
				method: "POST",
				headers: authHeaders(cfg.apiKey),
				body: JSON.stringify({ prompt: input.prompt, size: input.size ?? "1024x1024", n: input.n ?? 1 }),
			}),
			cfg.timeoutMs,
			"deepai-timeout"
		);
		if (!resp.ok) throw new Error(`DeepAI image ${resp.status}`);
		const data: any = await resp.json();
		return {
			ok: true,
			provider: "deepai",
			model: "image-gen",
			outputText: "",
			raw: data,
			assets: data?.data ?? data?.output ?? [], // align with your router's asset field
			usage: { promptTokens: null, completionTokens: null, totalTokens: null, estimatedCostUsd: null },
			latencyMs: Date.now() - startedAt,
		};
	} catch (e: any) {
		return { ok: false, provider: "deepai", model: "image-gen", error: { code: "PROVIDER_ERROR", message: e?.message }, latencyMs: Date.now() - startedAt };
	}
}// app/router.ts (excerpt)
import { callDeepAI, callDeepAIImage } from "./providers/deepai";

async function dispatch(req: ProviderRequest) {
	switch (req.provider) {
		case "deepai": {
			if (req.task === "chat") {
				return callDeepAI(req, { apiKey: process.env.DEEPAI_API_KEY! });
			}
			if (req.task === "image") {
				// behind feature flag
				if (!process.env.FEATURE_DEEPAI_IMAGE) {
					return { ok: false, provider: "deepai", model: "image-gen", error: { code: "FEATURE_DISABLED", message: "DeepAI image disabled" } };
				}
				return callDeepAIImage({ prompt: req.prompt, size: req.params?.size, n: req.params?.n }, { apiKey: process.env.DEEPAI_API_KEY! });
			}
			break;
		}
		// ... other providers
	}
	return { ok: false, provider: req.provider, model: "", error: { code: "UNSUPPORTED", message: "Unsupported task" } };
}// app/utils/timeout.ts
export async function withTimeout<T>(p: Promise<T>, ms: number, tag = "timeout"): Promise<T> {
	let t: NodeJS.Timeout;
	const timeout = new Promise<never>((_, rej) => {
		t = setTimeout(() => rej(new Error(`${tag}:${ms}ms`)), ms);
	});
	try { return await Promise.race([p, timeout]); } finally { clearTimeout(t!); }
}// .env (add)
// DEEPAI_API_KEY=***
// FEATURE_DEEPAI_IMAGE=1
}// app/providers/deepai.ts (clean v1)
import { z } from "zod";
import type { ProviderRequest, ProviderResponse } from "../types";
import { withTimeout } from "../utils/timeout";
import { logEvent } from "../utils/logging";

const DeepAIConfig = z.object({
  apiKey: z.string(),
  baseUrl: z.string().default("https://api.deepai.org"),
  chatModel: z.string().default("text-gen"),
  timeoutMs: z.number().default(30_000),
});
export type DeepAIConfig = z.infer<typeof DeepAIConfig>;

const headers = (k: string) => ({ "Content-Type": "application/json", "Api-Key": k });

const normText = (data: any, model: string, started: number): ProviderResponse => ({
  ok: true,
  provider: "deepai",
  model,
  outputText: data?.output?.text ?? data?.choices?.[0]?.text ?? data?.output ?? "",
  raw: data,
  usage: {
    promptTokens: data?.usage?.prompt_tokens ?? null,
    completionTokens: data?.usage?.completion_tokens ?? null,
    totalTokens: data?.usage?.total_tokens ?? null,
    estimatedCostUsd: null,
  },
  latencyMs: Date.now() - started,
});

export async function callDeepAI(req: ProviderRequest, cfgRaw: Partial<DeepAIConfig>): Promise<ProviderResponse> {
  const cfg = DeepAIConfig.parse(cfgRaw);
  const started = Date.now();
  try {
    const url = `${cfg.baseUrl}/v1/text`;
    const body = {
      model: cfg.chatModel,
      input: req.prompt,
      temperature: req.params?.temperature ?? 0.7,
      max_tokens: req.params?.maxTokens ?? 1024,
    };
    const run = async () => {
      const r = await fetch(url, { method: "POST", headers: headers(cfg.apiKey), body: JSON.stringify(body) });
      if (!r.ok) throw new Error(`DeepAI ${r.status}: ${await r.text().catch(() => r.statusText)}`);
      return r.json();
    };
    const data = await withTimeout(run(), cfg.timeoutMs, "deepai-timeout");
    const res = normText(data, cfg.chatModel, started);
    logEvent("provider.deepai.success", { latencyMs: res.latencyMs });
    return res;
  } catch (e: any) {
    logEvent("provider.deepai.error", { message: e?.message });
    return { ok: false, provider: "deepai", model: cfgRaw.chatModel ?? "text-gen", error: { code: "PROVIDER_ERROR", message: e?.message || "Unknown DeepAI error" }, latencyMs: Date.now() - started };
  }
}

// Phase 2 stubs
export async function callDeepAIImage(input: { prompt: string; size?: string; n?: number }, cfgRaw: Partial<DeepAIConfig>): Promise<ProviderResponse> {
  const cfg = DeepAIConfig.parse(cfgRaw); const started = Date.now();
  try {
    const r = await withTimeout(fetch(`${cfg.baseUrl}/v1/images`, { method: "POST", headers: headers(cfg.apiKey), body: JSON.stringify({ prompt: input.prompt, size: input.size ?? "1024x1024", n: input.n ?? 1 }) }), cfg.timeoutMs, "deepai-timeout");
    if (!r.ok) throw new Error(`DeepAI image ${r.status}`);
    const data = await r.json();
    return { ok: true, provider: "deepai", model: "image-gen", outputText: "", raw: data, assets: data?.data ?? data?.output ?? [], usage: { promptTokens: null, completionTokens: null, totalTokens: null, estimatedCostUsd: null }, latencyMs: Date.now() - started };
  } catch (e: any) {
    return { ok: false, provider: "deepai", model: "image-gen", error: { code: "PROVIDER_ERROR", message: e?.message }, latencyMs: Date.now() - started };
  }
}// app/router.ts (dispatch excerpt)
import { callDeepAI, callDeepAIImage } from "./providers/deepai";

export async function dispatch(req: ProviderRequest) {
  if (req.provider === "deepai") {
    if (req.task === "chat") return callDeepAI(req, { apiKey: process.env.DEEPAI_API_KEY! });
    if (req.task === "image") {
      if (!process.env.FEATURE_DEEPAI_IMAGE) return { ok: false, provider: "deepai", model: "image-gen", error: { code: "FEATURE_DISABLED", message: "DeepAI image disabled" } };
      return callDeepAIImage({ prompt: req.prompt, size: req.params?.size, n: req.params?.n }, { apiKey: process.env.DEEPAI_API_KEY! });
    }
  }
  // ...existing routing
}# .env additions
DEEPAI_API_KEY=your_key_here
FEATURE_DEEPAI_IMAGE=1