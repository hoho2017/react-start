const { merge } = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.common.js');
const glob = require('glob');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const { PROJECT_PATH } = require('../constant.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = merge(common, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,less,css}`, {
        nodir: true,
      }),
      whitelist: ['html', 'body'],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
    }),
  ],
});
