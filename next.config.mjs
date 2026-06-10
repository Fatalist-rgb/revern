/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
