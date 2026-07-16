/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isolate this app from parent F:\Projects lockfiles
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Mobile-first media: serve sized WebP/AVIF where the platform optimizes
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 88, 90],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  // Slightly better cold starts / tree-shaking for motion on low-end phones
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
}

export default nextConfig
