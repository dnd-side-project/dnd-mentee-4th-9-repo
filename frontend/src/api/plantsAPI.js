import {get} from './instance';

export const getPlantDetail = (plantId) => {
  return get(`/plants/${plantId}`);
};

export const getAllPlants = (order) => {
  return get(`/plants?order=${order}`);
};
