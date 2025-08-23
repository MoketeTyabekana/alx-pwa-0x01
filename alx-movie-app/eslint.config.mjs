import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

const withPWA = withPWAInit({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default withPWA({
  ...nextConfig
})


