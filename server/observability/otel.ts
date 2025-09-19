import { NodeSDK } from '@opentelemetry/sdk-node';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

let sdk: NodeSDK | null = null;

export async function setupOtel() {
  if (sdk) return sdk;
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
  sdk = new NodeSDK({});
  await sdk.start();
  return sdk;
}

export async function shutdownOtel() {
  if (!sdk) return;
  await sdk.shutdown();
}
