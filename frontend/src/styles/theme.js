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
  lg: 1230,
  md: 640,
  padding: 20,
};

const size = {
  sm: getScreenSize(width.sm, width.padding),
  md: getScreenSize(width.md, width.padding),
  lg: getScreenSize(width.lg, width.padding),
};

const devices = {
  sm: `(max-width: ${size.sm}px)`,
  md: `(max-width: ${size.md}px)`,
};

const theme = {
  colors,
  fontWeights,
  width,
  size,
  devices,
};

export default theme;
