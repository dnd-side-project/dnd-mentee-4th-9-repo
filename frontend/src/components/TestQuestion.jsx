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
      history.push({pathname: '/test/result/1', state: result});
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
          <Button key={index} onClick={() => increaseScore(plantName)} height={getReactiveSize(150)} color="green">
            {ment}
          </Button>
        ))}
      </ButtonWrapper>

      <Navigation>
        <Progress percent={(currentId + 1) * 10}>
          <Path src={`${process.env.PUBLIC_URL}/images/test_path.svg`} />
          <PathId>{currentId + 1}</PathId>
        </Progress>
      </Navigation>
    </Wrapper>
  );
}

const marginBottom = getReactiveSize(10);

const Wrapper = styled.div`
  width: 100%;
  height: calc(100%-56px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  opacity: 0.8;
  text-align: center;
  margin-bottom: 89px;
  p {
    color: ${({theme}) => theme.colors.green};
    margin-bottom: ${marginBottom.lg}px;
    font-size: ${({theme}) => theme.fontSizes['32'].lg}px;
    font-weight: ${({theme}) => theme.fontWeights.regular};
  }

  h2 {
    color: rgba(0, 0, 0, 0.9);
    font-size: ${({theme}) => theme.fontSizes['40'].lg}px;
    font-weight: ${({theme}) => theme.fontWeights.medium};
  }

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: 41px;
    p {
      margin-bottom: ${marginBottom.md}px;
      font-size: ${({theme}) => theme.fontSizes['32'].md}px;
    }
    h2 {
      font-size: ${({theme}) => theme.fontSizes['40'].md}px;
    }
  }
`;

const ButtonWrapper = styled.div`
  ${Button} + ${Button} {
    margin-top: 20px;
  }
`;

const Navigation = styled.div`
  margin-top: 149px;
  height: ${() => getReactiveSize(20).lg}px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;

  @media ${({theme}) => theme.devices.md} {
    margin-top: 71px;
    height: ${() => getReactiveSize(20).md}px;
  }
`;

const Path = styled.img`
  position: absolute;
  top: -${() => getReactiveSize(60).lg}px;
  right: -${() => getReactiveSize(20).lg}px;

  @media ${({theme}) => theme.devices.md} {
    width: ${() => getReactiveSize(40).md}px;
    height: ${() => getReactiveSize(60).md}px;
    top: -${() => getReactiveSize(60).md}px;
    right: -${() => getReactiveSize(20).md}px;
  }
`;

const PathId = styled.span`
  position: absolute;
  color: ${({theme}) => theme.colors.white};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: ${({theme}) => theme.fontSizes['24'].lg}px;
  top: -${() => getReactiveSize(50).lg}px;
  right: -${() => getReactiveSize(8).lg}px;

  @media ${({theme}) => theme.devices.md} {
    font-size: ${({theme}) => theme.fontSizes['24'].md}px;
    top: -${() => getReactiveSize(50).md}px;
    right: -${() => getReactiveSize(8).md}px;
  }
`;

const Progress = styled.span`
  position: absolute;
  width: ${({percent}) => percent}%;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 20px 0px 0px 20px;
  height: ${() => getReactiveSize(20).lg}px;

  @media ${({theme}) => theme.devices.md} {
    height: ${() => getReactiveSize(20).md}px;
  }
`;

export default TestQuestion;
