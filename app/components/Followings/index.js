import { graphql, gql } from 'react-apollo';
import Followings from './Followings';

const query = gql`
  query FollowingsQuery {
    following {
      name
      username
      url
      pictures {
        # Let's alias this one too
        extraLarge: extra_large
      }
    }
  }
`;

const FollowingsQuery = graphql(query, {
  options: { ssr: false }, // won't be called during SSR
});

export default FollowingsQuery(Followings);
