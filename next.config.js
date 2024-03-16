/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "localhost:3001", "http://localhost:3001"],
  },
};

module.exports = nextConfig;
