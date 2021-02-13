import React from 'react';
import styled from 'styled-components';
import Section, { SIDE } from '../Section';
import SubHead from '../../styles/SubHead';
import FeatureCard from './FeatureCard';

function Feature() {
  return (
    <Section width="lg" margin={100} bgColor="bgLightGray" order={SIDE}>
      <div>
        <TagsHead>
          <span>몬스테라</span>는 이런 반전 매력도 있어요
        </TagsHead>
        <Features>
          <FeatureCard name="flower">꽃과 열매를 맺을 수 있어 열매의 맛은 바나나와 파인애플의 중간맛이에요.</FeatureCard>
          <FeatureCard name="leaf">큰 녹색의 구멍난 잎을 가지고 있으며 수경재배가 가능한 식물이에요.</FeatureCard>
          {/* <FeatureCard name="func">큰 녹색의 구멍난 잎을 가지고 있으며 수경재배가 가능한 식물이에요.</FeatureCard> */}
        </Features>
      </div>
    </Section>
  );
}

export const TagsHead = styled(SubHead)`
  margin-bottom: 50px;
  font-weight: ${({theme}) => theme.fontWeights.regular} !important;

  span {
    color: ${({theme}) => theme.colors.green};
  }

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: 30px;
  }
`;

const Features = styled.div`
  display: flex;

  div:nth-child(-n + 3) {
    margin-right: 30px;
  }

  @media ${({theme}) => theme.devices.lg} {
    flex-direction: column;

    div {
      margin-right: 0 !important;
    }

    div:nth-child(-n + 3) {
      margin-bottom: 20px;
    }
  }
`;

export default Feature;
