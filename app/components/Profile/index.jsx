import { graphql, gql } from 'react-apollo';
import Profile from './Profile';

const query = gql`
  query ProfileQuery {
    profile {
      name
      biog
      pictures {
        # We can alias this snake_case property!
        extraLarge: extra_large
      }
    }
  }
`;

const ProfileQuery = graphql(query);

export default ProfileQuery(Profile);
