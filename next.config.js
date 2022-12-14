/** @type {import('next').NextConfig} */

// Package docs at https://github.com/martpie/next-transpile-modules
const withTM = require('next-transpile-modules')(['friendly-challenge'])

module.exports = withTM({
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
})
