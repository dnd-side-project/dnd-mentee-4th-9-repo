import React from 'react';
import styled from 'styled-components';
import {getReactiveSize} from '../lib/calculate';
import SubHead from '../styles/SubHead';
import Section from './Section';

const lineHeights = getReactiveSize(60);

function Nothing() {
  return (
    <Section width="lg" margin={100}>
      <Wrapper>
        <Text>
          아직 마음에 드는&nbsp;
          <br />
          식물이 없으신가요?
        </Text>
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
  line-height: ${lineHeights.lg}px;
  font-weight: ${({theme}) => theme.fontWeights.medium};
  color: ${({theme}) => theme.colors.green};

  br {
    display: none;
  }

  @media ${({theme}) => theme.devices.lg} {
    br {
      display: block;
    }
  }

  @media ${({theme}) => theme.devices.md} {
    line-height: ${lineHeights.md}px;
  }
`;

const Img = styled.img`
  content: url(${({imgPath}) => imgPath});
  @media ${({theme}) => theme.devices.md} {
    width: 15px;
  }
`;

export default Nothing;
