const {
  publicPath,
  commonLoaders,
  resolve,
  plugins,
} = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'assets/styles.[hash].css',
  allChunks: true,
});

module.exports = {
  devtool: 'source-map',
  name: 'SSR',
  entry: './app/SSR.jsx',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    rules: commonLoaders,
  },
  plugins: [
    plugins[0],
    extractSass,
    new UglifyJSPlugin({ compress: { warnings: false } }),
  ],
  resolve,
};
