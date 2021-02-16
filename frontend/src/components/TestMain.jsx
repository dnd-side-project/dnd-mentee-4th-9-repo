import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

import Button from '../styles/Button';
import {FULL_SCREEN, SECTION} from './Section';

import {getReactiveSize} from '../lib/calculate';
import LottieImg from './LottieImg';
import * as testMain from '../lottie/test_main.json';

const styles = {
  // btn text color, ima margin top, img min width(only main page)
  [FULL_SCREEN]: ['green', 93],
  [SECTION]: ['lightGreen', 60, 200],
};

/*
type: string ("full", "section")
*/
function TestMain({type = FULL_SCREEN}) {
  const [btnTextColor, mt, minWidth] = styles[type];
  const history = useHistory();

  const onClick = () => {
    const pathname = type === FULL_SCREEN ? '/test' : '/test-start';
    history.push(pathname);
  };

  return (
    <Wrapper>
      <p>테스트로 알아보는 나의 반려식물 찾기</p>
      <h2>나와 잘 맞는 식물 친구는?</h2>

      <LottieWrapper type={type} mt={mt} min={minWidth}>
        <LottieImg lottieFile={testMain.default} />
      </LottieWrapper>

      <Button onClick={onClick} borderRadius={5} fontWeight="bold" color={btnTextColor}>
        테스트 GO!
      </Button>
    </Wrapper>
  );
}

const marginBottom = getReactiveSize(20);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p,
  h2 {
    color: white;
  }

  p {
    margin-bottom: ${marginBottom.lg}px;
    font-size: ${({theme}) => theme.fontSizes['32'].lg}px;
    font-weight: ${({theme}) => theme.fontWeights.regular};
  }

  h2 {
    font-size: ${({theme}) => theme.fontSizes['40'].lg}px;
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  @media ${({theme}) => theme.devices.md} {
    p {
      margin-bottom: ${marginBottom.md}px;
      font-size: ${({theme}) => theme.fontSizes['32'].md}px;
      font-weight: ${({theme}) => theme.fontWeights.regular};
    }
    h2 {
      font-size: ${({theme}) => theme.fontSizes['40'].md}px;
      font-weight: ${({theme}) => theme.fontWeights.medium};
    }
  }
`;

const LottieWrapper = styled.div`
  margin-top: ${({mt}) => mt}px;
  width: ${({type}) => (type === FULL_SCREEN ? 594 : 482)}px;

  svg {
    width: 100%;
  }

  @media ${({theme}) => theme.devices.md} {
    margin-top: ${({mt}) => mt - 40}px;
    width: ${({min}) => (min ? min : 278)}px;
  }
`;

export default TestMain;
