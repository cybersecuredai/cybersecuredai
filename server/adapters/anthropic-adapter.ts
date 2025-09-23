// adapters/anthropic.ts
import { z } from "zod";
import { Anthropic } from "@anthropic-ai/sdk";

export const AnthropicImageInput = z.object({
  prompt: z.string(),
  size: z.string().optional(),      // keep same shape as other providers
  format: z.enum(["url","b64"]).optional(),
  // ...any shared image params
});

export type TAnthropicImageInput = z.infer<typeof AnthropicImageInput>;

type ImageResult =
  | { provider: "anthropic"; supported: false; message: string; fallbackUsed?: boolean }
  | { provider: "anthropic"; supported: true; url?: string; b64?: string };

export class AnthropicAdapter {
  public readonly name = "anthropic";
  public readonly supportsText = true;
  public readonly supportsImage = true; // advertise capability for routing, stub inside
  private client: Anthropic;
  private fallback?: { image: (input: any) => Promise<any> };

  constructor(opts: { apiKey: string; fallbackImageAdapter?: { image: (input: any) => Promise<any> } }) {
    this.client = new Anthropic({ apiKey: opts.apiKey });
    this.fallback = opts.fallbackImageAdapter;
  }

  async invoke(input: { messages: Array<{ role: "user"|"assistant"|"system"; content: string }> }) {
    // existing text impl (stub)
    return {
      id: "anthropic-stub-text",
      provider: this.name,
      model: "claude-sim-1",
      usage: { tokens: 1 },
      output: "Simulated Anthropic text response.",
      raw: { simulated: true },
      meta: { latencyMs: 1, status: "ok" }
    };
  }

  async image(input: TAnthropicImageInput): Promise<ImageResult> {
    if (this.fallback) {
      await this.fallback.image(input); // ignore return, let router handle unified result shape
      return { provider: "anthropic", supported: false, message: "Routed to fallback image provider", fallbackUsed: true };
    }
    // Return a structured, typed “not supported” signal the router can interpret
    return {
      provider: "anthropic",
      supported: false,
      message: "Anthropic does not support image generation. Provide a fallbackImageAdapter to route."
    };
  }
}

// Registration logic for compatibility with existing manager
if (process.env.ANTHROPIC_API_KEY || process.env.FEATURE_ANTHROPIC === 'true') {
  try {
    const { registerAdapter } = require('./manager');
    registerAdapter(new AnthropicAdapter({ apiKey: process.env.ANTHROPIC_API_KEY || 'sk-anthropic-stub' }));
  } catch (err) {
    // ignore during static analysis
  }
}
