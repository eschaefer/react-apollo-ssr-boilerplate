// const Visualizer = require('webpack-visualizer-plugin');
const {
  publicPath,
  assetsPath,
  commonLoaders,
  resolve,
  plugins,
} = require('./common.config');
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  name: 'client',
  entry: ['babel-polyfill', './app/styles/base.scss', './app/client.jsx'],
  output: {
    path: assetsPath,
    publicPath,
    filename: `js/bundle.${process.env.NODE_ENV}.[hash].js`,
  },
  module: {
    rules: commonLoaders,
  },
  plugins: plugins.concat([
    // new Visualizer(),
    new AssetsPlugin({
      path: path.resolve(__dirname, '..', 'app'),
      filename: 'webpack-assets-client.json',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJSPlugin({ sourceMap: true, compress: { warnings: false } }),
  ]),
  resolve,
};
