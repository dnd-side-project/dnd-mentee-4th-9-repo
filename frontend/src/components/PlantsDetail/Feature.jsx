import React from 'react';
import styled from 'styled-components';
import {pick} from 'cox-postposition';
import Section, {SIDE} from '../Section';
import SubHead from '../../styles/SubHead';
import FeatureCard from './FeatureCard';
/*
name: string
feature: string ex) "꽃:실내에서는 거의 꽃이 피지 않지만, 만약 핀다면 별 모양의 노란 꽃을 피워요.\n잎:벽을 타고 오르거나 땅을 기는 덩굴 식물이에요."
*/
function Feature({name = '', feature = ''}) {
  const features = feature.split('\n');

  return (
    <Section width="lg" margin={100} bgColor="lightGray" order={SIDE}>
      <div>
        <TagsHead>
          <span>{name}</span>{pick(name, '는')} 이런 반전 매력도 있어요
        </TagsHead>
        <Features>
          {features.map((feature, i) => (
            <FeatureCard key={`feature-${i}th`} feature={feature} />
          ))}
        </Features>
      </div>
    </Section>
  );
}

export const TagsHead = styled(SubHead)`
  margin-bottom: 44px;
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
      margin-bottom: 18px;
    }
  }
`;

export default Feature;
