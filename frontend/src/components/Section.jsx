import React from 'react';
import styled, {css} from 'styled-components';

export const [FULL_SCREEN, SECTION] = ['full', 'section'];

/*
type: string ("full", "section")
margin: number
width: string ("lg", "md", "sm")
bgColor: string
*/
function Section({type, margin, width, bgColor, children}) {
  return (
    <Container type={type} bgColor={bgColor}>
      <Wrapper type={type} margin={margin} width={width}>
        {children}
      </Wrapper>
    </Container>
  );
}

Section.defaultProps = {
  type: SECTION,
  margin: 200,
  width: 'md',
  bgColor: 'white',
};

export const Container = styled.section`
  width: 100%;
  height: ${({type}) => (type === FULL_SCREEN ? '100vh' : 'initial')};
  padding: 0 ${({theme}) => theme.width.padding}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme, bgColor}) => theme.colors[bgColor]};
`;

const Wrapper = styled.div`
  width: min(${({theme, width}) => theme.width[width]}px, 100%);

  ${({type, margin}) => {
    if (type === SECTION) {
      return css`
        margin: ${margin}px 0;
        @media ${({theme}) => theme.devices.md} {
          margin: ${margin / 2}px 0;
        }
      `;
    }
  }}
`;

export default Section;
