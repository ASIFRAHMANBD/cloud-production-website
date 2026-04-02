

# --- Builder stage: only what is needed for static export ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
COPY public ./public
COPY next.config.ts ./
COPY tsconfig.json ./
COPY app ./app
COPY instrumentation.ts ./
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- Final stage: minimal static file server, non-root ---
FROM node:20-alpine AS runner
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/out ./out
USER 1000
EXPOSE 3000
CMD ["http-server", "out", "-p", "3000", "--ext", "html"]
