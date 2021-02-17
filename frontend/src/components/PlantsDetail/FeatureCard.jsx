import React from 'react';
import styled from 'styled-components';
import featPath from '../../const/featureCard';
import {isEmptyStr} from '../../lib/handler';

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
    line-height: 36px;
    font-size: 24px;
    color: ${({theme}) => theme.colors.darkGray};
  }

  @media ${({theme}) => theme.devices.md} {
    p {
      line-height: 21px;
      font-size: 14px;
    }
  }
`;

const FeatImg = styled.img`
  content: url(${({deskPath}) => deskPath});
  margin-right: 20px;

  @media ${({theme}) => theme.devices.md} {
    width: 42px;
  }
`;

export default FeatureCard;
