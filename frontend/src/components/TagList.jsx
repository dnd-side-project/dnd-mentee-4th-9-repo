import React from 'react';
import styled, {css} from 'styled-components';
import tagList from '../styles/tagList';
import {sliderTags, NO_DISPLAY_TAG} from '../const/tags';
import {includeArr} from '../lib/handler';

export const [NORMAL, BUTTON] = ['normal', 'button'];
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
type: string ("normal", "button")
*/

function TagList({tagData = [], desk, mobile, isSimple, type}) {
  const tags = isSimple ? tagData.filter((tag) => includeArr(sliderTags, tag.type)) : tagData;

  return (
    <Tags isSimple={isSimple}>
      {tags.map((tag) => {
        if (type === NORMAL) {
          return <NormalTag key={tag.id} name={tag.name} desk={desk} mobile={mobile} isSimple={isSimple} />;
        }
        return <ButtonTag key={tag.id} name={tag.name} desk={desk} mobile={mobile} />;
      })}
    </Tags>
  );
}

TagList.defaultProps = {
  desk: 'xl',
  mobile: 'xs',
  isSimple: false,
  type: NORMAL,
};

function NormalTag({name, mobile, desk, isSimple}) {
  return (
    <>
      {(!isSimple || (isSimple && name !== NO_DISPLAY_TAG)) && (
        <Tag key={name} desk={desk} mobile={mobile}>
          <span>{name}</span>
        </Tag>
      )}
    </>
  );
}

function ButtonTag({name, mobile, desk, onEvent = null}) {
  return (
    <Button>
      <Tag key={name} desk={desk} mobile={mobile}>
        <span>{name}</span>
      </Tag>
    </Button>
  );
}

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

  span {
    font-size: ${({desk}) => fontSizes[desk]}px;
  }

  @media ${({theme}) => theme.devices.md} {
    margin-right: ${({mobile}) => margins[mobile]}px;
    margin-bottom: ${({mobile}) => margins[mobile] + 2}px;
    padding: ${({mobile}) => paddings[mobile]};

    span {
      font-size: ${({mobile}) => fontSizes[mobile]}px;
    }
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
`;

export default React.memo(TagList);
