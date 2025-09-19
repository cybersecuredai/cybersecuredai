import client from 'prom-client';

const register = client.register;

export const requestsTotal = new client.Counter({
  name: 'ai_requests_total',
  help: 'Total AI adapter requests',
  labelNames: ['endpoint','provider','model','status']
});

export const errorsTotal = new client.Counter({
  name: 'ai_errors_total',
  help: 'Total AI adapter errors',
  labelNames: ['endpoint','provider','model','error_type']
});

export const latencyHistogram = new client.Histogram({
  name: 'ai_latency_seconds',
  help: 'AI adapter latency in seconds',
  labelNames: ['endpoint','provider','model'],
  buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2, 5]
});

export function metricsEndpoint() {
  return async (_req: any, res: any) => {
    res.setHeader('Content-Type', register.contentType);
    res.end(await register.metrics());
  };
}
