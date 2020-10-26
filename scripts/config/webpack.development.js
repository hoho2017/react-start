const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { SERVER_PORT, SERVER_HOST } = require('../constant');
const webpack = require('webpack');
const proxySettings = require('../../src/setProxy.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    compress: true,
    open: true,
    hot: true,
    proxy: { ...proxySettings },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
