import React from 'react';
import styled from 'styled-components';
import {getReactiveSize} from '../../lib/calculate';
import Button from '../../styles/Button';
import SubHead from '../../styles/SubHead';
import Section from '../Section';
import TagList from '../TagList';

const margins = {
  '14': getReactiveSize(14),
  '22': getReactiveSize(22),
  '48': getReactiveSize(48),
};

const tagListData = ['⭐️', '💧💧💧', '#보통크기', '#열매', '#그늘에서', '#쑥쑥자라요', '#따뜻하게'];

function KeywordSearch() {
  return (
    <Section width="lg" margin={200}>
      <Wrapper>
        <p>어떤 식물이 좋을지 잘 모르겠다면?</p>
        <SubHead>마음에 드는 키워드를 검색해보세요!</SubHead>
        <TagsWrapper>
          <TagList tagData={tagListData} />
        </TagsWrapper>
        <SearchBtn borderColor="lightGreen" borderRadius={5} color="lightGreen" iconSize={36}>
          <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="search" />
          다른 키워드로 검색
        </SearchBtn>
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: ${margins['22'].lg}px;
    color: ${({theme}) => theme.colors.darkGray};
    font-size: ${({theme}) => theme.fontSizes['32'].lg}px;
  }
`;

const TagsWrapper = styled.div`
  margin-top: ${margins['48'].lg}px;
  margin-bottom: 80px; // md 23px
`;

const SearchBtn = styled(Button)`
  margin: 0 auto;
`;

export default KeywordSearch;
