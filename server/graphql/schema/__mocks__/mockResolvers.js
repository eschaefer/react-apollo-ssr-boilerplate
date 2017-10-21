import profileResponse from './profileResponse';
import showsResponse from './showsResponse';
import followingsResponse from './followingsResponse';

export default {
  Profile: () => ({
    name: profileResponse.data.profile.name,
    country: profileResponse.data.profile.country,
    cloudcast_count: profileResponse.data.profile.cloudcast_count,
    biog: profileResponse.data.profile.biog,
    username: profileResponse.data.profile.username,
    pictures: {
      extra_large: profileResponse.data.profile.pictures.extra_large,
    },
  }),
  Show: () => ({
    url: showsResponse.data.shows[0].url,
    name: showsResponse.data.shows[0].name,
    username: showsResponse.data.shows[0].username,
    audio_length: showsResponse.data.shows[0].audio_length,
    created_time: showsResponse.data.shows[0].created_time,
    pictures: showsResponse.data.shows[0].pictures,
    key: showsResponse.data.shows[0].key,
  }),
  Follower: () => ({
    name: followingsResponse.data.following[0].name,
    username: followingsResponse.data.following[0].username,
    url: followingsResponse.data.following[0].url,
    pictures: followingsResponse.data.following[0].pictures,
  }),
};
