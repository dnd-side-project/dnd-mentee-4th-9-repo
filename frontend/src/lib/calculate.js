export const getVW = (element, origin) => {
  const result = (element / origin) * 100;
  return `${Math.round(result * 10) / 10}vw`;
};
