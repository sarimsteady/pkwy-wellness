import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/legal/privacy",
        permanent: true
      },
      {
        source: "/terms-of-service",
        destination: "/legal/terms",
        permanent: true
      }
    ]
  },
};

export default nextConfig;
