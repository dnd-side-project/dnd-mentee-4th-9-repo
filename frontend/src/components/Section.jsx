import React from 'react';
import styled from 'styled-components';

const FULL_SCREEN = 'full';

function Section({width = 'lg', height = FULL_SCREEN, bgColor = 'white', children}) {
  return (
    <Container height={height} bgColor={bgColor}>
      <Wrapper width={width}>{children}</Wrapper>
    </Container>
  );
}

export const Container = styled.section`
  margin: ${({height}) => (height === FULL_SCREEN ? 0 : '0 200px')};
  width: 100%;
  height: ${({height}) => (height === FULL_SCREEN ? '100vh' : 'initial')};
  padding: 0 ${({theme}) => theme.width.padding}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({bgColor}) => bgColor};
`;

const Wrapper = styled.div`
  width: min(${({theme, width}) => theme.width[width]}px, 100%);
`;

export default Section;
