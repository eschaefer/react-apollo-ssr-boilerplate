import gql from 'graphql-tag';
import merge from 'lodash.merge';
import { makeExecutableSchema } from 'graphql-tools';
import { mixcloud, mixcloudQueryWithResolvers } from './mixcloud';

const VERSION = '1.0.0';

// The root types are created here. Since empty types are not allowed we add a
// version resolver
const rootTypes = gql`
  type Query {
    version: String
  }

  type Mutation {
    version: String
  }
`;

const typeDefs = [rootTypes, mixcloud];

const rootResolver = {
  Query: {
    version: () => VERSION,
  },
  Mutation: {
    version: () => VERSION,
  },
};

const resolvers = merge(rootResolver, mixcloudQueryWithResolvers);
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
