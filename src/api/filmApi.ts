import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: 'XXXXXXXX', // Your API key here
  },
});

async function getPaginated(page: string, title: string) {
  const resp = await axiosInstance.get('', {
    params: {
      s: title,
      page: page,
    },
  });
  return resp.data;
}

async function getSingle(id: string) {
  const resp = await axiosInstance.get('', {
    params: {
      i: id,
    },
  });
  return resp.data;
}

const FilmApi = {
  getPaginated,
  getSingle,
};

export default FilmApi;
