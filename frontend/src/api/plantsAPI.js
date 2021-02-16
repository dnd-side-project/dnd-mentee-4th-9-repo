import {get} from './instance';

export const getPlantDetail = (plantId) => {
  return get(`/plants/${plantId}`);
};

export const getCuratingResult = (result) => {
  // return get('/plants/curating', {params: {result}}); // origin
  return get('/plants/curating', {params: {result: '몬스테라'}}); // test
};
