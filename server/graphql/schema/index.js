import gql from 'graphql-tag';
import merge from 'lodash.merge';
import { makeExecutableSchema } from 'graphql-tools';
import { mixcloud, mixcloudResolvers } from './mixcloud';

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

const resolvers = merge(rootResolver, mixcloudResolvers);
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
