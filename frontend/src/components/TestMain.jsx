import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../styles/Button';
import {FULL_SCREEN, SECTION} from './Section';
import {getVW} from '../lib/calculate';

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
    const pathname = type === FULL_SCREEN ? '/test' : 'test-start';
    history.push(pathname);
  };

  return (
    <Wrapper>
      <p>테스트로 알아보는 나의 반려식물 찾기</p>
      <h2>나와 잘 맞는 식물 친구는?</h2>
      <ImgWrapper type={type} mt={mt} min={minWidth}>
        <img src="/images/test_start.png" alt="test start" />
      </ImgWrapper>
      <Button onClick={onClick} borderRadius={5} fontWeight="bold" color={btnTextColor}>
        테스트 GO!
      </Button>
    </Wrapper>
  );
}

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
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: ${({theme}) => theme.fontWeights.regular};
  }
  h2 {
    font-size: 40px;
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  @media ${({theme}) => theme.devices.md} {
    p {
      font-size: max(16px, ${({theme}) => getVW(32, theme.size.md)});
    }
    h2 {
      font-size: max(16px, ${({theme}) => getVW(40, theme.size.md)});
    }
  }

  @media ${({theme}) => theme.devices.sm} {
    p {
      margin-bottom: 10px;
      font-weight: ${({theme}) => theme.fontWeights.regular};
    }
    h2 {
      font-weight: ${({theme}) => theme.fontWeights.medium};
    }
  }
`;

const ImgWrapper = styled.div`
  margin-top: ${({mt}) => mt}px;
  width: ${({type}) => (type === FULL_SCREEN ? 92 : 75)}%;

  img {
    width: 100%;
  }

  @media ${({theme}) => theme.devices.md} {
    margin-top: max(${({mt}) => mt - 40}px, ${({theme, mt}) => getVW(mt, theme.size.md)});
  }

  @media ${({theme}) => theme.devices.sm} {
    ${({min}) => min && `width: ${min}px`};
  }
`;

export default TestMain;
