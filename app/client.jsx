/* global document */
import { ApolloProvider, createNetworkInterface } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';
import App from './app';
import createStore from './store';

const init = () => {
  const rootElement = document.querySelector('.root-element');

  const networkInterface = createNetworkInterface({
    uri: '/graphql',
    batchInterval: 1,
  });

  const { store, apolloClient } = createStore({ networkInterface });

  render(
    <ApolloProvider store={store} client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    rootElement
  );
};

// In development, set up HMR and dev tools:
if (module.hot) {
  /* NOTE: If you only want to include devtool integration, without
           runtime error checking, you can replace preact/debug
           with preact/devtools.
  */
  require('preact/debug'); // eslint-disable-line
  module.hot.accept(); // eslint-disable-line
}

init();
