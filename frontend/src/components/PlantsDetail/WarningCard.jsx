import React from 'react';
import styled from 'styled-components';
import {getReactiveSize} from '../../lib/calculate';

const borderRadius = getReactiveSize(20);
const lineHeights = getReactiveSize(44);

function WarningCard({children}) {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: 100%;
  border-radius: ${borderRadius.lg}px;
  background-color: white;

  p {
    padding: 22px 20px;
    text-align: center;
    line-height: ${lineHeights.lg}px;
    font-size: 24px;
    color: ${({theme}) => theme.colors.darkGray};
  }

  @media ${({theme}) => theme.devices.md} {
    border-radius: ${borderRadius.md}px;

    p {
      padding: 16px 20px;
      line-height: ${lineHeights.md}px;
      font-size: 14px;
    }
  }
`;

export default WarningCard;
