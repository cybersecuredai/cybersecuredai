import { z } from "zod";

export const SceneReq = z.object({
  spec: z.union([z.string(), z.record(z.string(), z.unknown())]).optional(),
  mode: z.enum(["nvs","i2v3d","v2-4d"]).default("nvs"),
  inputs: z.object({
    imageUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional()
  }).optional(),
  cameraPath: z.object({
    kind: z.enum(["orbit","dolly","spiral","custom"]).default("orbit"),
    durationSec: z.number().int().min(1).max(60).default(8),
    params: z.record(z.string(), z.unknown()).optional()
  }).optional(),
  provider: z.enum(["seva","hunyuan","cat4d","4diff"]).default("seva"),
  params: z.record(z.string(), z.unknown()).optional()
});
