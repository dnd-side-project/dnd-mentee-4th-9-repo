import React from 'react';
import {withRouter} from 'react-router-dom';
import styled, {css} from 'styled-components';
import Contact from './Contact';
import Corp from './Corp';

export const TEST_RESULT = 'result';

/*
location: object
*/
function Footer({location}) {
  const {pathname} = location;
  return (
    <Wrapper path={pathname}>
      <Items>
        <Contact path={pathname} />
        <Corp path={pathname} />
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

  ${({path}) => {
    if (path.includes(TEST_RESULT)) {
      return css`
        height: 200px;
        @media ${({theme}) => theme.devices.md} {
          height: 100px;
        }
      `;
    } else {
      return css`
        @media ${({theme}) => theme.devices.md} {
          height: 431px;
        }
      `;
    }
  }}
`;

const Items = styled.ul`
  width: min(${({theme}) => theme.width.content}px, 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${({theme}) => theme.devices.md} {
    flex-direction: column;
  }
`;

export default withRouter(Footer);
