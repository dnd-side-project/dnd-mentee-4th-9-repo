import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../styles/Button';
import SubHead from '../../styles/SubHead';
import TagList, {MOVE} from '../TagList';

import {mainTags} from '../../const/tags';

function KeywordSearch() {
  const history = useHistory();

  const goSearch = () => history.push('/plants');

  const event = {
    type: MOVE,
    func: (tag) => {
      history.push({
        pathname: '/plants',
        search: `?tag=${tag}`,
      });
    },
  };

  return (
    <Wrapper>
      <p>어떤 식물이 좋을지 잘 모르겠다면?</p>
      <SubHead>마음에 드는 키워드를 검색해보세요!</SubHead>
      <TagsWrapper>
        <TagList tagData={mainTags} event={event} />
      </TagsWrapper>
      <SearchBtn onClick={goSearch} borderColor="lightGreen" borderRadius={5} color="lightGreen" fontWeight="bold" iconSize={36}>
        <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="search" />
        다른 키워드로 검색
      </SearchBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 15px;
    color: ${({theme}) => theme.colors.darkGray};
    font-family: 'Iropke Batang', Batang, Serif;
    font-size: ${({theme}) => theme.fontSizes['32'].lg}px;

    @media ${({theme}) => theme.devices.md} {
      margin-bottom: 4px;
      font-size: ${({theme}) => theme.fontSizes['32'].md}px;
    }
  }
`;

const TagsWrapper = styled.div`
  margin-top: 54px;
  margin-bottom: 80px;

  @media ${({theme}) => theme.devices.md} {
    margin-top: 26px;
    margin-bottom: 23px;
  }
`;

const SearchBtn = styled(Button)`
  margin: 0 auto;
`;

export default KeywordSearch;
