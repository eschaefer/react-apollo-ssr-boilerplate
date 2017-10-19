import createRestLoader from './rest';
import createMixcloudLoader from './mixcloud';

const createLoaders = (req, res) => ({
  rest: createRestLoader(req, res),
  mixcloud: createMixcloudLoader(req, res),
});

export default createLoaders;
