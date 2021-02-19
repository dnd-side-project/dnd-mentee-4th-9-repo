const {
  recentOrderPlants,
  viewOrderPlants,
  allOrderPlants,
  detailPlant,
  getCuratingResult,
  searchPlantName,
  searchPlantTag,
} = require('../services/plantService');

const getListPlants = async (req, res, next) => {
  const plantDTO = req.query.order;
  let result;
  try {
    switch (plantDTO) {
      case 'recent':
        result = await recentOrderPlants();
        return res.status(200).json(result);
      case 'view':
        result = await viewOrderPlants();
        return res.status(200).json(result);
      default:
        result = await allOrderPlants();
        return res.status(200).json(result);
    }
  } catch (error) {
    next(error);
  }
};

const getDetailPlant = async (req, res, next) => {
  const plantDTO = req.params.plantId;
  try {
    const detailResult = await detailPlant(plantDTO);
    res.status(200).json(detailResult);
  } catch (error) {
    next(error);
  }
};

const curatingResult = async (req, res, next) => {
  const plantDTO = req.query.result;
  try {
    const resultPlant = await getCuratingResult(plantDTO);
    res.status(200).json(resultPlant);
  } catch (error) {
    next(error);
  }
};

const searchByPlantName = async (req, res, next) => {
  const plantDTO = req.body.keyword;
  try {
    const searchResult = await searchPlantName(plantDTO);
    res.status(200).json(searchResult);
  } catch (error) {
    next(error);
  }
};

const searchByPlantTag = async (req, res, next) => {
  const plantDTO = req.body.tags.split(',');
  try {
    const tagSearchResult = await searchPlantTag(plantDTO);
    res.status(200).json(tagSearchResult);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getListPlants,
  getDetailPlant,
  curatingResult,
  searchByPlantName,
  searchByPlantTag,
};
