import React from 'react';
import styled from 'styled-components';
import TagList from '../TagList';
import {getReactiveSize} from '../../lib/calculate';

const margins = {
  '14': getReactiveSize(14),
  '20': getReactiveSize(20),
  '24': getReactiveSize(24),
};

/*
tag
{
  id: number,
    name: string,
    PlantTag: {
      imagePath: string,
      description: string,
    },
}
*/
function TagCard({tag}) {
  const {description, imagePath} = tag.PlantTag;

  return (
    <Wrapper>
      <ImgWrapper>
        <Img imgPath={imagePath} lt={tag.name} />
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
    margin-top: ${margins['14'].lg}px;
    line-height: 36px;
    font-size: ${({theme}) => theme.fontSizes['24'].lg}px;
    color: ${({theme}) => theme.colors.darkGray};
  }

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: 20px;
    width: 150px;

    p {
      margin-top: ${margins['14'].md}px;
      line-height: 20px;
      font-size: ${({theme}) => theme.fontSizes['28'].md}px;
    }
  }
`;

const ImgWrapper = styled.div`
  margin-bottom: ${margins['24'].lg}px;
  height: 190px;
  border-radius: ${margins['20'].lg}px;
  background-color: ${({theme}) => theme.colors.bgLightGray};
  display: flex;
  justify-content: center;

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: ${margins['24'].md}px;
    height: 100px;
    border-radius: ${margins['20'].md}px;
    font-size: ${({theme}) => theme.fontSizes['28'].md}px;
  }
`;

const Img = styled.img`
  width: fit-content;
  content: url(${({imgPath}) => imgPath});

  @media ${({theme}) => theme.devices.md} {
    width: 150px;
  }
`;

export default React.memo(TagCard);
