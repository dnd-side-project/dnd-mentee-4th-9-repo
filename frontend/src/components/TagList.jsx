import React from 'react';
import styled, {css} from 'styled-components';

import tagList from '../styles/tagList';
import {sliderTags, NO_DISPLAY_TAG} from '../const/tags';
import {includeArr} from '../lib/handler';

export const [NORMAL, BUTTON] = ['normal', 'button'];
export const [FILTER, SEARCH] = ['filter', 'search'];

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

function TagList({tagData, desk, mobile, isSimple, selected, event, plantId}) {
  const tags = isSimple ? tagData.filter((tag) => includeArr(sliderTags, tag.type)) : tagData;

  const onClick = (name) => {
    if (!event) return;

    const {type, func} = event;
    if (type === SEARCH) func(name);
  };

  const notDisplay = (name) => {
    if (!event) {
      if (isSimple && name === NO_DISPLAY_TAG) return true;
    }
    return false;
  };

  return (
    <Tags isSimple={isSimple} desk={desk} mobile={mobile}>
      {tags.map((tag) => {
        const {name} = tag;
        if (notDisplay(name)) return true;

        return (
          <Tag key={`${plantId}-${name}`} selected={selected} name={name} onClick={() => onClick(name)}>
            <span>{name}</span>
          </Tag>
        );
      })}
    </Tags>
  );
}

TagList.defaultProps = {
  tagData: [],
  desk: 'xl',
  mobile: 'xs',
  isSimple: false,
  selected: '',
  event: null,
};

const Tag = styled.li`
  cursor: pointer;
  display: inline-block;
  border-radius: 74.2px;

  ${({selected, name, theme: {colors}}) => {
    if (selected === name) {
      return css`
        border: 1px solid ${colors.lightGreen};
        color: white;
        background-color: ${colors.lightGreen};
      `;
    } else {
      return css`
        border: 1px solid rgba(0, 0, 0, 0.15);
        color: ${colors.gray};
        background-color: white;
      `;
    }
  }}
`;

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

  ${Tag} {
    margin-right: ${({desk}) => margins[desk]}px;
    margin-bottom: ${({desk}) => margins[desk] + 2}px;
    padding: ${({desk}) => paddings[desk]};

    @media ${({theme}) => theme.devices.md} {
      margin-right: ${({mobile}) => margins[mobile]}px;
      margin-bottom: ${({mobile}) => margins[mobile] + 2}px;
      padding: ${({mobile}) => paddings[mobile]};
    }
  }

  span {
    font-size: ${({desk}) => fontSizes[desk]}px;
    @media ${({theme}) => theme.devices.md} {
      font-size: ${({mobile}) => fontSizes[mobile]}px;
    }
  }
`;

export default React.memo(TagList);
