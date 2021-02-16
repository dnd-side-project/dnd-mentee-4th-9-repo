import React from 'react';
import styled, {css} from 'styled-components';
import tagList from '../styles/tagList';
import {sliderTags, NO_DISPLAY_TAG} from '../const/tags';
import {includeArr} from '../lib/handler';

const {margins, paddings, fontSizes} = tagList;

/*
tag {
   id: number;
   name: string; (required)
   type: string;
}
*/

/*
tagData: tag[];
desk: string (xl, lg, sm, xs, xxs);
mobile: string;
isSimple: bool (true => 난이도, 물주기 태그만 출력)
*/

function TagList({tagData = [], desk, mobile, isSimple}) {
  const tags = isSimple ? tagData.filter((tag) => includeArr(sliderTags, tag.type)) : tagData;

  return (
    <Tags isSimple={isSimple}>
      {tags.map(
        (tag, index) =>
          (!isSimple || (isSimple && tag.name !== NO_DISPLAY_TAG)) && (
            <Tag key={index} desk={desk} mobile={mobile}>
              <Text desk={desk} mobile={mobile}>
                {tag.name}
              </Text>
            </Tag>
          )
      )}
    </Tags>
  );
}

TagList.defaultProps = {
  desk: 'xl',
  mobile: 'xs',
  isSimple: false,
};

const Tags = styled.ul`
  ${({isSimple}) => {
    if (isSimple) {
      return css`
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
      `;
    }
  }}
`;

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
