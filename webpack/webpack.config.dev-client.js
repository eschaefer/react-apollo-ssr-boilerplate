// const Visualizer = require('webpack-visualizer-plugin');
const {
  publicPath,
  assetsPath,
  commonLoaders,
  resolve,
  plugins,
} = require('./common.config');
const webpack = require('webpack');

const { APP_PORT, NODE_ENV } = require('../server/config');

module.exports = {
  devtool: 'cheap-eval-source-map',
  name: 'client',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './app/styles/base.scss',
    './app/client.jsx',
  ],
  output: {
    path: assetsPath,
    publicPath,

    filename: `bundle.${NODE_ENV}.js`,
  },
  module: {
    rules: commonLoaders,
  },
  plugins: plugins.concat([
    // new Visualizer(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]),
  resolve,
  devServer: {
    public: `http://localhost:${APP_PORT}`,
    port: APP_PORT,
  },
};
