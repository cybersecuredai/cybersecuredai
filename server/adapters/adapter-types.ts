export type InvokeRequest = {
  task: 'text' | 'chat' | 'code';
  input: string;
  model?: string;
  timeoutMs?: number;
  providerOverride?: string;
};

export type InvokeResponse = {
  id: string;
  provider: string;
  model: string;
  usage?: { tokens?: number; promptTokens?: number; completionTokens?: number; costUsd?: number };
  output: string | Record<string, any>;
  raw?: any;
  meta: { latencyMs: number; status: 'ok' | 'error'; error?: string };
};

export type ImageRequest = {
  prompt: string;
  model?: string;
  size?: string;
  providerOverride?: string;
};

export type ImageResponse = {
  id: string;
  provider: string;
  model: string;
  url?: string | null;
  b64?: string | null;
  metadata?: { width?: number; height?: number; format?: string; sizeBytes?: number };
  raw?: any;
  meta: { latencyMs: number; status: 'ok' | 'error'; error?: string };
};

export interface AIAdapter {
  name: string;
  supportsInvoke?: boolean;
  supportsImage?: boolean;
  invoke?: (req: InvokeRequest) => Promise<InvokeResponse>;
  image?: (req: ImageRequest) => Promise<ImageResponse>;
}
