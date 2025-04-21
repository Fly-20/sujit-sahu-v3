/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
}

module.exports = nextConfig
