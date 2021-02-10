import React from 'react';
import styled from 'styled-components';
import FooterItem from '../../styles/FooterItem';

/*
path: string
*/
function Contact({path}) {
  return (
    <>
      <Wrapper path={path} marginRight={100} marginBottom={18}>
        <h3>Contact</h3>
      </Wrapper>
      <Wrapper path={path} marginRight={62} marginBottom={18}>
        <p>
          02-999-9999
          <br />
          (11:00am - 18:00pm) / 토, 일, 공휴일 휴무
          <br />
          seeeeeat@gmail.com
        </p>
      </Wrapper>
      <Wrapper path={path}>
        <p>
          대표이사 : 김구조
          <br />
          서울특별시 강남구 씨앗로 씨앗타워 9F 90
          <br />
          사업자 등록번호 : 999-999-9999
        </p>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(FooterItem)`
  display: ${({path}) => (path.includes('result') ? 'none' : 'block')};

  h3 {
    font-size: 16px;
    font-weight: ${({theme}) => theme.fontWeights.medium};
  }

  p {
    font-size: 14px;
    line-height: 21px;
  }

  @media ${({theme}) => theme.devices.footer} {
    margin-bottom: ${({marginBottom}) => marginBottom}px;
  }
`;

Wrapper.defaultProps = {
  marginBottom: 0,
};

export default Contact;
