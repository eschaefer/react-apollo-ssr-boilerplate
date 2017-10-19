/* eslint-disable no-underscore-dangle */
/* global window */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { ApolloClient } from 'react-apollo';
import ReduxThunk from 'redux-thunk';

const getPreloadedState = () => {
  if (process.browser) {
    // Grab the state from a global variable injected into the
    // server-generated HTML
    const preloadedState = window.__PRELOADED_STATE__;

    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;
    return preloadedState;
  }

  return {};
};

export default apolloConfig => {
  const apolloClient = new ApolloClient(apolloConfig);

  const reducer = combineReducers({
    apollo: apolloClient.reducer(),
  });

  const store = createStore(
    reducer,
    getPreloadedState(),
    compose(
      applyMiddleware(apolloClient.middleware()),
      applyMiddleware(ReduxThunk),
      // If you are using the devToolsExtension, you can add it here also
      process.browser &&
   typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  return {
    store,
    apolloClient,
  };
};
