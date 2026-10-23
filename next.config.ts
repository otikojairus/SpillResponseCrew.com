import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    localPatterns: [
      { pathname: "/images/**", search: "" },
      { pathname: "/images/**", search: "?v=3" },
    ],
  },
};

export default nextConfig;
