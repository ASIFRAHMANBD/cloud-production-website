import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateBuildId: async () => {
    return 'cloud-prod-v1.0'; 
  },
  
  output: 'standalone',
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  
  compress: true,
  poweredByHeader: false,
  
  async headers() {
    return [
      // Prevent caching app entry & RSC so clients get fresh Server Action IDs after deploy
      {
        source: '/',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
        ],
      },
      {
        source: '/_next/data/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        ],
      },
      {
        source: '/:path(\\.(?:png|jpg|jpeg|gif|webp|avif|ico|svg|woff|woff2|ttf|otf|eot|css|js))$',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path(\\.html)$',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
    ];
  },

  experimental: {
    optimizePackageImports: ['@fortawesome/fontawesome-free'],
    serverActions: {
      // ২. অরিজিন গুলো প্রোটোকল সহ যোগ করা হয়েছে
      allowedOrigins: [
        'cloudproductionltd.com', 
        'www.cloudproductionltd.com', 
        'https://cloudproductionltd.com',
        'https://www.cloudproductionltd.com',
        '148.163.100.219:3000',
        '148.163.100.219'
      ],
      bodySizeLimit: '2mb',
    },
  },
  
  async rewrites() {
    return [
      { source: "/", destination: "/index.html" },
      { source: "/contact", destination: "/contact.html" },
      { source: "/services", destination: "/services.html" },
      { source: "/portfolio", destination: "/portfolio.html" },
      { source: "/event", destination: "/Event.html" },
      { source: "/career", destination: "/Career.html" },
    ];
  },

  productionBrowserSourceMaps: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;