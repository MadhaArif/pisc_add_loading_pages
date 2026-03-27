/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
}

module.exports = nextConfig
