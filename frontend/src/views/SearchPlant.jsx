import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TagList from '../components/TagList';
import {getAllTags} from '../api/plantsAPI';
import Section from '../components/Section';

const SearchPlant = () => {
  const [tagData, setTagData] = useState([]);

  const getTags = async () => {
    const data = await getAllTags();
    setTagData(formatTag(data));
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!tagData) return null;

  return (
    <Wrapper>
      <Section>
        <SearchInput>
          <input type="text" placeholder="어떤 식물 친구를 찾으시나요?" />
        </SearchInput>
      </Section>

      <Section width="lg" bgColor="">
        <KeywordGroup>
          {tagData.map(({type, tags}) => (
            <KeywordField key={type}>
              <h2>{type}</h2>
              <TagList tagData={tags} />
            </KeywordField>
          ))}
        </KeywordGroup>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0;
`;

const SearchInput = styled.div`
  margin-top: 56px;
  margin-bottom: 20px;
  height: 80px;
`;

const KeywordGroup = styled.fieldset`
  height: 324px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const KeywordField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 68px;

  h2 {
  }
`;

export default SearchPlant;
