import type { NextConfig } from "next";
import { Header, Rewrite } from "next/dist/lib/load-custom-routes";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  rewrites: async ():Promise<Rewrite[]>=>[
   
    {
      source: '/google8c405f60274f7059.html',
      destination: '/public/google8c405f60274f7059.html'
    }
   

  ]
  ,
    

  
  output: "export"
  /* config options here */
};

export default nextConfig;
