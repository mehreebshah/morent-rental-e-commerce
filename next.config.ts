import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**", // Allow all paths under cdn.sanity.io
      },
    ],
  },
};

export default nextConfig;
