/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://healthcareproject-39oy.onrender.com',
    BACKEND_URL: process.env.BACKEND_URL || 'https://healthcareproject-39oy.onrender.com',
  },
};

module.exports = nextConfig;
