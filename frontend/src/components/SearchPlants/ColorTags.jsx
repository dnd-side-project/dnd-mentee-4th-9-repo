import React from 'react';
import styled from 'styled-components';
import {isEmptyArr} from '../../lib/handler';
import Section from '../Section';
import TagList, {DEL_FILTER} from '../TagList';

function ColorTags({tags}) {
  const colorTags = tags.map((tag) => ({
    name: tag,
  }));

  return (
    <Container length={colorTags.length}>
      {!isEmptyArr(tags) && (
        <Section width="lg">
          <Wrapper>
            <TagList tagData={colorTags} selected={tags} event={{type: DEL_FILTER}} />
          </Wrapper>
        </Section>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  ${({length}) => length > 0 && `border-bottom: 1px solid rgba(0, 0, 0, 0.15)`}
`;

const Wrapper = styled.div`
  padding: 20px 0 0 0;

  li {
    margin-bottom: 20px !important;
    border: none;
    background-color: ${({theme}) => theme.colors.lightGreen};
    color: white;
  }

  li::after {
    content: url(${process.env.PUBLIC_URL}/images/remove.svg);
    padding-left: 14px;
  }

  @media ${({theme}) => theme.devices.md} {
    padding: 10px 0 0 0;

    li {
      margin-bottom: 10px !important;
    }

    li::after {
      content: url(${process.env.PUBLIC_URL}/images/remove_md.svg);
      padding-left: 7px;
    }
  }
`;

export default React.memo(ColorTags);
