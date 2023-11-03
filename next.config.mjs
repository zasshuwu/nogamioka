
/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "photos.app.goo.gl",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "i.scdn.co"
    ],
  },
};
export default config;
