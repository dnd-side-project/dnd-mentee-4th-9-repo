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
  lg: 1230,
  md: 640,
  padding: 20,
};

const size = {
  sm: 500,
  md: width.content - 1 + width.padding * 2,
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
