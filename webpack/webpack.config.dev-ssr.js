const {
  publicPath,
  commonLoaders,
  resolve,
  plugins,
} = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'SSR',
  entry: './app/SSR.jsx',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  target: 'node',
  externals: [nodeExternals(), /^\.\.\/server\/.*/],
  module: {
    rules: [
      commonLoaders[0],
      commonLoaders[1],
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  plugins: [plugins[0]],
  resolve,
};
