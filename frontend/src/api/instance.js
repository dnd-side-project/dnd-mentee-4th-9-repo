import axios from 'axios';
import {BASE_URL} from '../const/config';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'api-key': '28308fa3aca32470631c27377bbc3f43:a17bf428d90e22d3232e8e95bc4c5b1f',
  },
});

const get = (path, request = null) => {
  return new Promise((resolve, reject) => {
    instance
      .get(path, request)
      .then(({data}) => resolve(data))
      .catch((e) => reject(e.message));
  });
};

const post = (path, params) => {
  return new Promise((resolve, reject) => {
    instance
      .post(path, params)
      .then(({data}) => resolve(data))
      .catch((e) => reject(e.message));
  });
};

export {BASE_URL, get, post};
