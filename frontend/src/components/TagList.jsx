import React from 'react';
import {useHistory} from 'react-router-dom';
import styled, {css} from 'styled-components';

import tagList from '../styles/tagList';
import {sliderTags, NO_DISPLAY_TAG} from '../const/tags';
import {EMPTY, getQsTag, includeArr, includeStr} from '../lib/handler';

// tag type
export const [NORMAL, BUTTON] = ['normal', 'button'];
// event type
export const [FILTER, ADD_FILTER, DEL_FILTER, SEARCH, MOVE] = ['filter', 'add_filter', 'del_filter', 'search', 'move'];
const AND = '+';

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
isSimple: bool; (true => 난이도, 물주기 태그만 출력)
selected: string; (버튼 태그 시 선택한 값)
event: {
  type: string; (이벤트 유형)
  func: function; (이벤트 함수)
}
plantId: number; (태그가 plant에 종속될 때 => AllKeywords)
*/

function TagList({tagData, desk, mobile, isSimple, selected = [], event, plantId}) {
  const tags = isSimple ? tagData.filter((tag) => includeArr(sliderTags, tag.type)) : tagData;
  const history = useHistory();

  const onClick = (name) => {
    if (!event) return;

    const {type, func} = event;

    if (type === SEARCH || type === MOVE) {
      const tagName = type === MOVE ? getQsTag(name) : name;
      func(tagName);
    } else if (includeStr(type, FILTER)) {
      const newTag = getQsTag(name);
      let qsTag = EMPTY;
      let resultTags = [...selected];

      // selected tag array
      if (type === ADD_FILTER) {
        if (includeArr(selected, getQsTag(name))) return;
        resultTags.push(newTag);
      } else if (type === DEL_FILTER) {
        resultTags = selected.filter((tag) => tag !== newTag);
      }

      // selected tag query string
      resultTags.forEach((item, i) => {
        qsTag = qsTag.concat(item);
        if (i !== resultTags.length - 1) qsTag = qsTag.concat(AND);
      });

      history.push({
        pathname: `/plants`,
        search: `?tag=${qsTag}`,
      });
    }
  };

  const notDisplay = (name) => {
    if (!event) {
      if (isSimple && name === NO_DISPLAY_TAG) return true;
    }
    return false;
  };

  return (
    <Tags desk={desk} mobile={mobile}>
      {tags.map((tag) => {
        const {name} = tag;
        const eventType = event ? event.type : EMPTY;

        if (notDisplay(name)) return true;

        return (
          <Tag key={`${plantId}-${name}`} name={name} selected={selected} eventType={eventType} onClick={() => onClick(name)}>
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
  selected: EMPTY,
  event: null,
  plantId: -1,
};

const Tag = styled.li`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 74.2px;

  ${({selected, name, eventType, theme: {colors}}) => {
    const comparedName = includeStr(eventType, FILTER) ? getQsTag(name) : name;

    if (includeArr(selected, comparedName)) {
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
    display: flex;
    font-size: ${({desk}) => fontSizes[desk]}px;
    @media ${({theme}) => theme.devices.md} {
      font-size: ${({mobile}) => fontSizes[mobile]}px;
    }
  }
`;

export default React.memo(TagList);
