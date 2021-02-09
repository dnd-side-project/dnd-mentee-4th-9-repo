export const getVW = (element, origin) => {
  const result = (element / origin) * 100;
  return `${Math.round(result * 10) / 10}vw`;
};

export const getScreenSize = (width, padding) => {
  return width - 1 + padding * 2;
};
