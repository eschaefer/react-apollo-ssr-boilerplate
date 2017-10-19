import { graphql, gql } from 'react-apollo';
import Shows from './Shows';

const query = gql`
  query ShowsQuery {
    shows {
      name
      url
      # Alias key so it doesn't conflict w/ React key as prop
      showKey: key
      # We can alias this snake_case property
      audioLength: audio_length
      pictures {
        # Let's alias this one too
        extraLarge: extra_large
      }
    }
  }
`;

const ShowsQuery = graphql(query, {
  options: { ssr: false }, // won't be called during SSR
});

export default ShowsQuery(Shows);
