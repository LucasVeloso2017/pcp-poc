import axios from 'axios';

export const api = axios.create({
  baseURL: '/',
  timeout: 100000000,
  headers: { 'X-Custom-Header': 'foobar' },
});
