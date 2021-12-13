const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/itps', {
      target: 'http://125.75.36.102:81',
      changeOrigin: true,
      pathRewrite: {
        '^/itps/': '/itps/'
      }
    })
  )
}
