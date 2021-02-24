import React from 'react';
import styled from 'styled-components';

import Section from '../Section';
import LottiePlayer from '../LottiePlayer';
import SubHead from '../../styles/SubHead';
import PopularPlants from '../Home/PopularPlants';

function NoResult() {
  return (
    <>
      <NothingHead>찾으시는 식물이 없어요</NothingHead>
      <LottieWrapper>
        <LottiePlayer src="https://assets8.lottiefiles.com/packages/lf20_j0kbw3hw.json" />
      </LottieWrapper>
      <Section width="lg">
        <PopularPlants />
      </Section>
    </>
  );
}

const NothingHead = styled(SubHead)`
  text-align: center;
  margin-top: 80px;

  @media ${({theme}) => theme.devices.md} {
    margin-top: 45px;
  }
`;

const LottieWrapper = styled.div`
  display: flex;
  justify-content: center;

  lottie-player {
    width: 720px;
    @media ${({theme}) => theme.devices.md} {
      width: 320px;
    }
  }
`;

export default NoResult;
