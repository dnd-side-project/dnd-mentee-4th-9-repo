import React from 'react';
import styled from 'styled-components';
import {getVW} from '../lib/calculate';

function ScrollTop() {
  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={onScrollTop}>
      <img src={`${process.env.PUBLIC_URL}/images/scroll_top.svg`} alt="scroll top" />
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: ${({theme}) => theme.zIndex.top};

  padding: 0;
  background: none;
  border: none;

  @media ${({theme}) => theme.devices.lg} {
    bottom: max(20px, ${({theme}) => getVW(100, theme.size.lg)});
    right: max(20px, ${({theme}) => getVW(100, theme.size.lg)});
  }
`;

export default ScrollTop;
