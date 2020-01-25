const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/api/colr',
    proxy({
      target: 'http://www.colr.org',
      changeOrigin: true,
      pathRewrite: {
        '^/api/colr' : '',
      },
    }),
  );
};