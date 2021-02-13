import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import {TagsHead} from './Feature';
import TagCard from './TagCard';

function TagsDetail() {
  return (
    <Section width="lg" margin={100}>
      <Wrapper>
        <TagsHead>
          <span>몬스테라</span>는 어떤 친구인가요?
        </TagsHead>
        <TagCard />
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div``;

export default TagsDetail;
