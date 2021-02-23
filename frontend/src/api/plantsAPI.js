import {get, post} from './instance';

export const getPlantDetail = (plantId) => {
  return get(`/plants/${plantId}`);
};

export const getCuratingResult = (result) => {
  return get(`/plants/curating?result=${result}`);
};

export const getAllTags = () => {
  return get('/tags');
};

export const getAllPlants = (order) => {
  return get(`/plants?order=${order}`);
};

export const getTagPlants = (params) => {
  return post(`/plants/encyclopedia/tag`, params);
};
