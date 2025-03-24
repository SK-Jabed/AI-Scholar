/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    taint: true,
    serverComponentsExternalPackages: ['@next/swc-linux-x64-gnu']
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all domains (not recommended for production)
      },
    ],
  }
};

export default nextConfig;