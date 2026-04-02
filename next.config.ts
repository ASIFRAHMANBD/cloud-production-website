import type { NextConfig } from "next";

const BUILD_ID_FALLBACK = "production-build-id";

function resolveBuildId(): string {
  const fromEnv = process.env.NEXT_BUILD_ID?.trim();
  if (fromEnv && /^[a-zA-Z0-9._-]{8,128}$/.test(fromEnv)) {
    return fromEnv;
  }
  return BUILD_ID_FALLBACK;
}

const nextConfig: NextConfig = {
  generateBuildId: async () => {
    return resolveBuildId();
  },

  output: "export",

  images: {
    unoptimized: true,
  },

  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["@fortawesome/fontawesome-free"],
  },

  productionBrowserSourceMaps: false,
};

export default nextConfig;
