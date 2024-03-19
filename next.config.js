/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "localhost:3001",
      "http://localhost:3001",
      "192.168.0.25",
      "192.168.0.25:3001",
      "http://192.168.0.25:3001",
    ],
  },
};

module.exports = nextConfig;
