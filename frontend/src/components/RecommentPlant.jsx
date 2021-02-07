import React from 'react';
import styled from "styled-components";
import TagList from "./TagList";
import {getVW} from "../lib/calculate";

/*
plant {
  img: string;
  title: string;
  description: string;
  tagData: string[];
}
*/
function RecommendPlant({plant}) {
  return (
    <Wrapper>
      <Image imgUrl={plant.img} />
      <Title>{plant.title}</Title>
      <Description>{plant.description}</Description>
      <TagList tagData={plant.tagData} key={plant.title} />
    </Wrapper>
  );
}

const borderRadius = `max(30px, ${getVW(45)})`;

const Wrapper = styled.div`
  width: 352.5px;
  height: 517.5px; 
  margin-left: 20px;
  border-radius: 45px 45px 45px 0px; 
  box-shadow: 0px 25px 35px 0px rgba(0, 0, 0, 0.04);

  @media ${({theme}) => theme.devices.md} {
    width: max(235px, ${getVW(352.5)});
    height: max(345px, ${getVW(517.5)});
    border-radius: ${borderRadius} ${borderRadius} ${borderRadius} 0px; 
    box-shadow: 0px 25px 35px 0px rgba(0, 0, 0, 0.04);
  }
  @media ${({theme}) => theme.devices.sm} {
    box-shadow: 0px 14px 25px 0px rgba(0, 0, 0, 0.05);
  }
`;

const Image = styled.img`
  width: 352.5px;
  height: 352.5px;
  content: url(${({imgUrl}) => imgUrl});
  border-radius: 45px 45px 0 0; 

  @media ${({theme}) => theme.devices.md} {
    width: max(235px, ${getVW(352.5)});
    height: max(235px, ${getVW(352.5)});
  }
  @media ${({theme}) => theme.devices.sm} {
    border-radius: 30px 30px 0 0; 
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #2A845D;
  margin: 19.5px 24px 0;
  
  @media ${({theme}) => theme.devices.md} {
    font-size: max(16px, ${getVW(24)});
    line-height: max(23px, ${getVW(35)});
    margin: max(13px, ${getVW(19.5)}) max(16px, ${getVW(24)}) 0;
  }
`;

const Description = styled.span`
  font-size: 21px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
  margin: 2px 24px 7.5px;
  
  @media ${({theme}) => theme.devices.md} {
    font-size: max(14px, ${getVW(21)});
    line-height: max(20px, ${getVW(30)});
    margin: max(0, ${getVW(2)}) max(16px, ${getVW(24)}) max(0, ${getVW(7.5)});
  }
  @media ${({theme}) => theme.devices.sm} {
    margin: 0 16px 0;
  }
`;

export default RecommendPlant;
