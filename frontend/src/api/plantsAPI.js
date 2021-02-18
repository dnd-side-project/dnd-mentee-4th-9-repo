import {get} from './instance';

export const getPlantDetail = (plantId) => {
  return get(`/plants/${plantId}`);
};

export const getCuratingResult = (result) => {
  // return get('/plants/curating', {params: {result}}); // origin
  return get('/plants/curating', {params: {result: '몬스테라'}}); // test
};

export const getAllTags = () => {
  return get('/tags');
};

export const getAllPlants = (order) => {
  return get(`/plants?order=${order}`);
};
