import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import Contact from './Contact';
import Corp from './Corp';

/*
location: object
*/
function Footer({location}) {
  const {pathname} = location;
  return (
    <Wrapper>
      <Items path={pathname}>
        <Corp />
        <Contact path={pathname} />
      </Items>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const Items = styled.ul`
  margin: 100px 0;
  width: min(${({theme: {width}, path}) => (path.includes('result') ? width.md : width.lg)}px, 100%);
  display: flex;
  flex-direction: row;

  h3,
  p {
    margin: 0;
    opacity: 0.8;
    color: rgba(0, 0, 0, 0.9);
  }

  @media ${({theme}) => theme.devices.footer} {
    margin: ${({path}) => (path.includes('result') ? 35 : 70)}px 0;
    flex-direction: column;
  }
`;

export default withRouter(Footer);
