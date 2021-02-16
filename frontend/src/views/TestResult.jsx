import React, {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Section from '../components/Section';
import styled from 'styled-components';
import TagList from '../components/TagList';
import Button from '../styles/Button';
import {getReactiveSize} from '../lib/calculate';
import SubHead from '../styles/SubHead';
import DescText from '../styles/DescText';
import {getCuratingResult} from '../api/plantsAPI';

function TestResult() {
  const location = useLocation();
  const history = useHistory();
  const [plantData, setPlantData] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getResultPlant = async () => {
    const result = location.state;
    if (!result) {
      history.replace('/test');
      return;
    }
    const plant = Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
    const data = await getCuratingResult(plant);

    setPlantData(data);
  };

  useEffect(() => {
    getResultPlant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!plantData) return null;

  return (
    <>
      <Section>
        <Description marginBottom="20">
          <SubHead>{plantData.description}</SubHead>
          <DescText>{plantData.ment}</DescText>
        </Description>
        <Description marginBottom="30">
          <SubHead>#{plantData.name} #키워드</SubHead>
          <TagList tagData={plantData.Tags.map(({name}) => name)} />
          <MoreButton>{plantData.name} 더 알아보기</MoreButton>
        </Description>
      </Section>

      <Section bgColor="lightGray" margin="100" column={true}>
        <ResultButton borderColor="lightGreen" bgColor="lightGreen" color="white" fontSize="32" icon="share">
          결과 공유하기
        </ResultButton>
        <SnsShare>
          <img src={`${process.env.PUBLIC_URL}/images/fb.svg`} alt="facebook share" />
          <img src={`${process.env.PUBLIC_URL}/images/kt.svg`} alt="kakaotalk share" />
          <img src={`${process.env.PUBLIC_URL}/images/url.svg`} alt="url share" />
        </SnsShare>
        <ResultButton borderColor="lightGreen" bgColor="white" color="lightGreen" fontSize="32" icon="save">
          결과 저장하기
        </ResultButton>
      </Section>

      <Section bgImage={true} margin="134" column={true}>
        <Logo src={`${process.env.PUBLIC_URL}/images/logo_nav.svg`} alt="See-at logo" />
        <Title>지금, 더 많은 친구를 만나보세요</Title>
      </Section>

      <Section margin="100" column={true}>
        <ResultButton borderColor="lightGreen" bgColor="white" color="lightGreen" fontSize="32" icon="reset">
          다시 테스트하기
        </ResultButton>
      </Section>

      <Footer />
    </>
  );
}

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 56px;

  ${SubHead} {
    margin-bottom: ${({marginBottom}) => marginBottom}px;

    @media ${({theme}) => theme.devices.md} {
      margin-bottom: ${({marginBottom}) => marginBottom / 2}px;
    }
  }
`;

const MoreButton = styled.button`
  text-align: left;
  background: none;
  border: none;
  color: ${({theme}) => theme.colors.green};
  margin: 30px 0 100px 0;
  font-size: 28px;
  line-height: 40px;
  &:after {
    content: url(${process.env.PUBLIC_URL}/images/right_arrow.svg);
    margin-left: 11px;
  }

  @media ${({theme}) => theme.devices.md} {
    margin: 15px 0 40px 0;
    font-size: 14px;
    line-height: 20px;
    &:after {
      transform: scale(0.5);
      margin-left: 6.5px;
    }
  }
`;

const ResultButton = styled(Button)`
  &:before {
    line-height: 0;
    content: url(${({icon}) => `${process.env.PUBLIC_URL}/images/${icon}.svg`});
    margin-right: 16px;

    @media ${({theme}) => theme.devices.md} {
      margin-right: 8px;
      transform: scale(0.55);
    }
  }
`;

const SnsShare = styled.div`
  width: ${() => getReactiveSize(380).lg}px;
  height: ${() => getReactiveSize(100).lg}px;
  margin: 40px 0 80px 0;
  display: flex;
  justify-content: space-between;

  @media ${({theme}) => theme.devices.md} {
    width: ${() => getReactiveSize(380).md}px;
    height: ${() => getReactiveSize(100).md}px;
    margin: 20px 0 40px 0;

    img {
      width: 50px;
    }
  }
`;

const Logo = styled.img`
  width: 227.59px;
  margin-bottom: 22px;

  @media ${({theme}) => theme.devices.md} {
    width: 143px;
    margin-bottom: 11px;
  }
`;

const Title = styled.h2`
  font-size: 31.0588px;
  line-height: 58px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};

  @media ${({theme}) => theme.devices.md} {
    font-size: 16px;
    line-height: 30px;
  }
`;

export default TestResult;
