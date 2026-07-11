import type { NextConfig } from "next";

/**
 * Performance budget (PR8):
 * - Home interactive islands target < ~150 KB gzipped
 * - Motion is CSS-first; StatCountUp is dynamic-imported
 * - Do not add framer-motion unless a specific chapter cannot be CSS + IO
 * - Hero images use priority + sizes; avoid extra client chrome on Home
 */
const nextConfig: NextConfig = {
  experimental: {
    // Progressive enhancement: silent no-op when browser/API unsupported
    viewTransition: true,
  },
};

export default nextConfig;
