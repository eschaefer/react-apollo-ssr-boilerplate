import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { createLocalInterface } from 'apollo-local-query';
import { StaticRouter } from 'react-router';
import * as graphql from 'graphql';
import React from 'react';

import { graphqlContext } from '../server/graphql';

import App from './app';
import createStore from './store';
import schema from '../server/graphql/schema';
import template from './template';

const hashedBundles =
 process.env.NODE_ENV === 'production'
    ? require('./webpack-assets-client.json') // eslint-disable-line
   : {};

export default async function handleRender(request, response) {
  const jsBundle =
  process.env.NODE_ENV === 'production'
    ? hashedBundles.main.js
    : '/assets/bundle.development.js';

  const cssBundle =
  process.env.NODE_ENV === 'production' ? hashedBundles.main.css : '';

  const graphqlOptions = {
    context: graphqlContext(request, response),
  };

  const networkInterface = createLocalInterface(
    graphql,
    schema,
    graphqlOptions
  );

  const { store, apolloClient } = createStore({
    ssrMode: true,
    networkInterface,
  });

  const context = {};

  const reactApp = (
    <ApolloProvider store={store} client={apolloClient}>
      <StaticRouter location={request.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  const html = await renderToStringWithData(reactApp);

  if (context.url) {
    response.redirect(context.status || 301, context.url);
  } else {
    const reduxState = {
      ...store.getState(),
      apollo: apolloClient.getInitialState(),
    };

    response.status(context.status || 200);
    response.send(
      template({
        html,
        reduxState,
        jsBundle,
        cssBundle,
      })
    );
  }
}
