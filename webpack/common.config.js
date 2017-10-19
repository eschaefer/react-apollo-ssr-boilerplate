const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;

const extractSass = new ExtractTextPlugin({
  filename: 'css/styles.[hash].css',
  allChunks: true,
  disable: IS_DEV,
});

module.exports = {
  publicPath: '/assets/',
  assetsPath: path.join(__dirname, '..', 'dist', 'assets'),
  commonLoaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: path.join(__dirname, '..', 'node_modules'),
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            name: '[name]-[sha512:hash:base64:7].[ext]',
          },
        },
      ],
    },
    {
      test: /\.s?css$/,
      use: extractSass.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true,
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './webpack',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [path.resolve(__dirname, '..', 'app', 'styles')],
            },
          },
        ],
        // use style-loader in development
        fallback: 'style-loader',
      }),
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'scss', 'json'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    extractSass,
  ],
};
