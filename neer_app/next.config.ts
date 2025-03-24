import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images:{
  //   domains:""
  // }
  experimental:{
    cssChunking:true,
  },
}satisfies NextConfig

export default nextConfig;
