import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // /join was the application URL before the YC-style redesign.
    return [{ source: "/join", destination: "/apply", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
