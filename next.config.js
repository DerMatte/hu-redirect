/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: process.env.AFFLIATE_URL,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
