import React from 'react';
import styled from "styled-components";
import {getVW} from "../lib/calculate";


/*
tagData: string[]
*/
function TagList({tagData}) {
  return (
    <Wrapper>
      {tagData.map((data) => <Tag><Text>{data}</Text></Tag>)}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  margin: 0 24px;
  
  @media ${({theme}) => theme.devices.md} {
    margin: 0 max(16px, ${getVW(24)});
  }
`

const Tag = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.15);;
  display: inline-block;
  background: ${({theme}) => theme.colors.white};
  border-radius: 74.2px;
  height: 49.5px;
  margin: 5px 4px 5px 0;
  padding: 9.5px 20px;
  
  @media ${({theme}) => theme.devices.md} {
    border-radius: max(50px, ${getVW(74.2)});
    height: max(33px, ${getVW(49.5)});
    padding: max(6px, ${getVW(9.5)}) max(14px, ${getVW(20)});
  }
`

const Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);
  
  @media ${({theme}) => theme.devices.md} {
    font-size: max(14px, ${getVW(21)});
    line-height: max(20px, ${getVW(30)});
  }
`

export default TagList;
