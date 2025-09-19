export class AdapterError extends Error {
  code: string;
  provider?: string;
  details?: any;

  constructor(code: string, message: string, provider?: string, details?: any) {
    super(message);
    this.name = 'AdapterError';
    this.code = code;
    this.provider = provider;
    this.details = details;
  }
}

export class TimeoutError extends AdapterError {
  constructor(provider?: string, details?: any) {
    super('timeout', `Provider timeout${provider ? `: ${provider}` : ''}`, provider, details);
    this.name = 'TimeoutError';
  }
}

export class ProviderError extends AdapterError {
  constructor(provider: string, message?: string, details?: any) {
    super('provider_error', message || `Provider error: ${provider}`, provider, details);
    this.name = 'ProviderError';
  }
}

export default AdapterError;
