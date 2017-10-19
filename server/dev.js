import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import hotMiddleware from 'webpack-hot-middleware';
import devMiddleware from 'webpack-dev-middleware';
import webpackServerRenderMiddleware from 'webpack-server-render-middleware';
import { graphiqlExpress } from 'graphql-server-express';

import webpackConfig from '../webpack/webpack.config.dev-client';
import webpackServerConfig from '../webpack/webpack.config.dev-ssr';
import graphql from './graphql';
import applySSR from './helpers/applySSR';

import { HOST, PORT } from './config';

const hotConfig = {
  log: console.log, // eslint-disable-line
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
};

const devMwConfig = {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
};

const serverRenderMiddleWare = webpackServerRenderMiddleware(
  webpack(webpackServerConfig),
  {
    lazy: false,
    publicPath: '/assets/',
    watchOptions: {},
  }
);

const compiler = webpack(webpackConfig);
const app = express();

app
  .use(hotMiddleware(compiler, hotConfig))
  .use(devMiddleware(compiler, devMwConfig))
  .use(serverRenderMiddleWare)
  .use(cookieParser())
  .use(bodyParser.json())
  .use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
  .use('/graphql', graphql())
  .use('/assets', express.static('dist/assets'))
  .use(applySSR)
  .listen(PORT);

console.log(`[DEV] Server running at http://${HOST}:${PORT}`); // eslint-disable-line
