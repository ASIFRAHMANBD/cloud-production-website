# cloud-production-website

Cloud Production LTD – company website (Next.js).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & run production

```bash
npm run build
npm run start
```

## Security Hardening (2026)

- All server-action and API probes are now blocked at the edge (nginx) and do not reach the app.
- Known abusive IPs are denied at the edge.
- Only GET/HEAD methods are allowed; others return 405.
- Security headers (CSP, X-Frame-Options, etc.) are enforced for all responses.
- Inline scripts are removed from React pages to reduce XSS risk.
- All runtime dependencies are kept up to date and audited with `npm audit --omit=dev`.
- Stale or malicious Server Action requests are logged as warnings, not errors, and do not spam logs.

### Upgrading dependencies

To update all runtime dependencies to the latest secure versions:

```bash
npm install next@latest react@latest react-dom@latest @fortawesome/fontawesome-free@latest @fortawesome/fontawesome-svg-core@latest @fortawesome/free-solid-svg-icons@latest @fortawesome/react-fontawesome@latest
npm audit --omit=dev
```

If any vulnerabilities remain, check advisories and update as needed.

## Docker

```bash
docker build -t cpl-website .
docker run -p 3000:3000 cpl-website
```

**Build for amd64 and push:**

```bash
docker buildx build --platform linux/amd64 -t asif449/cloud-production-website:01 --push .
```

**On the server:**

```bash
docker pull asif449/cloud-production-website:01
docker run -d --name cloudproduction-app -p 3000:3000 --restart unless-stopped asif449/cloud-production-website:01
```


docker stop cloudproduction-app && \
docker rm cloudproduction-app && \
docker rmi asif449/cloud-production-website:02 && \
docker pull asif449/cloud-production-website:03 && \
docker run -d --name cloudproduction-app -p 3000:3000 --restart unless-stopped asif449/cloud-production-website:03

The image sets `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` so the "Failed to find Server Action" error does not occur. To override: `docker run -e NEXT_SERVER_ACTIONS_ENCRYPTION_KEY="your-base64-key" ...` (generate with `openssl rand -base64 32`).
