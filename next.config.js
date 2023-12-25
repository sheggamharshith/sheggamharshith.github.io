const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const nextConfig = {
  output: 'export',
}
module.exports = {
  ...withNextra(),
  ...nextConfig
}
