import React, {useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import styled from 'styled-components';

import Section, {SECTION} from '../components/Section';
import SearchResultPlant from '../components/SearchPlants/SearchResultPlant';
import Nothing from '../components/Nothing';
import TestMain from '../components/TestMain';
import Footer from '../components/Footer/Footer';

const SearchResult = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [keywordInfo, setKeywordInfo] = useState({keyword: params.get('keyword'), pressEnter: location.state.pressEnter});

  const inputKeyword = ({target: {value}}) => setKeywordInfo({...keywordInfo, keyword: value});
  const searchKeyword = async ({key}) => {
    if (key === 'Enter') {
      setKeywordInfo({...keywordInfo, pressEnter: key === 'Enter'});
      history.push({pathname: '/search', search: `?keyword=${keywordInfo.keyword}`, state: {pressEnter: keywordInfo.pressEnter}});
    }
  };

  return (
    <Wrapper>
      <Section width="lg" bgColor="lightGreen">
        <SearchInput>
          <img src={`${process.env.PUBLIC_URL}/images/search-black.svg`} alt="search-plant" />
          <input type="text" placeholder="어떤 식물 친구를 찾으시나요?" value={keywordInfo.keyword} onChange={inputKeyword} onKeyDown={searchKeyword} />
        </SearchInput>
      </Section>

      <SearchResultPlant keyword={keywordInfo.keyword} pressEnter={keywordInfo.pressEnter} />

      <Nothing />
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0;
`;

const SearchInput = styled.div`
  position: relative;
  margin-top: 56px;
  margin-bottom: 20px;
  height: 80px;
  img {
    position: absolute;
    top: 28px;
    left: 38px;
  }
  input {
    border-radius: 20px;
    border: none;
    height: 80px;
    width: 100%;
    padding: 22px 38px 22px 76px;
    color: ${({theme}) => theme.colors.gray};
    font-family: 'Iropke Batang', Batang, Serif;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.05em;
    :focus {
      outline: none;
    }
  }

  @media ${({theme}) => theme.devices.md} {
    height: 40px;

    img {
      transform: scale(0.54);
      top: 9px;
      left: 12px;
    }
    input {
      border-radius: 5px;
      height: 40px;
      width: 100%;
      padding: 11px 19px 11px 36px;
      font-size: 14px;
      line-height: 18.2px;
    }
  }
`;

export default SearchResult;
