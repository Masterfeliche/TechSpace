import type { NextConfig } from "next";

// Static export: `npm run export` writes plain HTML/CSS/JS to out/, which deploy.tz
// serves with `serve out` (see Shipfile). No Node server runs in production, so
// server-only features are replaced: /join forwards in the browser, images are not
// optimised on the fly.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Linting runs separately (`npm run lint`); a host without ESLint shouldn't fail the build.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
