import axios from 'axios';
import {BASE_URL} from '../const/config';

const instance = axios.create({
  baseURL: BASE_URL,
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
