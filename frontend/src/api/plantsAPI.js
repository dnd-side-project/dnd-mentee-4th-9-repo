import {get} from './instance';

export const getPlantDetail = (plantId) => {
  return get(`/plants/${plantId}`);
};
