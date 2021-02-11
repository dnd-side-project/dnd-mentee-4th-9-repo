import styled from 'styled-components';
import {getReactiveSize} from '../lib/calculate';

const width = getReactiveSize(640);
const height = getReactiveSize(100);

/*
borderRadius: number
*/
const Button = styled.button`
  width: min(${width.lg}px, 100%);
  height: ${height.lg}px;
  border-radius: 20px;
  border: 2px solid ${({theme, borderColor}) => theme.colors[borderColor]};
  background-color: ${({theme, bgColor}) => theme.colors[bgColor]};
  font-size: ${({theme: {fontSizes}, fontSize}) => fontSizes[fontSize].lg}px;
  font-weight: ${({theme, fontWeight}) => theme.fontWeights[fontWeight]};
  color: ${({theme, color}) => theme.colors[color]};

  @media ${({theme}) => theme.devices.md} {
    border-radius: ${({borderRadius}) => borderRadius}px;
    border-width: 1px;
    width: ${width.md}px;
    height: ${height.md}px;
    font-size: 16px;
    font-weight: ${({theme}) => theme.fontWeights.medium};
  }
`;

Button.defaultProps = {
  borderRadius: 10, // mobile ver, desktop default 20
  borderColor: 'white',
  bgColor: 'white',
  color: 'green',
  fontSize: '30', // desktop ver, mobile default 16
  fontWeight: 'medium', // desktop ver, mobile default medium
};

export default Button;
