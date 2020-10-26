const proxySettings = {
  '/api/': {
    target: '',
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '',
    },
  },
};
module.exports = proxySettings;
