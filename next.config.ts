import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;
