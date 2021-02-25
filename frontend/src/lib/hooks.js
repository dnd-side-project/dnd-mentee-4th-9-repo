import {useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
export const useKeywordInfo = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [keywordInfo, setKeywordInfo] = useState({keyword: params.get('keyword') || '', pressEnter: location.state?.pressEnter});

  const inputKeyword = ({target: {value}}) => setKeywordInfo({...keywordInfo, keyword: value});
  const searchKeyword = async ({key}) => {
    setKeywordInfo({...keywordInfo, pressEnter: key === 'Enter'});
    if (key === 'Enter') {
      history.push({pathname: '/search', search: `?keyword=${keywordInfo.keyword}`, state: {pressEnter: key === 'Enter'}});
    }
  };

  return [keywordInfo, inputKeyword, searchKeyword];
};
