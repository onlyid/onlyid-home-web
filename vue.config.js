const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')

module.exports = {
  devServer: {
    port: 8085,
    disableHostCheck: true
  },
  configureWebpack (config) {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, './dist'),
        routes: [ '/', '/downloads', '/pricing', '/experience', '/signup', '/auth', '/docs', '/docs/overview', '/docs/oauth2', '/docs/web',
          '/docs/android', '/docs/ios', '/docs/custom', '/docs/security', '/docs/faq', '/docs/review', '/about',
          '/about/agreement', '/about/privacy', '/about/careers'],
        postProcess (context) {
          // 对于首页 路径是对的 不用改
          if (context.route === '/') {
            return context
          }
          context.outputPath = path.join(__dirname, './dist', context.route + '.html')
          return context
        }
      }))
    }
  }
}
