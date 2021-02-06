import theme from '../styles/theme';

export const getVW = (origin) => {
  const result = (origin / theme.size.md) * 100;
  return `${Math.round(result * 10) / 10}vw`;
};
