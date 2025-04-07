/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
    serverExternalPackages: ["@next/swc-linux-x64-gnu"],
  },
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;