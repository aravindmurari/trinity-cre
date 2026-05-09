import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Uncomment if deploying to a subdirectory (e.g. username.github.io/trinity-cre):
  // basePath: '/trinity-cre',
}

export default nextConfig
