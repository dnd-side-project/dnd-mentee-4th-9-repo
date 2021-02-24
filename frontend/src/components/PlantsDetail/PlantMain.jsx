import React from 'react';
import styled, {css} from 'styled-components';
import TagList from '../TagList';

import {getReactiveSize} from '../../lib/calculate';
import {isEmptyStr} from '../../lib/handler';

const widths = getReactiveSize(640);
const heights = getReactiveSize(200);
const fontSizes = getReactiveSize(48);

const [RESULT, DETAIL] = ['result', 'detail'];

/*
name: string
type: string (default: detail) detail | result
description: string
testDesc: string
imgPath: string
star: string ex) "⭐"
*/
function PlantMain({name, type = DETAIL, description, testDesc, imgPath, star}) {
  return (
    <Wrapper>
      {!isEmptyStr(imgPath) && <Img imgPath={imgPath} alt="plant main" />}
      <LabelWrapper type={type}>
        <Label type={type}>
          <Text type={type}>
            {type === RESULT && <span>{`${testDesc},`}</span>}
            <h1>{name}</h1>
            {type === DETAIL && <span>{description}</span>}
          </Text>
          {star && <TagList tagData={[star]} />}
        </Label>
      </LabelWrapper>
    </Wrapper>
  );
}

PlantMain.detailProps = {
  name: '',
  type: DETAIL,
  description: '',
  testDesc: '',
  imgPath: '',
  star: null,
};

/* container */
const Wrapper = styled.section`
  position: relative;
  margin-bottom: 205px;
  padding-top: 56px;
  width: 100%;
  height: 720px;
  display: flex;
  z-index: -1;

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: ${({type}) => (type === DETAIL ? 119 : 103)}px;
    height: 100vw;
  }
`;

const Img = styled.header`
  content: '';
  background-image: url(${({imgPath}) => imgPath});
  width: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
`;

/* label */
const LabelWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  width: min(${({theme: {width}, type}) => (type === DETAIL ? width.lg : width.md)}px, 100%);
  height: ${heights.lg}px;
  transform: translate(-50%, 140px);

  @media ${({theme}) => theme.devices.lg} {
    padding: 0 ${({theme: {width}, type}) => type === DETAIL && width.padding}px;
  }

  @media ${({theme}) => theme.devices.md} {
    transform: translate(-50%, 70px);
    width: ${widths.md}px;
    height: ${heights.md}px;
  }
`;

const Label = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  text-align: center;

  background-color: white;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.04);

  ${({type}) => {
    if (type === DETAIL) return;
    return css`
      padding: 50px 0;
      @media ${({theme}) => theme.devices.md} {
        padding: 20px 0;
      }
    `;
  }}

  li {
    border-radius: 100px;
    margin: 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 167px);

    @media ${({theme}) => theme.devices.md} {
      transform: translate(-50%, 80px);
    }
  }

  h1 {
    font-family: 'Iropke Batang', Batang, Serif;
  }

  @media ${({theme}) => theme.devices.md} {
    padding-top: ${({theme: {width}, type}) => (type === DETAIL ? 15 : 20)}px;
    border-radius: 10px;
  }
`;

const Text = styled.div`
  ${({type}) => {
    if (type === RESULT) {
      return css`
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      `;
    }
  }}

  h1 {
    margin-bottom: ${({type}) => type === DETAIL && 10}px;
    font-size: ${fontSizes.lg}px;
    font-family: ${({type, theme: {fontWeights}}) => (type === RESULT ? fontWeights['medium'] : fontWeights['bold'])};
    color: ${({theme}) => theme.colors.green};
  }

  span {
    margin-bottom: ${({type}) => type === RESULT && 10}px;
    color: ${({type, theme: {colors}}) => (type === DETAIL ? colors.gray : colors.green)};
    font-family: ${({type}) => (type === RESULT ? 'Iropke Batang' : 'Noto Sans KR')};
    font-size: ${({theme}) => theme.fontSizes['32'].lg}px;
    line-height: 30px;
  }

  @media ${({theme}) => theme.devices.md} {
    h1 {
      margin-bottom: 0;
      font-size: ${fontSizes.md}px;
    }
    span {
      margin-bottom: 0;
      font-size: ${({theme}) => theme.fontSizes['32'].md}px;
    }
  }
`;

export default PlantMain;
