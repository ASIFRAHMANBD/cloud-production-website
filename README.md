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
