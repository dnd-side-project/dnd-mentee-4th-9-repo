import React from 'react';
import styled from 'styled-components';

import Section from '../Section';
import WarningCard from './WarningCard';
import {TagsHead} from './Feature';

import {getReactiveSize} from '../../lib/calculate';

const margins = getReactiveSize(30);

/* 
name: string
warning: string ex) 갑작스럽게 햇빛에 놓으면 잎이 타들어가므로 서서히 적응시켜주어야 해요!\n1년 주기로 봄, 가을에 배양토로 분갈이를 해주세요."
*/
function Warning({name = '', warning = ''}) {
  const warnings = warning.split('\n');

  return (
    <div>
      <Section width="lg" margin={100} bgColor="bgLightGray">
        <WarningHead>
          <span>{name}</span>를 대할 때 주의할 점은?
        </WarningHead>
        <Warnings>
          {warnings.map((warning, i) => (
            <WarningCard key={`warning-${i}th`}>{warning}</WarningCard>
          ))}
        </Warnings>
      </Section>
    </div>
  );
}

const WarningHead = styled(TagsHead)`
  margin-bottom: 79px;

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: ${margins.lg}px;
  }
`;

const Warnings = styled.ul`
  li {
    margin-bottom: ${margins.lg}px;
    @media ${({theme}) => theme.devices.md} {
      margin-bottom: ${margins.md}px;
    }
  }

  li:last-child {
    margin-bottom: 0px !important;
  }
`;

export default Warning;
