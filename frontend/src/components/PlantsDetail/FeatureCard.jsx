import React from 'react';
import styled from 'styled-components';
import featPath from '../../const/featureCard';
import {getReactiveSize} from '../../lib/calculate';
import {isEmptyStr} from '../../lib/handler';

const lineHeights = getReactiveSize(42);
const fontSizes = getReactiveSize(28);

/*
feature: string ex) "잎:벽을 타고 오르거나 땅을 기는 덩굴 식물이에요."
*/
function FeatureCard({feature = ''}) {
  const [type = '', description = ''] = feature.split(':');

  return (
    <FeatWrapper>
      {!isEmptyStr(feature) && <FeatImg deskPath={featPath[type].lg} mobilePath={featPath[type].md} alt={type} />}
      <p>{description}</p>
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
  content: url(${({deskPath}) => deskPath});
  margin-right: 30px;

  @media ${({theme}) => theme.devices.md} {
    content: url(${({mobilePath}) => mobilePath});
    margin-right: 20px;
  }
`;

export default FeatureCard;
