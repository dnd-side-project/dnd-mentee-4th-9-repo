import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Contact from './Contact';
import Corp from './Corp';

export const TEST_RESULT = 'result';

/*
location: object
*/
function Footer({location}) {
  const {pathname} = location;
  return (
    <Wrapper>
      <Items path={pathname}>
        <Corp path={pathname} />
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
  width: min(${({theme: {width}, path}) => (path.includes(TEST_RESULT) ? width.md : width.lg)}px, 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${({theme}) => theme.devices.md} {
    margin: ${({path}) => (path.includes(TEST_RESULT) ? 35 : 70)}px 0;
    flex-direction: column;
  }
`;

export default withRouter(Footer);
