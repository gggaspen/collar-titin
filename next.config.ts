import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "res.cloudinary.com",
      "i.postimg.cc",
      "media0.giphy.com",
      "media3.giphy.com",
    ],
  },
};

export default nextConfig;
