import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';

import Section, {SECTION} from '../components/Section';
import TagList, {ADD_FILTER} from '../components/TagList';
import TestMain from '../components/TestMain';
import ColorTags from '../components/SearchPlants/ColorTags';

import {getAllTags} from '../api/plantsAPI';
import {EMPTY, isEmptyArr, isEmptyStr, qsParse} from '../lib/handler';
import Footer from '../components/Footer/Footer';
import PlantList from '../components/SearchPlants/PlantList';

const SPACE = ' ';

const SearchPlant = ({location: {search}}) => {
  const [tagData, setTagData] = useState([]);

  const getTags = useCallback(async () => {
    const data = await getAllTags();
    setTagData(formatTag(data));
  }, []);

  const formatTag = (data) => {
    const types = data.map(({type}) => type);
    const tagByType = (typeValue) => data.filter(({type}) => type === typeValue);

    return data
      .filter(({type}, index) => !types.includes(type, index + 1))
      .map(({type}) => {
        return {
          type,
          tags: [].concat(tagByType(type)),
        };
      });
  };

  useEffect(() => {
    getTags();
  }, [getTags]);

  const qsTag = qsParse(search).tag;
  const tagArr = isEmptyStr(qsTag) ? [] : qsTag.split(SPACE);
  const selectedTag = isEmptyArr(tagArr) ? tagArr : tagArr.filter((tag) => tag !== EMPTY);

  if (!tagData) return null;

  return (
    <Wrapper>
      <Section width="lg" bgColor="lightGreen">
        <SearchInput>
          <img src={`${process.env.PUBLIC_URL}/images/search-black.svg`} alt="search-plant" />
          <input type="text" placeholder="어떤 식물 친구를 찾으시나요?" />
        </SearchInput>
      </Section>

      <Section width="lg">
        <ChooseHeader>
          <img src={`${process.env.PUBLIC_URL}/images/filter.svg`} alt="choose keyword" />
          <h1>선호하는 키워드를 선택해보세요</h1>
        </ChooseHeader>
      </Section>

      <Section width="lg" bgColor="lightGray" margin={40}>
        <KeywordGroup>
          {tagData.map(({type, tags}) => (
            <KeywordField key={type}>
              <h2>{type}</h2>
              <TagList tagData={tags} selected={selectedTag} event={{type: ADD_FILTER}} query={search} />
            </KeywordField>
          ))}
        </KeywordGroup>
      </Section>

      <ColorTags tags={selectedTag} />

      <PlantList filterTag={selectedTag} />

      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0;
`;

const SearchInput = styled.div`
  position: relative;
  margin-top: 56px;
  margin-bottom: 20px;
  height: 80px;
  img {
    position: absolute;
    top: 28px;
    left: 38px;
  }
  input {
    border-radius: 20px;
    border: none;
    height: 80px;
    width: 100%;
    padding: 22px 38px 22px 76px;
    color: ${({theme}) => theme.colors.gray};
    font-family: 'Iropke Batang', Batang, Serif;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.05em;
    :focus {
      outline: none;
    }
  }

  @media ${({theme}) => theme.devices.md} {
    height: 40px;

    img {
      transform: scale(0.54);
      top: 9px;
      left: 12px;
    }
    input {
      border-radius: 5px;
      height: 40px;
      width: 100%;
      padding: 11px 19px 11px 36px;
      font-size: 14px;
      line-height: 18.2px;
    }
  }
`;

const ChooseHeader = styled.header`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    margin-right: 34px;
  }
  h1 {
    font-family: 'Iropke Batang', Batang, Serif;
    font-size: 24px;
    line-height: 46px;
    letter-spacing: -0.05em;
    color: ${({theme}) => theme.colors.green};
    padding-left: 34px;
  }

  @media ${({theme}) => theme.devices.md} {
    height: 50px;

    img {
      transform: scale(0.54);
      margin-right: 5px;
    }
    h1 {
      font-size: 14px;
      line-height: 21px;
      padding-left: 18px;
    }
  }
`;

const KeywordGroup = styled.fieldset`
  height: 404px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${({theme}) => theme.devices.md} {
    height: auto;
  }
`;

const KeywordField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 88px;

  h2 {
    width: 127px;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: -0.05em;
    color: ${({theme}) => theme.colors.darkGray};
  }

  @media ${({theme}) => theme.devices.md} {
    height: 31.5px;

    h2 {
      width: 65px;
      font-size: 14px;
      line-height: 21px;
    }
    & + & {
      margin-top: 10px;
    }
  }
`;

export default SearchPlant;
