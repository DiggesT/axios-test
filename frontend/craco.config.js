const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco')

module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
}
