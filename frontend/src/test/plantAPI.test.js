import {getPlantDetail, getCuratingResult, getAllTags, getAllPlants, getTagPlants, getSearchKeywordPlants} from '../api/plantsAPI';

describe('getPlantDetail 테스트', () => {
    test("API 호출 성공", async() => {
        const result  = await getPlantDetail(1);
        const trueOrFalse = result === null ? false : true;
        expect(trueOrFalse).toBe(true);
    })
})

describe('getCuratingResult 테스트', () => {
    test("API 호출 성공", async() => {
        const result  = await getCuratingResult('몬스테라');
        const trueOrFalse = result === null ? false : true;
        expect(trueOrFalse).toBe(true);
    })
})

describe('getAllTags 테스트', () => {
    test("API 호출 성공", async() => {
        const result  = await getAllTags();
        const trueOrFalse = result === null ? false : true;
        expect(trueOrFalse).toBe(true);
    })
})

describe('getAllPlants 테스트', () => {
    test("API 호출 성공", async() => {
        const result  = await getAllPlants('view');
        const trueOrFalse = result === null ? false : true;
        expect(trueOrFalse).toBe(true);
    })
})

describe('getTagPlants 테스트', () => {
    test("API 호출 성공", async() => {
        const result  = await getTagPlants({
            "tags": "#꽃,#열매"
        });
        const trueOrFalse = result === null ? false : true;
        expect(trueOrFalse).toBe(true);
    })
})

describe('getSearchKeywordPlants 테스트', () => {
    test("API 호출 성공", async() => {
        const result  = await getSearchKeywordPlants({
            "keyword": "몬스테라"
        });
        const trueOrFalse = result === null ? false : true;
        expect(trueOrFalse).toBe(true);
    })
})
