import React from 'react';
import styled from 'styled-components';
import Meta from '../components/Meta';
import Section, {FULL_SCREEN} from '../components/Section';
import SubHead from '../styles/SubHead';

function Error() {
  return (
    <>
      <Meta title="에러 페이지 | See-at" />
      <Section type={FULL_SCREEN}>
        <Wrapper>
          <SubHead color="green">앗! 잘못된 페이지예요 😥</SubHead>
          <ErrorText>404 ERROR</ErrorText>
        </Wrapper>
      </Section>
    </>
  );
}

const Wrapper = styled.div`
  text-align: center;

  h2 {
    font-size: 36px;
    @media ${({theme}) => theme.devices.md} {
      font-size: 20px;
    }
  }
`;

const ErrorText = styled.h1`
  margin-top: 10px;
  font-size: 60px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.lightGray};

  @media ${({theme}) => theme.devices.md} {
    font-size: 35px;
  }
`;

export default Error;
