import React from 'react';
import styled from 'styled-components';

import LottiePlayer from '../LottiePlayer';
import SubHead from '../../styles/SubHead';
import PopularPlants from '../Home/PopularPlants';

function NoResult() {
  return (
    <>
      <NothingHead>찾으시는 식물이 없어요</NothingHead>
      <LottieWrapper>
        <LottiePlayer filename="no_result" />
      </LottieWrapper>
      <PopularPlants />
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
    margin-bottom: 10px;
    width: 720px;

    @media ${({theme}) => theme.devices.md} {
      width: 320px;
    }
  }
`;

export default NoResult;
