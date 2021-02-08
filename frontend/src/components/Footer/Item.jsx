import React from 'react';
import styled from 'styled-components';

function Item({title = '', children}) {
  return (
    <Wrapper>
      <div className="item-title">
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  h3,
  p {
    margin: 0;
    opacity: 0.8;
    color: rgba(0, 0, 0, 0.9);
  }

  h3 {
    font-weight: ${({theme}) => theme.fontWeights.medium};
  }

  .item-title {
    margin-bottom: 16px;
    height: 21px;
  }
`;

export default Item;
