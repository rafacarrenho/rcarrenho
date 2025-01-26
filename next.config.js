/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production"

const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphcms.com"
      },
      {
        protocol: "https",
        hostname: "media.graphassets.com"
      }
    ]
  },
  compiler: {
    styledComponents: true
  }
})

module.exports = nextConfig
