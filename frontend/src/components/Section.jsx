import React from 'react';
import styled, {css} from 'styled-components';

export const [FULL_SCREEN, MAIN, SECTION, NAV] = ['full', 'main', 'section', 'nav'];

/*
type: string ("full", "main", "section", "nav")
margin: number
width: string ("lg", "md", "sm")
bgColor: string
column: boolean (true => flex-direction: column)
bgImage: boolean (true => background-image: bg_home.png)
*/
function Section({type, margin, width, bgColor, children, column, bgImage}) {
  bgImage = type === MAIN || bgImage;
  const height = !bgImage && type !== SECTION && type !== NAV ? '100vh' : 'initial';

  return (
    <Container className="container" type={type} bgColor={bgColor} bgImage={bgImage} height={height}>
      <Wrapper type={type} margin={margin} width={width} column={column}>
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
  column: false,
};

export const Container = styled.section`
  background: ${({bgImage}) => bgImage && `url(${process.env.PUBLIC_URL}/images/bg_home.png)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({bgImage}) => bgImage && 'cover'};

  width: 100%;
  height: ${({height}) => height};
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

  ${({column}) => {
    if (!column) return;
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
  }}

  ${({type, margin}) => {
    if (type !== FULL_SCREEN && margin > 0) {
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
