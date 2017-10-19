import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';

import graphql from './graphql';
import handleRender from '../dist/SSR';

import { HOST, PORT } from './config';

const app = express();

app
  .use(cookieParser())
  .use(bodyParser.json())
  .use(compression())
  .use('/graphql', graphql())
  .use('/assets', express.static('dist/assets'))
  .use(handleRender)
  .listen(PORT);

console.log(`[PROD] Server running at http://${HOST}:${PORT}`); // eslint-disable-line
