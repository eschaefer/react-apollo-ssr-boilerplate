import axios from 'axios';
import createRestLoader from './rest';

export default (req, res) => {
  const successInterceptor = response => response.data;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const api = axios.create({
    baseURL: 'https://api.mixcloud.com/',
    timeout: 5000,
    headers,
  });

  api.interceptors.response.use(successInterceptor);

  const loader = createRestLoader(req, res, api);

  return {
    getProfile: () => loader.load('lylradio'),
    getShows: () => loader.load('lylradio/cloudcasts'),
    getFollowings: () => loader.load('lylradio/following'),
  };
};
