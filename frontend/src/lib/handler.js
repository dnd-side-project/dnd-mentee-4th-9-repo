import qs from 'query-string';

/* object */
export const qsParse = (queryString) => {
  return qs.parse(queryString);
};

/* array */
export const isEmptyArr = (arr = []) => {
  return arr.length < 1;
};

export const includeArr = (arr = [], element) => {
  return arr.includes(element);
};

/* string */
export const EMPTY = '';

export const isEmptyStr = (string = EMPTY) => {
  return string === EMPTY;
};

export const includeStr = (string = '', word) => {
  return string.includes(word);
};

export const isEmoji = (string = '') => {
  return string.includes('💧') || string.includes('⭐');
};

export const getOriginTag = (tag = '') => {
  return isEmoji(tag) ? tag : `#${tag}`;
};

export const getQsTag = (tag = '') => {
  return tag.replace('#', EMPTY);
};

/* object */
export const formatTag = (data) => {
  const types = data.map(({type}) => type);
  const tagByType = (typeValue) => data.filter(({type}) => type === typeValue);

  return data
    .filter(({type}, index) => !types.includes(type, index + 1))
    .map(({type}) => {
      return {
        type,
        tags: [].concat(tagByType(type)),
      };
    });
};
