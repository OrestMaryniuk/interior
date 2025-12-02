import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js', // Treat SVG files as JavaScript modules
          },
        },
      },
};

export default nextConfig;
