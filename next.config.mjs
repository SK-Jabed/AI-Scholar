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
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;