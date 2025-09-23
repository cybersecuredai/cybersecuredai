import { randomUUID } from "crypto";
import { callCAT4D } from "../providers/cat4d";
import { call4Diff } from "../providers/4diff";

export async function stableVirtualCamera(body: any) {
  const id = randomUUID();
  const assets = process.env.ASSETS_BASE_URL || "https://assets.example.com";
  const videoUrl = `${assets}/${id}.mp4`;
  const depthUrls: string[] = [];
  let pointCloudUrl: string | undefined;
  if (depthUrls.length) {
    pointCloudUrl = `${assets}/${id}.ply`;
  }
  return {
    id,
    provider: "seva",
    mode: body.mode,
    videoUrl,
    depthUrls,
    pointCloudUrl,
    viewerUrl: pointCloudUrl ? `/viewer/scene?pc=${encodeURIComponent(pointCloudUrl)}` : undefined,
    metadata: { camera: body.cameraPath?.kind ?? "orbit" }
  };
}

export async function hunyuanVoyager(body: any) {
  const id = randomUUID();
  const assets = process.env.ASSETS_BASE_URL || "https://assets.example.com";
  const videoUrl = `${assets}/${id}.mp4`;
  const depthUrls: string[] = [ `${assets}/${id}/depth-0001.png` ];
  let pointCloudUrl: string | undefined;
  if (depthUrls.length) {
    pointCloudUrl = `${assets}/${id}.ply`;
  }
  return {
    id,
    provider: "hunyuan",
    mode: body.mode,
    videoUrl,
    depthUrls,
    pointCloudUrl,
    viewerUrl: pointCloudUrl ? `/viewer/scene?pc=${encodeURIComponent(pointCloudUrl)}` : undefined,
    metadata: {}
  };
}

export async function cat4dProvider(body: any) {
  // Compose ProviderRequest
  const req = {
    prompt: body.prompt || body.spec || "",
    params: body.params || {}
  };
  const result = await callCAT4D(req);
  return {
    id: randomUUID(),
    provider: "cat4d",
    mode: body.mode,
    outputText: result.outputText,
    assets: result.assets,
    raw: result.raw,
    usage: result.usage,
    latencyMs: result.latencyMs,
    error: result.error,
    metadata: { from: "sidecar" }
  };
}

export async function fourDiffProvider(body: any) {
  // Compose ProviderRequest
  const req = {
    prompt: body.prompt || body.spec || "",
    params: body.params || {}
  };
  const result = await call4Diff(req);
  return {
    id: randomUUID(),
    provider: "4diff",
    mode: body.mode,
    outputText: result.outputText,
    assets: result.assets,
    raw: result.raw,
    usage: result.usage,
    latencyMs: result.latencyMs,
    error: result.error,
    metadata: { from: "sidecar" }
  };
}
