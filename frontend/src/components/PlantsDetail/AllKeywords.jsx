import React from 'react';
import styled from 'styled-components';

import Section, {SIDE} from '../Section';
import SubHead from '../../styles/SubHead';
import TagList from '../TagList';
import Button from '../../styles/Button';

function AllKeywords({name, keywords}) {
  const tagData = keywords.map((tag) => tag.name);

  return (
    <Section width="lg" margin={100} order={SIDE}>
      <KeywordsHead>{`${name} #키워드`}</KeywordsHead>
      <TagsWrapper>
        <TagList tagData={tagData} />
      </TagsWrapper>
      <Button iconSize={36} borderColor="lightGreen" color="lightGreen">
        <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="search" />
        다른 키워드 검색
      </Button>
    </Section>
  );
}

const KeywordsHead = styled(SubHead)`
  color: ${({theme}) => theme.colors.darkgGray};
`;

const TagsWrapper = styled.div`
  margin: 50px 0 32px 0;
  @media ${({theme}) => theme.devices.md} {
    margin: 15px 0 5px 0;
  }
`;

export default AllKeywords;
