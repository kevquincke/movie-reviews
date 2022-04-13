import axios from 'axios';
import { decamelizeKeys, camelizeKeys } from 'humps';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';


const client = axios.create({
  baseURL: 'https://api.nytimes.com/svc/movies/v2',
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

client.interceptors.request.use((config) => {
  const { data } = config;
  config.data = data ? decamelizeKeys({ ...data }): {};
  return config;
});


client.interceptors.response.use(async (response) => {
  const { data } = response;
  response.data = camelizeKeys(data);
  return response;
});

export default client;