import React from 'react';
import styled from 'styled-components';
import TagList from '../TagList';
import {getReactiveSize} from '../../lib/calculate';

const margins = {
  '20': getReactiveSize(20),
  '30': getReactiveSize(30),
};
const lineHeight = getReactiveSize(40);

function TagCard({tag}) {
  const {type, imagePath, description} = tag.PlantTag;

  return (
    <Wrapper>
      <Title>{type}</Title>
      <ImgWrapper>
        <Img imgPath={`${process.env.PUBLIC_URL}/images/detailTags/shade`} alt={tag.name} />
      </ImgWrapper>
      <TagList tagData={[tag.name]} />
      <p>{description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  margin-bottom: 30px;
  width: 285px;

  li {
    margin-bottom: 0 !important;
  }

  p {
    margin-top: ${margins['20'].lg}px;
    line-height: ${lineHeight.lg}px;
    font-size: ${({theme}) => theme.fontSizes['28'].lg}px;
    color: ${({theme}) => theme.colors.darkGray};
  }

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: 25px;
    width: 150px;

    p {
      margin-top: ${margins['20'].md}px;
      line-height: ${lineHeight.md}px;
      font-size: ${({theme}) => theme.fontSizes['28'].md}px;
    }
  }
`;

const ImgWrapper = styled.div`
  margin-bottom: ${margins['20'].lg}px;
  height: 190px;
  border-radius: ${margins['20'].lg}px;
  background-color: ${({theme}) => theme.colors.bgLightGray};
  display: flex;
  justify-content: center;

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: ${margins['20'].md}px;
    height: 100px;
    border-radius: ${margins['20'].md}px;
    font-size: ${({theme}) => theme.fontSizes['28'].md}px;
  }
`;

const Img = styled.img`
  width: fit-content;
  content: url(${({imgPath}) => `${imgPath}.svg`});

  @media ${({theme}) => theme.devices.md} {
    content: url(${({imgPath}) => `${imgPath}_md.svg`});
  }
`;

const Title = styled.h2`
  margin-bottom: ${margins['20'].lg}px;
  font-size: ${({theme}) => theme.fontSizes['30'].lg}px;
  font-weight: ${({theme}) => theme.fontWeights.medium};
  color: ${({theme}) => theme.colors.green};

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: ${margins['30'].md}px;
    font-size: 16px;
  }
`;

export default React.memo(TagCard);
