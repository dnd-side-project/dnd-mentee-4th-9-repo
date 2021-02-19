import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Section, {SIDE} from '../Section';
import SubHead from '../../styles/SubHead';
import TagList, {BUTTON} from '../TagList';
import Button from '../../styles/Button';
import Slider from '../Slider';

import {getTagPlants} from '../../api/plantsAPI';
import {isEmptyStr} from '../../lib/handler';

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
function AllKeywords({plantId, name = '', keywords = []}) {
  const {plants, selected, onKeywordClick} = useKeywordPlants(plantId);

  const event = {
    type: 'search',
    func: onKeywordClick,
  };

  return (
    <Section width="lg" margin={80} order={SIDE}>
      <KeywordsHead>{`${name} #키워드`}</KeywordsHead>

      <TagsWrapper>
        <TagList plantId={plantId} tagData={keywords} type={BUTTON} selected={selected} event={event} />
      </TagsWrapper>

      <SliderWrapper>{!isEmptyStr(selected) && <Slider plants={plants} />}</SliderWrapper>

      {isEmptyStr(selected) ? (
        <StyledBtn iconSize={36} borderColor="lightGreen" color="lightGreen">
          <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="search" />
          다른 키워드로 검색
        </StyledBtn>
      ) : (
        <StyledBtn bgColor="lightGreen" borderColor="lightGreen" color="white">
          <span>선택한 키워드 전체보기</span>
        </StyledBtn>
      )}
    </Section>
  );
}

function useKeywordPlants(plantId) {
  const [plantsInfo, setInfo] = useState({
    plants: [],
    selected: '',
  });

  const {plants, selected} = plantsInfo;

  const onKeywordClick = async (current) => {
    const resPlants = await getTagPlants({tags: current});

    setInfo((prevInfo) => ({
      ...prevInfo,
      plants: selected === current ? [] : resPlants,
      selected: selected === current ? '' : current,
    }));
  };

  useEffect(() => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      selected: '',
    }));
  }, [plantId]);

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
  margin: 50px 0 20px 0;

  @media ${({theme}) => theme.devices.md} {
    margin: 15px 0 25px 0;
    .card-wrapper {
      margin-bottom: 0 !important;
    }
  }
`;

const StyledBtn = styled(Button)`
  margin: 0 auto;
`;

export default AllKeywords;
