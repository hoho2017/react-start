const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { SERVER_PORT, SERVER_HOST } = require('../constant');
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
  },
});
