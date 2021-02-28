import React from 'react';
import styled from 'styled-components';
import {pick} from 'cox-postposition';

import Section from '../Section';
import WarningCard from './WarningCard';
import {TagsHead} from './Feature';


/* 
name: string
warning: string ex) 갑작스럽게 햇빛에 놓으면 잎이 타들어가므로 서서히 적응시켜주어야 해요!\n1년 주기로 봄, 가을에 배양토로 분갈이를 해주세요."
*/
function Warning({name = '', warning = ''}) {
  const warnings = warning.split('\n');

  return (
    <div>
      <Section width="lg" margin={100} bgColor="lightGray">
        <WarningHead>
          <span>{name}</span>{pick(name, '를')} 대할 때 주의할 점은?
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
  margin-bottom: 44px;

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: 30px;
  }
`;

const Warnings = styled.ul`
  li {
    margin-bottom: 20px;
    @media ${({theme}) => theme.devices.md} {
      margin-bottom: 14px;
    }
  }

  li:last-child {
    margin-bottom: 0px !important;
  }
`;

export default Warning;
