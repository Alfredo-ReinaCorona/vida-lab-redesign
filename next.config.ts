import type { NextConfig } from "next";

const isPagesPreview = process.env.NEXT_PUBLIC_BASE_PATH === "/vida-lab-redesign";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isPagesPreview ? "/vida-lab-redesign" : undefined,
  assetPrefix: isPagesPreview ? "/vida-lab-redesign/" : undefined,
};

export default nextConfig;
