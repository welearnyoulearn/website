import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.0.10", "192.168.0.0/24"],
};

export default nextConfig;
