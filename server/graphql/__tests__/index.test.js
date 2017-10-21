import { graphql } from 'graphql';
import profileResponse from '../schema/__mocks__/profileResponse';
import showsResponse from '../schema/__mocks__/showsResponse';
import followingsResponse from '../schema/__mocks__/followingsResponse';
import schema from '../schema';

describe('GraphQL', () => {
  it('should execute a profile query', async () => {
    const query = `
      {
        profile {
          name
          country
          cloudcast_count
          username
          biog
          pictures {
            extra_large
          }
        }
      }
    `;

    const response = await graphql(schema, query);

    expect(response).toEqual(profileResponse);
  });

  it('should execute a shows list query', async () => {
    const query = `
      {
        shows {
          url
          name
          username
          audio_length
          created_time
          key
          pictures {
            extra_large
          }
        }
      }
    `;

    const response = await graphql(schema, query);

    expect(response).toEqual(showsResponse);
  });

  it('should execute a following list query', async () => {
    const query = `
      {
        following {
          name
          username
          url
          pictures {
            extra_large
          }
        }
      }
    `;

    const response = await graphql(schema, query);

    expect(response).toEqual(followingsResponse);
  });
});
