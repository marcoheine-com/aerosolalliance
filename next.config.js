/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['friendly-challenge'],
  images: {
    domains: [
      'images.prismic.io',
      'source.unsplash.com',
      'images.unsplash.com',
      'aerosolalliance.cdn.prismic.io',
    ],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
