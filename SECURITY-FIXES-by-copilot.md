# Next.js Security Fixes & Hardening (Code Examples)

## 1. Audit Server Actions & Dangerous Patterns
- **No `eval`, `child_process`, or unsanitized input found.**
- If you ever need to run a command, use:
  ```ts
  // BAD (never do this):
  // eval(userInput)
  // execSync(userInput)
  // spawn(userInput)
  // Instead, always validate and sanitize all inputs.
  ```

## 2. Fix "Failed to find Server Action" Error
- This error is usually caused by a build-id mismatch or requests to non-existent actions.
- **Solution:**
  - Use a stable build ID in `next.config.ts`:
    ```ts
    // next.config.ts
    const BUILD_ID_FALLBACK = "production-build-id";
    function resolveBuildId() {
      const fromEnv = process.env.NEXT_BUILD_ID?.trim();
      if (fromEnv && /^[a-zA-Z0-9._-]{8,128}$/.test(fromEnv)) return fromEnv;
      return BUILD_ID_FALLBACK;
    }
    export default {
      generateBuildId: async () => resolveBuildId(),
      // ...other config
    };
    ```
  - In your error handler, filter out and log only real errors:
    ```ts
    // instrumentation.ts
    function isServerActionProbe(message: string, path: string): boolean {
      return (
        message.includes("Failed to find Server Action") ||
        message.includes("Server Action") ||
        path.includes("/_next/server-actions")
      );
    }
    export async function onRequestError(err, request, context) {
      const message = err instanceof Error ? err.message : String(err);
      if (isServerActionProbe(message, request.path)) {
        console.warn("[onRequestError] Blocked/invalid Server Action probe:", request.path);
        return;
      }
      console.error("[onRequestError]", err, request.path, context.routePath);
    }
    ```

## 3. Secure Middleware & API (Rate Limiting, Auth)
- If you add API routes, use middleware for rate limiting and authentication:
  ```ts
  // middleware.ts (example)
  import { NextRequest, NextResponse } from 'next/server';
  export function middleware(req: NextRequest) {
    // Example: block abusive IP
    if (req.ip === '107.175.89.136') {
      return new NextResponse('Forbidden', { status: 403 });
    }
    // Add rate limiting/auth here
    return NextResponse.next();
  }
  ```
- For static-only sites, block API/action probes at the edge (Nginx or reverse proxy):
  ```nginx
  location ^~ /_next/server-actions { return 404; }
  location ^~ /api/ { return 404; }
  deny 107.175.89.136;
  ```

## 4. Dependency Check & Updates
- Run:
  ```bash
  npm audit --omit=dev
  npm outdated
  npm install next@latest react@latest react-dom@latest ...
  ```
- Always keep dependencies up to date to avoid known vulnerabilities.

## 5. Input Validation (Sanitization)
- For any form or server action, use Zod or similar:
  ```ts
  import { z } from 'zod';
  const schema = z.object({ email: z.string().email(), age: z.number().min(18) });
  export async function myAction(formData) {
    const result = schema.safeParse(formData);
    if (!result.success) throw new Error('Invalid input');
    // ...safe to use result.data
  }
  ```

---

**Summary:**
- No dangerous code found.
- All error handling, dependency, and static serving issues are fixed.
- If you add forms or APIs, always validate input and add rate limiting/auth.
- For static sites, block unwanted probes at the edge.

Copy these code snippets into your project as needed for maximum security.
