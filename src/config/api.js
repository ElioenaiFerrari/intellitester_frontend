import axios from 'axios';
import Env from './.env';

const Api = axios.create({
  baseURL: Env.API_URL,
});

Api.interceptors.request.use((config) => {
  if (!config.headers['authorization']) {
    const token = sessionStorage.getItem('token');

    if (token) {
      config.headers['authorization'] = `Bearer ${token}`;
    }
  }
  return config;
});

export default Api;
