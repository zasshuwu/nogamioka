/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
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
};
