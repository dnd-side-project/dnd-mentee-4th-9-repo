import styled from 'styled-components';
import {getReactiveSize} from '../lib/calculate';

const lineHeight = getReactiveSize(42);

const DescText = styled.span`
  color: ${({theme}) => theme.colors.darkGray};
  font-weight: ${({theme}) => theme.fontWeights.regular};
  font-size: ${({theme}) => theme.fontSizes['28'].lg}px;
  line-height: ${lineHeight.lg}px;

  @media ${({theme}) => theme.devices.md} {
    font-size: ${({theme}) => theme.fontSizes['28'].md}px;
    line-height: ${lineHeight.md}px;
  }
`;

export default DescText;
