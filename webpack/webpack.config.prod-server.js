const {
  publicPath,
  commonLoaders,
  resolve,
  plugins,
} = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  name: 'server',
  entry: ['babel-polyfill', './server/index.js'],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  module: {
    rules: commonLoaders,
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    plugins[0],
    new UglifyJSPlugin({
      compress: { warnings: false },
    }),
  ],
  resolve,
};
