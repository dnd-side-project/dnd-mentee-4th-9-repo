import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Button from '../styles/Button';
import Section from './Section';

function TestMain() {
  return (
    <Section width="md" bgColor={theme.colors.green}>
      <Wrapper>
        <p>테스트로 알아보는 나의 반려식물 찾기</p>
        <h2>나와 잘 맞는 식물 친구는?</h2>
        <MainImg src="/images/test_start.png" alt="test start" />
        <Button borderRadius={5} fontWeight="bold">
          테스트 GO!
        </Button>
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  p,
  h2 {
    text-align: center;
    color: ${({theme}) => theme.colors.white};
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
`;

const MainImg = styled.img`
  margin-top: 93px;
  width: 100%;
`;

export default TestMain;
