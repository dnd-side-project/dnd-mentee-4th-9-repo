import React from 'react';
import styled from 'styled-components';
import TagList from '../TagList';
import {getReactiveSize} from '../../lib/calculate';

const testData = {
  id: 9,
  name: '#그늘에서',
  PlantTag: {
    type: '장소',
    imagePath: '',
    description: '실내 또는 실외의 그늘진 장소',
  },
};

const margins = {
  '20': getReactiveSize(20),
  '30': getReactiveSize(30),
};
const lineHeight = getReactiveSize(40);

function TagCard({tag = testData}) {
  const {type, imagePath, description} = tag.PlantTag;

  return (
    <Wrapper>
      <Title>{type}</Title>
      <ImgWrapper>
        <Img imgPath={`${process.env.PUBLIC_URL}/images/detailTags/shade.svg`} alt={tag.name} />
      </ImgWrapper>
      <TagList tagData={[tag.name]} />
      <p>{description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;

  li {
    margin-bottom: 0 !important;
  }

  p {
    margin-top: ${margins['20'].lg}px;
    line-height: ${lineHeight.lg}px;
    font-size: ${({theme}) => theme.fontSizes['28'].lg}px;
    color: ${({theme}) => theme.colors.darkGray};
  }
`;

const ImgWrapper = styled.div`
  margin-bottom: ${margins['20'].lg}px;
  width: 285px;
  height: 190px;
  border-radius: ${margins['20'].lg}px;
  background-color: ${({theme}) => theme.colors.bgLightGray};
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: fit-content;
  content: url(${({imgPath}) => imgPath});
`;

const Title = styled.h2`
  margin-bottom: ${margins['20'].lg}px;
  font-size: ${({theme}) => theme.fontSizes['30'].lg}px;
  font-weight: ${({theme}) => theme.fontWeights.medium};
  color: ${({theme}) => theme.colors.green};
`;

export default TagCard;
