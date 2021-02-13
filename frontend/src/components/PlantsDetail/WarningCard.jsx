import React from 'react';
import styled from 'styled-components';
import {getReactiveSize} from '../../lib/calculate';

const lineHeights = getReactiveSize(44);
const fontSizes = getReactiveSize(28);

function WarningCard({children}) {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: 100%;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  border: 1.95938px solid rgba(0, 0, 0, 0.05);

  p {
    padding: 30px 20px;
    text-align: center;
    line-height: ${lineHeights.lg}px;
    font-size: ${fontSizes.lg}px;
    color: ${({theme}) => theme.colors.gray};
  }
`;

export default WarningCard;
