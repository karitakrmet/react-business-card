const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/colors',
    proxy({
      target: 'http://www.colr.org/json/colors/random/7',
      changeOrigin: true,
      pathRewrite: {
        '^/colors' : '',
      },
    }),
  );
}; 