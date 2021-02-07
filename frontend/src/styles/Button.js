import styled from 'styled-components';
import {getVW} from '../lib/calculate';

const fontSizes = {
  md: 30,
  lg: 32,
};

const Button = styled.button`
  width: 640px;
  height: 100px;

  border-radius: 20px;
  border: 2px solid ${({theme, borderColor}) => theme.colors[borderColor]};
  background-color: ${({theme, bgColor}) => theme.colors[bgColor]};

  font-size: ${({fontSize}) => fontSizes[fontSize]}px;
  font-weight: ${({theme, fontWeight}) => theme.fontWeights[fontWeight]};
  color: ${({theme, color}) => theme.colors[color]};

  @media ${({theme}) => theme.devices.md} {
    width: max(320px, ${getVW(640)});
    height: max(50px, ${getVW(100)});
    font-size: max(16px, ${({fontSize}) => getVW(fontSizes[fontSize])});
  }

  @media ${({theme}) => theme.devices.sm} {
    border-radius: ${({borderRadius}) => borderRadius}px;
    border-width: 1px;
    font-weight: ${({theme}) => theme.fontWeights.medium};
  }
`;

Button.defaultProps = {
  borderRadius: 10, // mobile ver, desktop default 20
  borderColor: 'white',
  bgColor: 'white',
  color: 'green',
  fontSize: 'md', // desktop ver, mobile default 16
  fontWeight: 'medium', // desktop ver, mobile default medium
};

export default Button;
