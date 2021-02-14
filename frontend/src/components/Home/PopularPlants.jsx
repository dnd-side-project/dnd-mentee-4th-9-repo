import React from 'react';
import styled from 'styled-components';
import Section, {SIDE} from '../Section';
import SubHead from '../../styles/SubHead';
import Slider from '../Slider';
import plants from '../../const/sliderPlantsTest';

function PopularPlants() {
  return (
    <Section width="lg" margin={200} order={SIDE}>
      <Wrapper>
        <SubHead>요즘 뜨는 친구들</SubHead>
        <Plants>
          <Slider plants={plants} />
        </Plants>
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div`
  li {
    margin-bottom: 0 !important;
  }
`;

const Plants = styled.ul`
  width: 100%;
  margin-top: 100px;
  display: flex;

  @media ${({theme}) => theme.devices.md} {
    margin-top: 22px;
  }
`;

export default PopularPlants;
