const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
