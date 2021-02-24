import React, {useState, useEffect, useCallback} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import html2canvas from 'html2canvas';
import Footer from '../components/Footer/Footer';
import Section from '../components/Section';
import PlantMain from '../components/PlantsDetail/PlantMain';
import styled from 'styled-components';
import TagList from '../components/TagList';
import Button from '../styles/Button';
import {getReactiveSize} from '../lib/calculate';
import SubHead from '../styles/SubHead';
import DescText from '../styles/DescText';
import LottieImg from '../components/LottieImg';
import * as testLoading from '../lottie/test_loading.json';
import {getCuratingResult} from '../api/plantsAPI';
import {FULL_SCREEN} from '../components/Section';

function TestResult() {
  const location = useLocation();
  const history = useHistory();
  const [plantData, setPlantData] = useState();
  const [loading, setLoading] = useState(true);
  const isShared = window.location.href.includes('?shared=true');

  const sharedUrl = `${window.location.href}${isShared ? '' : '?shared=true'}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${sharedUrl}&src=sdkpreparse`;

  const returnTest = () => history.push('/test');
  const goToDetailPage = (id) => history.push(`/plants/detail/${id}`);
  const shareKakao = () => alert('카카오톡 공유 기능은 추후 제공 예정입니다.');
  const copyUrl = () => alert('결과 주소가 복사되었습니다.\n주소를 공유해 보세요!');
  const saveImage = () => {
    html2canvas(document.body, {allowTaint: true, useCORS: true}).then((canvas) => {
      const a = document.createElement('a');
      const fileName = `나와 가장 잘 맞는 식물 ${plantData.name}.jpg`;
      a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      a.download = fileName.normalize('NFC');
      a.click();
    });
  };

  const getResultPlant = useCallback(async () => {
    const result = isShared ? location.pathname.split('/')[2] : location.state;
    if (!result) {
      history.replace('/test');
      return;
    }

    const data = await getCuratingResult(result);
    setPlantData(data);
    setLoading(false);
  }, [location.pathname, location.state, history, isShared]);

  useEffect(() => {
    getResultPlant();
  }, [getResultPlant]);

  if (loading)
    return (
      <Section type={FULL_SCREEN} width="lg">
        <LottieWrapper>
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_xt4jx9sg.json" background="transparent" speed="2" loop autoplay></lottie-player>
        </LottieWrapper>
      </Section>
    );
  if (!plantData) return null;

  return (
    <>
      <PlantMain name={plantData.name} testDesc={plantData.testDescription} type="result" imgPath={plantData.imagePath} />

      <div className="save-result">
        <Section>
          <Description marginBottom="20">
            <SubHead iropke={true}>{plantData.description}</SubHead>
            <DescText>{plantData.ment}</DescText>
          </Description>
          <Description marginTop="60" marginBottom="30">
            <SubHead iropke={true}>#{plantData.name} #키워드</SubHead>
            <TagList tagData={plantData.Tags} />
            <MoreButton onClick={() => goToDetailPage(plantData.id)}>{plantData.name} 더 알아보기</MoreButton>
          </Description>
        </Section>
      </div>

      <Section bgColor="lightGray" margin="100" marginPercent="2.5" column={true}>
        <ResultHeader iropke={true} color="green">
          결과를 공유해보세요!
        </ResultHeader>
        <SnsShare>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/fb.svg`} alt="facebook share" />
          </a>
          <img onClick={shareKakao} src={`${process.env.PUBLIC_URL}/images/kt.svg`} alt="kakaotalk share" />
          <CopyToClipboard text={sharedUrl} onCopy={copyUrl}>
            <img src={`${process.env.PUBLIC_URL}/images/url.svg`} alt="url share" />
          </CopyToClipboard>
        </SnsShare>
        <ResultButton onClick={saveImage} className="get-image" borderColor="lightGreen" bgColor="white" color="lightGreen" fontSize="32" icon="save">
          결과 저장하기
        </ResultButton>
      </Section>

      <Section bgImage={true} margin="134" column={true}>
        <Logo src={`${process.env.PUBLIC_URL}/images/logo_nav.svg`} alt="See-at logo" />
        <Title>지금, 더 많은 친구를 만나보세요</Title>
      </Section>

      <Section margin="100" column={true}>
        <ResultButton onClick={returnTest} borderColor="lightGreen" bgColor="white" color="lightGreen" fontSize="32" icon="reset">
          다시 테스트하기
        </ResultButton>
      </Section>

      <Footer />
    </>
  );
}

const LottieWrapper = styled.div`
  display: flex;
  justify-content: center;

  lottie-player {
    width: 480px;
    @media ${({theme}) => theme.devices.md} {
      width: min(240px, 100%);
    }
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  ${SubHead} {
    margin-bottom: ${({marginBottom}) => marginBottom}px;
    margin-top: ${({marginTop}) => marginTop}px;

    @media ${({theme}) => theme.devices.md} {
      margin-bottom: ${({marginBottom}) => marginBottom / 2}px;
      margin-top: ${({marginTop}) => marginTop / 2}px;
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
    display: inline-block;
    content: url(${process.env.PUBLIC_URL}/images/right_arrow.svg);
    margin-left: 11px;
    height: 20px;
    width: 10px;
    top: 0;
  }

  @media ${({theme}) => theme.devices.md} {
    margin: 15px 0 40px 0;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    &:after {
      transform: scale(0.5);
      margin-left: 6.5px;
    }
  }
`;

const ResultHeader = styled(SubHead)`
  line-height: 61px;

  @media ${({theme}) => theme.devices.md} {
    line-height: 30px;
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
  img {
    cursor: pointer;
  }

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
  font-family: 'Iropke Batang', Batang, Serif;

  @media ${({theme}) => theme.devices.md} {
    font-size: 16px;
    line-height: 30px;
  }
`;

export default TestResult;
