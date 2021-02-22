import styled, {css} from 'styled-components';

const SubHead = styled.h2`
  font-family: 'Iropke Batang', Batang, Serif;
  font-size: ${({theme}) => theme.fontSizes['40'].lg}px;
  font-weight: ${({theme}) => theme.fontWeights.medium};
  color: ${({theme, color}) => theme.colors[color]};

  span {
    font-family: 'Iropke Batang', Batang, Serif;
  }

  ${({iropke}) => {
    if (!iropke) return;
    return css`
      font-family: 'Iropke Batang', Batang, Serif;
    `;
  }}

  @media ${({theme}) => theme.devices.md} {
    font-size: ${({theme}) => theme.fontSizes['40'].md}px;
  }
`;

SubHead.defaultProps = {
  color: 'darkGray',
};

export default SubHead;
