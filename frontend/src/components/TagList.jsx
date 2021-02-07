import React from 'react';
import styled from "styled-components";


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
  margin: 0 16px;
`

const Tag = styled.li`
  border-radius: 50.24px;
  border: 1px solid rgba(0, 0, 0, 0.15);;
  height: 33.09796905517578px;
  display: inline-block;
  padding: 6px 14px;
  margin: 5px 4px;
`

const Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
`

export default TagList;
