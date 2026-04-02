export async function register() {
  // Node-only APIs (process.on) are not available in Edge Runtime.
  // Use onRequestError below for request-scoped errors; for uncaughtException
  // use a process manager (e.g. PM2) or custom server in Node.
}

function sanitizePath(value: string): string {
  // Strip control characters to avoid log injection/noise from malicious scanners.
  return value.replace(/[\x00-\x1F\x7F]/g, "").slice(0, 256);
}

function isServerActionProbe(message: string, path: string): boolean {
  return (
    message.includes("Failed to find Server Action") ||
    message.includes("Server Action") ||
    path.includes("/_next/server-actions")
  );
}

export async function onRequestError(
  err: unknown,
  request: { path: string; method: string },
  context: { routerKind: string; routePath: string; renderSource: string }
) {
  const message = err instanceof Error ? err.message : String(err);
  const safePath = sanitizePath(request.path || "");

  // Stale Server Action IDs and scanner traffic should not flood error logs.
  if (isServerActionProbe(message, safePath)) {
    console.warn("[onRequestError] Blocked/invalid Server Action probe:", safePath);
    return;
  }

  console.error("[onRequestError]", err, safePath, context.routePath);
  // e.g. send to Sentry or your logging service
}
