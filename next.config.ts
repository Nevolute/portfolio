import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/nevolute-portfolio' : '',
  assetPrefix: isProd ? '/nevolute-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
