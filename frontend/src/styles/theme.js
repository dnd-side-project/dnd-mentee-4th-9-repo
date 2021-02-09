const colors = {
  white: 'white',
  green: '#2A845D',
  lightGreen: '#8CD29C',
  skyBlue: '#5CACC5',
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
  sm: width.sm - 1 + width.padding * 2,
  md: width.md - 1 + width.padding * 2,
  lg: width.lg - 1 + width.padding * 2,
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
