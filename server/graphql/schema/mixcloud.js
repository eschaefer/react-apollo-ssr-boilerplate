import gql from 'graphql-tag';

export const mixcloud = gql`
  type Show {
    url: String
    name: String
    username: ID
    audio_length: Int
    created_time: String
    pictures: Pictures
    key: String
  }

  type Profile {
    name: String
    city: String
    country: String
    cloudcast_count: Int
    username: ID
    url: String
    biog: String
    pictures: Pictures
  }

  type Follower {
    name: String
    username: ID
    url: String
    pictures: Pictures
  }

  type Pictures {
    extra_large: String
  }

  extend type Query {
    profile: Profile
    shows: [Show]
    following: [Follower]
  }
`;

export const mixcloudQueryWithResolvers = {
  Query: {
    profile: (_, args, { loaders }) => loaders.mixcloud.getProfile(),
    shows: (_, args, { loaders }) => loaders.mixcloud.getShows(),
    following: (_, args, { loaders }) => loaders.mixcloud.getFollowings(),
  },
};
