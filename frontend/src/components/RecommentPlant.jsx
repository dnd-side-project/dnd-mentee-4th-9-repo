import React from 'react';
import styled from 'styled-components';
import TagList from './TagList';
import sizes from '../styles/recommentPlant';

/*
plant {
  img: string;
  title: string;
  description: string;
  tagData: string[];
}
desk: string (recommentPlant/sizes)
mobile: string (recommentPlant/sizes)
*/
function RecommendPlant({plant, desk = 'md', mobile = 'sm'}) {
  return (
    <Wrapper desk={desk} mobile={mobile}>
      <Image imgUrl={plant.img} />
      <TextWrapper desk={desk} mobile={mobile}>
        <Title desk={desk} mobile={mobile}>
          {plant.title}
        </Title>
        <Description desk={desk} mobile={mobile}>
          {plant.description}
        </Description>
        <TagList tagData={plant.tagData} desk={sizes[desk].tagSize} mobile={sizes[mobile].tagSize} />
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
  margin: ${({desk}) => `0 ${sizes[desk].margin}px ${sizes[desk].margin}px 0`};
  width: ${({desk}) => sizes[desk].width}px;
  height: ${({desk}) => sizes[desk].height}px;

  border-radius: 45px 45px 45px 0px;
  box-shadow: 0px 25px 35px 0px rgba(0, 0, 0, 0.04);

  @media ${({theme}) => theme.devices.md} {
    margin: ${({mobile}) => `0 ${sizes[mobile].margin}px ${sizes[mobile].margin}px 0`};
    width: ${({mobile}) => sizes[mobile].width}px;
    height: ${({mobile}) => sizes[mobile].height}px;

    border-radius: 30px 30px 30px 0px;
    box-shadow: 0px 14px 25px 0px rgba(0, 0, 0, 0.05);
  }
`;

const Image = styled.img`
  width: 100%;
  content: url(${({imgUrl}) => imgUrl});
  border-radius: 45px 45px 0 0;

  @media ${({theme}) => theme.devices.md} {
    border-radius: 30px 30px 0 0;
  }
`;

const TextWrapper = styled.div`
  padding: ${({desk}) => sizes[desk].padding}px;

  @media ${({theme}) => theme.devices.md} {
    padding: ${({mobile}) => sizes[mobile].padding}px;
  }
`;

const Title = styled.h2`
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: ${({desk}) => sizes[desk].titleSize}px;
  line-height: ${({desk}) => sizes[desk].titleLineHeight}px;

  color: ${({theme}) => theme.colors.green};

  @media ${({theme}) => theme.devices.md} {
    font-size: ${({mobile}) => sizes[mobile].titleSize}px;
    line-height: ${({mobile}) => sizes[mobile].titleLineHeight}px;
  }
`;

const Description = styled.p`
  margin-bottom: ${({desk}) => sizes[desk].divSpace}px;

  font-weight: ${({theme}) => theme.fontWeights.regular};
  font-size: ${({desk}) => sizes[desk].descSize}px;
  line-height: ${({desk}) => sizes[desk].textLineHeight}px;

  color: ${({theme}) => theme.colors.gray};

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: ${({mobile}) => sizes[mobile].divSpace}px;
    font-size: ${({mobile}) => sizes[mobile].descSize}px;
    line-height: ${({mobile}) => sizes[mobile].textLineHeight}px;
  }
`;

export default RecommendPlant;
