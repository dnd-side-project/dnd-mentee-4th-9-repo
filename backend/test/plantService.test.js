jest.mock('../models/tag.model');
jest.mock('../models/plant.model');
jest.mock('../models/plantTag.model');
const {
  recentOrderPlants,
  viewOrderPlants,
  allOrderPlants,
  detailPlant,
  getCuratingResult,
  searchPlantName,
  searchPlantTag,
} = require('../services/plantService');

describe('비즈니스 로직 메소드 테스트', () => {
  test('recentOrderPlants 결과가 null이 아님', async () => {
    const result = await recentOrderPlants();
    const trueOrFalse = result === null ? false : true;
    expect(trueOrFalse).toBe(true);
  });

  test('viewOrderPlants 결과가 null이 아님', async () => {
    const result = await viewOrderPlants();
    const trueOrFalse = result === null ? false : true;
    expect(trueOrFalse).toBe(true);
  });

  test('allOrderPlants 결과가 null이 아님', async () => {
    const result = await allOrderPlants();
    const trueOrFalse = result === null ? false : true;
    expect(trueOrFalse).toBe(true);
  });

  test('detailPlant 결과가 null이 아님', async () => {
    const result = await detailPlant();
    const trueOrFalse = result === null ? false : true;
    expect(trueOrFalse).toBe(true);
  });

  test('getCuratingResult 결과가 null이 아님', async () => {
    const result = await getCuratingResult();
    const trueOrFalse = result === null ? false : true;
    expect(trueOrFalse).toBe(true);
  });

  test('searchPlantName', async () => {
    const result = await searchPlantName();
    const trueOrFalse = result === null ? false : true;
    expect(trueOrFalse).toBe(true);
  });

  test('searchPlantTag', async () => {
    const result = await searchPlantTag();
    const trueOrFalse = result === null ? false : true;
    expect(trueOrFalse).toBe(true);
  });
});
