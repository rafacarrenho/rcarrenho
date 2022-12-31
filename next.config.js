/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"]
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
