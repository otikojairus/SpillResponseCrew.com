import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Omit `search` so `?v=` cache-bust from lib/images.ts stays in sync without config edits.
    localPatterns: [{ pathname: "/images/**" }],
  },
};

export default nextConfig;
