import React from 'react';
import SubHead from '../../styles/SubHead';
import Section from '../Section';
import styled from 'styled-components';

function PopularPlants() {
  return (
    <Section width="lg" margin={200}>
      <Wrapper>
        <SubHead>요즘 뜨는 친구들</SubHead>
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div``;

export default PopularPlants;
