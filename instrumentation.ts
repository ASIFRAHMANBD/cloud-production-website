export async function register() {
  // Node-only APIs (process.on) are not available in Edge Runtime.
  // Use onRequestError below for request-scoped errors; for uncaughtException
  // use a process manager (e.g. PM2) or custom server in Node.
}

export async function onRequestError(
  err: unknown,
  request: { path: string; method: string },
  context: { routerKind: string; routePath: string; renderSource: string }
) {
  const message = err instanceof Error ? err.message : String(err);
  // Stale Server Action ID (old/new deployment or multi-instance without shared key) – log once, avoid spam
  if (message.includes('Failed to find Server Action')) {
    console.warn('[onRequestError] Stale Server Action request (deployment skew):', request.path);
    return;
  }
  console.error('[onRequestError]', err, request.path, context.routePath);
  // e.g. send to Sentry or your logging service
}
