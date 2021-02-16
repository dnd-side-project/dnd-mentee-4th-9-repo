/* array */
export const isEmptyArr = (arr = []) => {
  return arr.length < 1;
};

export const includeArr = (arr = [], element) => {
  return arr.includes(element);
};

/* string */
const EMPTY = '';
export const isEmptyStr = (string = EMPTY) => {
  return string === EMPTY;
};
