import type { NextConfig } from "next";
// export const images = {
//   domains: ["assets.aceternity.com", "images.unsplash.com"],
// };
const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/*",
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
        search: "",
      },
    ],
  },
};
export default nextConfig;
