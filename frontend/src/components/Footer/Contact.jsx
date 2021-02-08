import React from 'react';
import styled from 'styled-components';
import Item from './Item';

function Contact() {
  return (
    <>
      <Wrapper>
        <Item title="Contact">
          <p>
            02-999-9999
            <br />
            (11:00am - 18:00pm) / 토, 일, 공휴일 휴무
            <br />
            seeeeeat@gmail.com
          </p>
        </Item>
      </Wrapper>
      <WrapperInfo>
        <Item>
          <p>
            대표이사 : 김구조
            <br />
            서울특별시 강남구 씨앗로 씨앗타워 9F 90
            <br />사업자 등록번호 : 999-999-9999
          </p>
        </Item>
      </WrapperInfo>
    </>
  );
}

const Wrapper = styled.li`
  .item-title {
    font-size: 16px;
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
    line-height: 21px;
  }
`;

const WrapperInfo = styled(Wrapper)`
  @media ${({theme}) => theme.devices.md} {
    .item-title {
      height: 0;
    }
  }
`;

export default Contact;
