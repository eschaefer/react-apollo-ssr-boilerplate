import DataLoader from 'dataloader';
import axios from 'axios';

function createRestLoader(req, res, axiosInstance) {
  const instance = axiosInstance || axios;

  return new DataLoader(async urls =>
    Promise.all(
      urls.map(async url => {
        const response = await instance.get(url);

        if (response.data) {
          return response.data;
        }

        return response;
      })
    )
  );
}

export default createRestLoader;
