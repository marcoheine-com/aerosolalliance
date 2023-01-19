/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['friendly-challenge'],
  images: {
    remotePatterns: [
      'https://images.prismic.io/aerosolalliance/*',
      'https://source.unsplash.com/*',
      'https://images.unsplash.com/*',
      'https://aerosolalliance.cdn.prismic.io/*',
    ],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
