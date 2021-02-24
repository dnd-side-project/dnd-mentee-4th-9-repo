import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../styles/Button';
import {getReactiveSize} from '../lib/calculate';
import {testData} from '../const/testData';

let result = {
  몬스테라: 0,
  아레카야자: 0,
  아이비: 0,
  관음죽: 0,
};

function TestQuestion() {
  const [currentId, setCurrentId] = useState(0);
  const history = useHistory();

  const increaseScore = (plantName) => {
    result[plantName]++;

    if (!testData[currentId + 1]) {
      const resultPlant = Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));

      history.push({pathname: `/test/result/${resultPlant}`, state: resultPlant});
      return;
    }
    setCurrentId(currentId + 1);
  };

  return (
    <Wrapper>
      <QuestionWrapper>
        <p>Q{testData[currentId].id}</p>
        <h2>{testData[currentId].question}</h2>
      </QuestionWrapper>
      <ButtonWrapper>
        {testData[currentId].answer.map(({plantName, ment}, index) => (
          <OptionBox key={index} onClick={() => increaseScore(plantName)} color="green" fontWeight="regular">
            {ment}
          </OptionBox>
        ))}
      </ButtonWrapper>

      <NavigatorWrapper optionLength={testData[currentId].answer.length}>
        <Navigation>
          <Progress percent={currentId + 1}>
            <Path src={`${process.env.PUBLIC_URL}/images/logo_home.svg`} alt="navigator icon" />
          </Progress>
        </Navigation>
        <PathId>
          <p>{currentId + 1}/7</p>
        </PathId>
      </NavigatorWrapper>
    </Wrapper>
  );
}

const marginBottom = getReactiveSize(10);
const width = getReactiveSize(640);

const Wrapper = styled.div`
  width: 100%;
  height: calc(100%-56px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  text-align: center;
  margin-bottom: 89px;
  p {
    font-family: 'Fredoka One', cursive;
    color: ${({theme}) => theme.colors.white};
    margin-bottom: ${marginBottom.lg}px;
    font-size: ${({theme}) => theme.fontSizes['24'].lg}px;
    font-weight: ${({theme}) => theme.fontWeights.regular};
    letter-spacing: 0;
  }

  h2 {
    font-family: 'Iropke Batang', Batang, Serif;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes['32'].lg}px;
    font-weight: ${({theme}) => theme.fontWeights.medium};
    line-height: 54px;
  }

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: 41px;
    p {
      margin-bottom: ${marginBottom.md}px;
      font-size: ${({theme}) => theme.fontSizes['24'].md}px;
    }
    h2 {
      font-size: ${({theme}) => theme.fontSizes['32'].md}px;
      line-height: 30px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${Button} + ${Button} {
    margin-top: 24px;
    @media ${({theme}) => theme.devices.md} {
      margin-top: 10px;
    }
  }
`;

const OptionBox = styled(Button)`
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({theme}) => theme.colors.white};
  border: none;
  height: 128px;
  padding: 30px;

  &:focus {
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.green};
    box-shadow: 0px 25px 35px 0px rgba(0, 0, 0, 0.04);
  }

  @media ${({theme}) => theme.devices.md} {
    height: 76px;
    padding: 15px;
  }
`;

const NavigatorWrapper = styled.section`
  height: 89px;
  width: min(${width.lg}px, 100%);
  margin-top: ${({optionLength}) => (optionLength === 3 ? 45 : 121)}px;

  @media ${({theme}) => theme.devices.md} {
    margin-top: ${({optionLength}) => (optionLength === 3 ? 33 : 74)}px;
    height: 48px;
    width: min(320px, 100%);
  }
`;

const Navigation = styled.div`
  height: ${() => getReactiveSize(12).lg}px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  margin-top: 42px;

  @media ${({theme}) => theme.devices.md} {
    height: ${() => getReactiveSize(12).md}px;
    margin-top: 21px;
  }
`;

const Path = styled.img`
  position: absolute;
  width: ${() => getReactiveSize(30).lg}px;
  height: ${() => getReactiveSize(30).lg}px;
  top: -${() => getReactiveSize(42).lg}px;
  right: -${() => getReactiveSize(30).lg}px;

  @media ${({theme}) => theme.devices.md} {
    width: ${() => getReactiveSize(30).md}px;
    height: ${() => getReactiveSize(30).md}px;
    top: -${() => getReactiveSize(42).md}px;
    right: -${() => getReactiveSize(30).md}px;
  }
`;

const PathId = styled.div`
  width: min(${width.lg}px, 100%);
  position: absolute;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 12px;

  p {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Fredoka One', cursive;
    font-size: 21px;
    line-height: 24px;
  }

  @media ${({theme}) => theme.devices.md} {
    width: min(320px, 100%);
    font-size: 12px;
    line-height: 15px;
    margin-top: 6px;
  }
`;

const Progress = styled.span`
  position: absolute;
  width: ${({percent}) => (width.lg * percent) / 7}px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 20px;
  height: ${() => getReactiveSize(12).lg}px;
  transition: all 0.5s ease-in-out;

  @media ${({theme}) => theme.devices.md} {
    height: ${() => getReactiveSize(12).md}px;
    width: ${({percent}) => ((width.md - 40) * percent) / 7}px;
  }
`;

export default TestQuestion;
