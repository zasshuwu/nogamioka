/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [
      "photos.app.goo.gl",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
};

module.exports = nextConfig
