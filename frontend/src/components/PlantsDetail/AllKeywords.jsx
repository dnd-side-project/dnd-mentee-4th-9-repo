import React, {useState} from 'react';
import styled from 'styled-components';
import Section, {SIDE} from '../Section';
import SubHead from '../../styles/SubHead';
import TagList, {BUTTON} from '../TagList';
import Button from '../../styles/Button';
import Slider from '../Slider';
import {isEmptyArr} from '../../lib/handler';
import {getTagPlants} from '../../api/plantsAPI';

/*
tag: {
  id: number;
  name: string;
  type: string;
}
*/

/*
name: string
keywords: tag[]
*/
function AllKeywords({name = '', keywords = []}) {
  const {plants, selected, onKeywordClick} = useKeywordPlants();

  const event = {
    type: 'search',
    func: onKeywordClick,
  };

  return (
    <Section width="lg" margin={80} order={SIDE}>
      <KeywordsHead>{`${name} #키워드`}</KeywordsHead>

      <TagsWrapper>
        <TagList tagData={keywords} type={BUTTON} selected={selected} event={event} />
      </TagsWrapper>

      <SliderWrapper>{!isEmptyArr(plants) && <Slider plants={plants} />}</SliderWrapper>

      <SearchBtn iconSize={36} borderColor="lightGreen" color="lightGreen">
        <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="search" />
        다른 키워드로 검색
      </SearchBtn>
    </Section>
  );
}

function useKeywordPlants() {
  const [plantsInfo, setInfo] = useState({
    plants: [],
    selected: '',
  });

  const {plants, selected} = plantsInfo;

  const onKeywordClick = async (current) => {
    const resPlants = await getTagPlants({tags: current});

    setInfo((prevInfo) => ({
      ...prevInfo,
      plants: resPlants,
      selected: current,
    }));
  };

  return {plants, selected, onKeywordClick};
}

const KeywordsHead = styled(SubHead)`
  color: ${({theme}) => theme.colors.darkgGray};
`;

const TagsWrapper = styled.div`
  margin: 50px 0;
  @media ${({theme}) => theme.devices.md} {
    margin: 15px 0;
  }
`;

const SliderWrapper = styled.div`
  transition: 1s all ease-in-out;
  margin: 50px 0 20px 0;
  opacity: ${({opacity}) => opacity};

  @media ${({theme}) => theme.devices.md} {
    margin: 15px 0 25px 0;
    .card-wrapper {
      margin-bottom: 0 !important;
    }
  }
`;

const SearchBtn = styled(Button)`
  margin: 0 auto;
`;

export default AllKeywords;
