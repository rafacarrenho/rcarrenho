/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production"

const withPWA = require("next-pwa")({ dest: "public", disable: !isProd })

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.graphcms.com" },
      { protocol: "https", hostname: "*.graphassets.com" }
    ]
  },
  compiler: { styledComponents: true }
})

module.exports = nextConfig
