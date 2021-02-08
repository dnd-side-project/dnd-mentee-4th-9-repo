import React from 'react';
import styled from 'styled-components';
import Item from './Item';

function Corp() {
  return (
    <Wrapper>
      <Item title="See-at">
        <p>© 2021. SeeAt Corp. all right reserved.</p>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  h3 {
    font-family: 'Fredoka One', cursive;
    font-size: 21px;
    color: ${({theme}) => theme.colors.lightGreen} !important;
  }

  p {
    font-size: 12px;
  }
`;

export default Corp;
