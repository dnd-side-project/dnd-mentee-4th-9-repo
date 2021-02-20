import React from 'react';
import {useHistory} from 'react-router-dom';
import styled, {css} from 'styled-components';

import tagList from '../styles/tagList';
import {sliderTags, NO_DISPLAY_TAG} from '../const/tags';
import {EMPTY, getOriginTag, getQsTag, includeArr, isEmptyStr} from '../lib/handler';

export const [NORMAL, BUTTON] = ['normal', 'button'];
export const [FILTER, SEARCH, MOVE] = ['filter', 'search', 'move'];
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

    if (type === SEARCH) {
      func(name);
    } else if (type === FILTER) {
      // 현재 클릭한 태그 formatting
      const newTag = includeArr(selected, getQsTag(name)) ? EMPTY : getQsTag(name);

      // queryString 내용 갱신 -> 새로운 태그 추가 or 이미 선택한 태그면 제거
      let qsTag = EMPTY;
      selected.forEach((item, i) => {
        if (getOriginTag(item) !== name) {
          qsTag = qsTag.concat(item);

          const lastIndex = selected.length - 1;
          const nextItem = getQsTag(selected[i + 1]);

          if (i !== lastIndex || (i + 1 === lastIndex && nextItem !== name)) {
            /*
             * concat(+) 조건
             * 1. 마지막 태그가 아닐 경우
             * 2. 다음이 마지막인데 toggle 태그가 아닐 경우
             */
            qsTag = qsTag.concat(AND);
          }
        }
      });

      if (qsTag[qsTag.length - 1] === AND) qsTag = qsTag.slice(0, -1);

      const newQsTag = isEmptyStr(newTag) ? qsTag : isEmptyStr(qsTag) ? newTag : `${qsTag}+${newTag}`;
      history.push({
        pathname: `/plants`,
        search: `?tag=${newQsTag}`,
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
  display: inline-block;
  border-radius: 74.2px;

  ${({selected, name, eventType, theme: {colors}}) => {
    const comparedName = eventType === FILTER ? getQsTag(name) : name;

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
    font-size: ${({desk}) => fontSizes[desk]}px;
    @media ${({theme}) => theme.devices.md} {
      font-size: ${({mobile}) => fontSizes[mobile]}px;
    }
  }
`;

export default React.memo(TagList);
