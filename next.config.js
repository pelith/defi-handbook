const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  '@mui-treasury/layout',
  '@mui-treasury/mockup',
])

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer, withTM, withMDX], {
  distDir: 'build',
  pageExtensions: ['js', 'jsx', 'mdx'],
})
