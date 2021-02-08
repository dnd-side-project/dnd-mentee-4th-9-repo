import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import {TEST_RESULT} from './Footer';

/*
path: string
*/
function Corp({path}) {
  return (
    <Wrapper path={path}>
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

  @media ${({theme}) => theme.devices.md} {
    margin-top: ${({path}) => (path.includes(TEST_RESULT) ? 0 : 38)}px;
    .item-title {
      margin-bottom: 6px !important;
    }
  }
`;

export default Corp;
