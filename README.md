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

The image sets `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` so the "Failed to find Server Action" error does not occur. To override: `docker run -e NEXT_SERVER_ACTIONS_ENCRYPTION_KEY="your-base64-key" ...` (generate with `openssl rand -base64 32`).
