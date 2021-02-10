import {getScreenSize} from '../lib/calculate';

const colors = {
  white: 'white',
  green: '#2A845D',
  lightGreen: '#8CD29C',
  skyBlue: '#5CACC5',
  lightGray: '#f2f2f2',
};

const fontWeights = {
  bold: 700,
  medium: 500,
  regular: 400,
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
  fontWeights,
  width,
  size,
  devices,
};

export default theme;
