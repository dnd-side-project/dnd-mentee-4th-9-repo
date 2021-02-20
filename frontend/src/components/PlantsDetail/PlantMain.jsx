import React from 'react';
import styled from 'styled-components';
import TagList from '../TagList';

import {getReactiveSize} from '../../lib/calculate';
import {isEmptyStr} from '../../lib/handler';

const widths = getReactiveSize(640);
const heights = getReactiveSize(200);
const fontSizes = getReactiveSize(48);

/*
name: string
description: string
imgPath: string
star: string ex) "⭐"
*/
function PlantMain({name, description, imgPath, star}) {
  return (
    <Wrapper>
      {!isEmptyStr(imgPath) && <Img imgPath={imgPath} alt="plant main" />}
      <LabelWrapper>
        <Label>
          <Text>
            <h1>{name}</h1>
            <span>{description}</span>
          </Text>
          <TagList tagData={[star]} />
        </Label>
      </LabelWrapper>
    </Wrapper>
  );
}

PlantMain.detailProps = {
  name: '',
  description: '',
  imgPath: '',
  start: '',
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
    padding-top: 15px;
    border-radius: 10px;
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

export default PlantMain;
