import { graphqlExpress } from 'graphql-server-express';
import schema from './schema';
import createLoaders from './loaders';
import { IS_DEV } from '../config';

export const graphqlContext = (req, res) => ({
  loaders: createLoaders(req, res),
});

const graphqlOptions = (req, res) => ({
  schema,
  graphiql: true,
  context: graphqlContext(req, res),
  debug: IS_DEV,
});

const graphql = () => graphqlExpress(graphqlOptions);

export default graphql;
