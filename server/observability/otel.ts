import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

let sdk: any | null = null;

export async function setupOtel() {
  if (sdk) return sdk;
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
  // dynamic import to support multiple sdk-node versions
  const pkg = await import('@opentelemetry/sdk-node');
  const NodeSDK = pkg.NodeSDK || pkg.default || pkg.nodeSDK;
  if (!NodeSDK) {
    console.warn('No NodeSDK export found in @opentelemetry/sdk-node; skipping OTEL init');
    return null;
  }
  sdk = new NodeSDK({});
  if (sdk.start) await sdk.start();
  return sdk;
}

export async function shutdownOtel() {
  if (!sdk) return;
  if (sdk.shutdown) await sdk.shutdown();
}
