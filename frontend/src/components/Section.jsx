import React from 'react';
import styled, {css} from 'styled-components';

export const [FULL_SCREEN, MAIN, SECTION, NAV, MIDDLE, SIDE] = ['full', 'main', 'section', 'nav', 'middle', 'side'];

/*
type: string ("full", "main", "section", "nav")
margin: number
width: string ("lg", "md", "sm")
bgColor: string
*/
function Section({type, margin, width, bgColor, order, children}) {
  return (
    <Container className="container" type={type} bgColor={bgColor}>
      <Wrapper type={type} margin={margin} width={width} order={order}>
        {children}
      </Wrapper>
    </Container>
  );
}

Section.defaultProps = {
  type: SECTION,
  margin: 0,
  width: 'md',
  bgColor: 'white',
  order: MIDDLE,
};

export const Container = styled.section`
  background: ${({type}) => type === MAIN && `url(${process.env.PUBLIC_URL}/images/bg_home.png)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 100%;
  height: ${({type}) => (type !== SECTION && type !== NAV ? '100vh' : 'initial')};
  padding: 0 ${({theme}) => theme.width.padding}px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme, bgColor}) => theme.colors[bgColor] || bgColor};

  ${({type}) => {
    if (type !== NAV) return;
    return css`
      position: absolute;
    `;
  }}
`;

export const Wrapper = styled.div`
  width: min(${({theme, width}) => theme.width[width]}px, 100%);

  ${({type}) => {
    if (type !== NAV) return;
    return css`
      display: flex;
      justify-content: space-between;
      height: 56px;
    `;
  }}

  ${({type, margin, order}) => {
    if (type !== FULL_SCREEN && margin > 0) {
      if (order === MIDDLE) {
        return css`
          margin: ${margin}px 0;
          @media ${({theme}) => theme.devices.md} {
            margin: ${margin / 2}px 0;
          }
        `;
      } else {
        return css`
          margin-top: ${margin}px;
          @media ${({theme}) => theme.devices.md} {
            margin-top: ${margin / 2}px;
          }
        `;
      }
    }
  }}
`;

export default Section;
