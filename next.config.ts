import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove basePath if using a custom domain
  basePath: '/trinity-cre',
}

export default nextConfig
