/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  compress: true,
  generateBuildId: async () => {
    // Generate a unique build ID based on timestamp
    return `build-${Date.now()}`
  },
  experimental: {
    // Enable if you need streaming features
    serverActions: true,
  },
}

module.exports = nextConfig
