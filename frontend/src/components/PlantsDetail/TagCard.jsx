import React from 'react';
import styled from 'styled-components';
import TagList from '../TagList';
import {getReactiveSize} from '../../lib/calculate';
import path from '../../const/detailTags';

const margins = {
  '20': getReactiveSize(20),
  '30': getReactiveSize(30),
};
const lineHeight = getReactiveSize(40);

/*
tag
{
  id: number,
    name: string,
    PlantTag: {
      type: string,
      imagePath: string,
      description: string,
    },
}
*/
function TagCard({tag}) {
  const {type, description} = tag.PlantTag;
  const imgPath = path[tag.name];

  return (
    <Wrapper>
      <Title>{type}</Title>
      <ImgWrapper>
        <Img deskPath={imgPath.lg} mobilePath={imgPath.md} alt={tag.name} />
      </ImgWrapper>
      <TagList tagData={[tag]} />
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
  content: url(${({deskPath}) => deskPath});

  @media ${({theme}) => theme.devices.md} {
    content: url(${({mobilePath}) => mobilePath});
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
