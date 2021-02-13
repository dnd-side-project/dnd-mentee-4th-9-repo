import React from 'react';
import styled from 'styled-components';
import SubHead from '../styles/SubHead';
import Section from './Section';

function Nothing() {
  return (
    <Section width="lg" margin={100}>
      <Wrapper>
        <Text>아직 마음에 드는 식물이 없으신가요?</Text>
        <Img imgPath={`${process.env.PUBLIC_URL}/images/nothing_arrow.svg`} alt="arrow" />
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled(SubHead)`
  font-weight: ${({theme}) => theme.fontWeights.medium};
  color: ${({theme}) => theme.colors.green};
`;

const Img = styled.img`
  content: url(${({imgPath}) => imgPath});
`;

export default Nothing;
