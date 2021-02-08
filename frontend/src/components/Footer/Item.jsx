import React from 'react';
import styled from 'styled-components';

const LOGO = 'See-at';

/*
title: string
*/
function Item({title = '', children}) {
  return (
    <Wrapper>
      <div className="item-title">
        {title === LOGO && (
          <span className="logo">
            <img src="/images/logo_footer.png" alt="See-at logo" />
          </span>
        )}
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
    display: flex;

    .logo {
      margin-right: 6px;
      width: 21px;
    }

    @media ${({theme}) => theme.devices.md} {
      margin-bottom: 18px;
    }
  }
`;

export default Item;
