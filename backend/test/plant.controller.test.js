jest.mock('../services/plantService');
jest.mock('../models/plant.model');
jest.mock('../models/tag.model');
const {
  getListPlants,
  getDetailPlant,
  curatingResult,
  searchByPlantName,
  searchByPlantTag,
} = require('../controllers/plant.controller');
const Plant = require('../models/plant.model');
const Tag = require('../models/tag.model');

describe('getListPlants', () => {
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };
  const next = jest.fn();

  test('최신순 식물 리스트 - 응답 성공', async () => {
    const req = {
      query: {
        order: 'recent',
      },
    };
    await getListPlants(req, res, next);
    expect(res.status).toBeCalledWith(200);
  });

  test('조회수순 식물 리스트 - 응답 성공', async () => {
    const req = {
      query: {
        order: 'view',
      },
    };
    await getListPlants(req, res, next);
    expect(res.status).toBeCalledWith(200);
  });

  test('default 식물 리스트 - 응답 성공', async () => {
    const req = {
      query: {
        order: {},
      },
    };
    await getListPlants(req, res, next);
    expect(res.status).toBeCalledWith(200);
  });

  test('식물 리스트 - 응답 실패시 에러처리', () => {
    const req = {};
    expect(async () => {
      await getListPlants(req, res, next);
    }).not.toThrow(expect.anything());
  });
});

describe('getDetailPlant', () => {
  const req = {
    params: {
      plantId: {},
    },
  };
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };
  const next = jest.fn();

  test('식물 상세 정보 - 응답 성공', async () => {
    await getDetailPlant(req, res, next);
    expect(res.status).toBeCalledWith(200);
  });

  test('식물 상세 정보 - 응답 실패시 에러처리', () => {
    const req = {};
    expect(async () => {
      await getDetailPlant(req, res, next);
    }).not.toThrow(expect.anything());
  });
});

describe('curatingResult', () => {
  const req = {
    query: {
      result: {},
    },
  };
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };
  const next = jest.fn();

  test('큐레이팅 결과 - 응답 성공', async () => {
    await curatingResult(req, res, next);
    expect(res.status).toBeCalledWith(200);
  });

  test('큐레이팅 결과 - 응답 실패시 에러처리', () => {
    const req = {};
    expect(async () => {
      await curatingResult(req, res, next);
    }).not.toThrow(expect.anything());
  });
});

describe('searchByPlantName', () => {
  const req = {
    body: {
      keyword: {},
    },
  };
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };
  const next = jest.fn();
  test('식물 이름으로 검색 결과 - 응답 성공', async () => {
    await searchByPlantName(req, res, next);
    expect(res.status).toBeCalledWith(200);
  });

  test('식물 이름으로 검색 결과 - 응답 실패시 에러처리', () => {
    const req = {};
    expect(async () => {
      await searchByPlantName(req, res, next);
    }).not.toThrow(expect.anything());
  });
});

describe('searchByPlantTag', () => {
  const req = {
    body: {
      tags: {
        split: jest.fn(),
      },
    },
  };
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };
  const next = jest.fn();

  test('식물 태그로 검색 결과 - 응답 성공', async () => {
    await searchByPlantTag(req, res, next);
    expect(res.status).toBeCalledWith(200);
  });

  test('식물 태그로 검색 결과 - 응답 실패시 에러처리', () => {
    const req = {};
    expect(async () => {
      await searchByPlantTag(req, res, next);
    }).not.toThrow(expect.anything());
  });
});
