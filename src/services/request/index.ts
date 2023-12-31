import Axios from 'axios';
import { interceptorsAuthHeaders } from './interceptors';

const baseURL = process.env.BASE_PATH;
const xToken = process.env.X_TOKEN;

export const request = Axios.create({
  baseURL,
  headers: {
    'x-token': xToken,
  },
  timeout: 15000, // 15 seconds timeout
});

request.interceptors.request.use(interceptorsAuthHeaders);

export default request;
