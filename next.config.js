/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.graphcms.com" },
      { protocol: "https", hostname: "*.graphassets.com" },
    ],
  },
  compiler: { styledComponents: true },
};

module.exports = nextConfig;
