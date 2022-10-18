/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = withMDX({
  reactStrictMode: true,
  output: 'standalone',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: ["postcss-100vh-fix"],
  images: {
    domains: [
      "photos.app.goo.gl",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
});

module.exports = nextConfig;
