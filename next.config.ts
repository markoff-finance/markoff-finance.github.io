import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
