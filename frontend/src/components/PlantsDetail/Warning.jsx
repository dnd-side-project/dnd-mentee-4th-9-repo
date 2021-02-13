import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import {TagsHead} from './Feature';
import WarningCard from './WarningCard';

function Warning() {
  return (
    <div>
      <Section width="lg" margin={100} bgColor="bgLightGray">
        <WarningHead>
          <span>몬스테라</span>를 대할 때 주의할 점은?
        </WarningHead>
        <Warnings>
          <WarningCard>추위에 약해 겨울철에는 실내에서 키우는 걸 추천해요!</WarningCard>
          <WarningCard>햇빛 방향에 따라 자라기 때문에 화분을 주기적으로 돌려주는 것이 좋아요.</WarningCard>
          <WarningCard>2~3년에 한번씩 배수가 잘 되는 흙으로 분갈이가 필요해요.</WarningCard>
        </Warnings>
      </Section>
    </div>
  );
}

const WarningHead = styled(TagsHead)`
  margin-bottom: 79px;
`;

const Warnings = styled.ul`
  li {
    margin-bottom: 30px;
  }

  li:last-child {
    margin-bottom: 0px !important;
  }
`;

export default Warning;
