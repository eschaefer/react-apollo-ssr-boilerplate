import { Route, Switch } from 'react-router';
import React from 'react';
import routes from './routes';

const App = () => (
  <Switch>
    {routes.map(route => <Route key={`route-${route.name}`} {...route} />)}
  </Switch>
);

export default App;
