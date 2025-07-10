import type { NextConfig } from "next";
import { Header, Rewrite } from "next/dist/lib/load-custom-routes";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
 
    

  
  output: "export"
  /* config options here */
};

export default nextConfig;
