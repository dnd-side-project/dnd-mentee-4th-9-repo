import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import Corp from './Corp';

function Footer() {
  return (
    <Wrapper>
      <Items>
        <Contact />
        <Corp />
      </Items>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  height: 304px;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;
`;

const Items = styled.ul`
  width: min(${({theme}) => theme.width.content}px, 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Footer;
