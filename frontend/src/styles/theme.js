import {getScreenSize, getReactiveSize} from '../lib/calculate';

const colors = {
  white: 'white',
  green: '#2A845D',
  lightGreen: '#8CD29C',
  skyBlue: '#5CACC5',
  darkGray: 'rgba(0, 0, 0, 0.9)',
  gray: 'rgba(0, 0, 0, 0.6)',
  lightGray: '#f2f2f2',
};

const fontSizes = {
  '24': getReactiveSize(24),
  '30': getReactiveSize(30),
  '32': getReactiveSize(32),
  '40': getReactiveSize(40),
};

const fontWeights = {
  bold: 700,
  medium: 500,
  regular: 400,
};

const zIndex = {
  top: 100,
};

const width = {
  sm: 400,
  md: 640,
  lg: 1230,
  footer: 920,
  padding: 20,
};

const size = {
  sm: getScreenSize(width.sm, width.padding),
  md: getScreenSize(width.md, width.padding),
  lg: getScreenSize(width.lg, width.padding),
  footer: getScreenSize(width.footer, width.padding),
};

const devices = {
  sm: `(max-width: ${size.sm}px)`,
  md: `(max-width: ${size.md}px)`,
  lg: `(max-width: ${size.lg}px)`,
  footer: `(max-width: ${size.footer}px)`,
};

const theme = {
  colors,
  fontSizes,
  fontWeights,
  zIndex,
  width,
  size,
  devices,
};

export default theme;
