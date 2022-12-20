/** @type {import("next").NextConfig} */
const config = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  // trailingSlash: true,
  reactStrictMode: true,
  swcMinify: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config; 