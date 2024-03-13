/** @type {import('next').NextConfig} */

module.exports = {
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
  transpilePackages: ['friendly-challenge'],
}
