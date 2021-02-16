export const isEmptyArr = (arr = []) => {
  return arr.length < 1;
};

const EMPTY = '';
export const isEmptyStr = (string = EMPTY) => {
  return string === EMPTY;
};
