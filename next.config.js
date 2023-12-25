const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const nextConfig = {
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'export'
}
module.exports = {
  ...withNextra(),
  ...nextConfig
}
