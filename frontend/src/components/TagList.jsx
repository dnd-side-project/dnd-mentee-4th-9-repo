import React from 'react';
import styled from 'styled-components';
import tagList from '../styles/tagList';

const {margins, paddings, fontSizes} = tagList;

/*
tagData: string[]
desk: string (xl, lg, sm, xs, xxs)
mobile: string
*/

function TagList({tagData, desk = 'xl', mobile = 'xs'}) {
  return (
    <ul>
      {tagData.map((data) => (
        <Tag key={data} desk={desk} mobile={mobile}>
          <Text desk={desk} mobile={mobile}>
            {data}
          </Text>
        </Tag>
      ))}
    </ul>
  );
}

const Tag = styled.li`
  margin-right: ${({desk}) => margins[desk]}px;
  margin-bottom: ${({desk}) => margins[desk] + 2}px;
  padding: ${({desk}) => paddings[desk]};

  border-radius: 74.2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: inline-block;

  color: ${({theme}) => theme.colors.gray};
  background: ${({theme}) => theme.colors.white};

  @media ${({theme}) => theme.devices.md} {
    margin-right: ${({mobile}) => margins[mobile]}px;
    margin-bottom: ${({mobile}) => margins[mobile] + 2}px;
    padding: ${({mobile}) => paddings[mobile]};
  }
`;

const Text = styled.span`
  font-size: ${({desk}) => fontSizes[desk]}px;

  @media ${({theme}) => theme.devices.md} {
    font-size: ${({mobile}) => fontSizes[mobile]}px;
  }
`;

export default TagList;
