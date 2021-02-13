import React from 'react';
import styled from 'styled-components';
import {getReactiveSize} from '../../lib/calculate';

const lineHeights = getReactiveSize(42);
const fontSizes = getReactiveSize(28);

function FeatureCard({name, children}) {
  return (
    <FeatWrapper>
      <FeatImg imgPath={`${process.env.PUBLIC_URL}/images/${name}.svg`} alt={name} />
      <p>{children}</p>
    </FeatWrapper>
  );
}

const FeatWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  p {
    line-height: ${lineHeights.lg}px;
    font-size: ${fontSizes.lg}px;
    color: ${({theme}) => theme.colors.darkGray};
  }

  @media ${({theme}) => theme.devices.md} {
    p {
      line-height: ${lineHeights.md}px;
      font-size: ${fontSizes.md}px;
    }
  }
`;

const FeatImg = styled.img`
  content: url(${({imgPath}) => imgPath});
  margin-right: 30px;

  @media ${({theme}) => theme.devices.md} {
    margin-right: 20px;
    width: 65px;
  }
`;

export default FeatureCard;
