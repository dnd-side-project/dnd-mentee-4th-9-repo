import React from 'react';
import styled from 'styled-components';
import {getReactiveSize, getVW} from '../../lib/calculate';

// test data
const mainData = {
  name: '몬스테라',
  description: '바쁜 일상 속 조용한 힐링',
  imagePath: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1_full.png',
  thumbnailPath: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png',
};

const widths = getReactiveSize(640);
const heights = getReactiveSize(200);
const fontSizes = getReactiveSize(48);

function PlantMain() {
  return (
    <Wrapper>
      <Img imgPath={mainData.imagePath} alt="plant main" />
      <LabelWrapper>
        <Label>
          <Text>
            <h1>몬스테라</h1>
            <span>바쁜 일상 속 조용한 힐링</span>
          </Text>
        </Label>
      </LabelWrapper>
    </Wrapper>
  );
}

/* container */
const Wrapper = styled.section`
  position: relative;
  margin-bottom: 205px;
  padding-top: 56px;
  width: 100%;
  height: 720px;
  display: flex;

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: 119px;
    height: 100vw;
  }
`;

const Img = styled.img`
  content: url(${({imgPath}) => imgPath});
  width: 100%;
  z-index: -1;
  object-fit: cover;
`;

/* label */
const LabelWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  width: min(${({theme}) => theme.width.lg}px, 100%);
  height: ${heights.lg}px;
  transform: translate(-50%, 140px);

  @media ${({theme}) => theme.devices.lg} {
    padding: 0 ${({theme}) => theme.width.padding}px;
  }

  @media ${({theme}) => theme.devices.md} {
    transform: translate(-50%, 70px);
    width: ${widths.md}px;
    height: ${heights.md}px;
  }
`;

const Text = styled.div`
  h1 {
    margin-bottom: 10px;
    font-size: ${fontSizes.lg}px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.green};
  }

  span {
    line-height: 30px;
    font-size: ${({theme}) => theme.fontSizes['32'].lg}px;
    color: ${({theme}) => theme.colors.gray};
  }

  @media ${({theme}) => theme.devices.md} {
    h1 {
      margin-bottom: 0;
      font-size: ${fontSizes.md}px;
    }
    span {
      font-size: ${({theme}) => theme.fontSizes['32'].md}px;
    }
  }
`;

const Label = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  text-align: center;

  background-color: white;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.04);
  border-radius: 20px;

  @media ${({theme}) => theme.devices.md} {
    padding-top: 15px;
    border-radius: 10px;
  }
`;

export default PlantMain;
