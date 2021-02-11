import React from 'react';
import styled from 'styled-components';
import Section, {MAIN} from '../Section';
import {getReactiveSize} from '../../lib/calculate';

const title = getReactiveSize(85);
const lineHeights = {
  '48': getReactiveSize(48),
  '36': getReactiveSize(36),
};

const margins = {
  '52': getReactiveSize(52),
  '28': getReactiveSize(28),
};

const imgSize = getReactiveSize(70);
const imgMargin = getReactiveSize(18);

function Main() {
  return (
    <Section type={MAIN} width="md">
      <Wrapper className="flex-column">
        <LogoWrapper>
          <img src={`${process.env.PUBLIC_URL}/images/logo_home.png`} alt="See-at logo" />
          <h1>See-at</h1>
        </LogoWrapper>
        <h2>
          나만의 작은 친구,
          <br />
          반려식물 큐레이션 서비스
        </h2>
        <p>
          오랜 집콕 생활에 답답하고 우울하다면,
          <br />
          감각적인 플랜테리어에 걸음을 멈춘 적 있다면,
          <br />
          See-at 에서 나만을 위한 반려식물을 찾아보세요
        </p>
      </Wrapper>
      <ScrollDown>
        <img src={`${process.env.PUBLIC_URL}/images/arrow.png`} alt="scroll down arrow" />
      </ScrollDown>
    </Section>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  * {
    color: white;
    text-align: center;
  }

  h2 {
    margin-top: ${margins['52'].lg}px;
    line-height: ${lineHeights['48'].lg}px;
    font-size: ${({theme}) => theme.fontSizes['32'].lg}px;
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  p {
    margin-top: ${margins['28'].lg}px;
    line-height: ${lineHeights['36'].lg}px;
    font-size: ${({theme}) => theme.fontSizes['24'].lg}px;
    font-weight: ${({theme}) => theme.fontWeights.regular};
    opacity: 0.8;
  }

  @media ${({theme}) => theme.devices.md} {
    h2 {
      margin-top: ${margins['52'].md}px;
      line-height: ${lineHeights['48'].md}px;
      font-size: ${({theme}) => theme.fontSizes['32'].md}px;
    }

    p {
      margin-top: ${margins['28'].md}px;
      line-height: ${lineHeights['36'].md}px;
      font-size: ${({theme}) => theme.fontSizes['24'].md}px;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    margin-right: ${imgMargin.lg}px;
    width: ${imgSize.lg}px;
  }

  h1 {
    text-align: center;
    font-family: 'Fredoka One', cursive;
    font-size: ${title.lg}px;
    text-align: center;
  }

  @media ${({theme}) => theme.devices.md} {
    img {
      margin-right: ${imgMargin.md}px;
      width: ${imgSize.md}px;
    }
    h1 {
      font-size: ${title.md}px;
    }
  }
`;

const ScrollDown = styled.span`
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;

  @media ${({theme}) => theme.devices.md} {
    bottom: 127px;
    img {
      width: 50%;
    }
  }
`;

export default Main;
