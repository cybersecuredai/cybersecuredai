import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

function getAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {};
  
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('auth_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  
  return headers;
}

export async function apiRequest(
  url: string,
  methodOrOptions?: string | { method: string; body?: unknown },
  data?: unknown,
): Promise<any> {
  // Normalize arguments: support apiRequest(url), apiRequest(url, 'POST', data), and apiRequest(url, { method, body })
  let method = 'GET';
  let body: unknown | undefined = undefined;

  if (typeof methodOrOptions === 'string') {
    method = methodOrOptions;
    body = data;
  } else if (methodOrOptions && typeof methodOrOptions === 'object') {
    method = methodOrOptions.method;
    body = methodOrOptions.body;
  }

  const headers: Record<string, string> = {
    ...getAuthHeaders(),
    ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
  };

  const res = await fetch(url, {
    method,
    headers,
    body: body !== undefined ? (typeof body === 'string' ? body : JSON.stringify(body)) : undefined,
    credentials: 'include',
  });

  await throwIfResNotOk(res);

  // Try to parse JSON responses; fall back to empty object if not JSON
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    try {
      return await res.json();
    } catch {
      return {};
    }
  }
  try {
    const text = await res.text();
    // Return text for non-JSON when present; otherwise empty object
    return text || {};
  } catch {
    return {};
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const headers = getAuthHeaders();
    
    const res = await fetch(queryKey.join("/") as string, {
      headers,
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
