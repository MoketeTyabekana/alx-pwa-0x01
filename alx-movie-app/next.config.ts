import type { NextConfig } from "next";

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: 'public'
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
  // Add your webpack config here if needed
};

export default withPWA({
  ...nextConfig
});

// export default nextConfig; // Removed: Only one default export allowed
