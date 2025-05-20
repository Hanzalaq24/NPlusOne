/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    return config;
  },
  async rewrites() {
    return [];
  },
  env: {
    PORT: "3000",
  },
  serverRuntimeConfig: {
    port: "3000"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

module.exports = nextConfig; 