import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import SubHead from '../../styles/SubHead';
import RecommendPlant from '../RecommentPlant';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// test data
const popularPlants = [
  {
    img: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png',
    title: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    tagData: ['💧💧', '#보통크기'],
  },
  {
    img: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png',
    title: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    tagData: ['💧💧', '#보통크기'],
  },
  {
    img: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png',
    title: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    tagData: ['💧💧', '#보통크기'],
  },
  {
    img: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png',
    title: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    tagData: ['💧💧', '#보통크기'],
  },
  {
    img: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png',
    title: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    tagData: ['💧💧', '#보통크기'],
  },
  {
    img: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png',
    title: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    tagData: ['💧💧', '#보통크기'],
  },
  {
    img: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png',
    title: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    tagData: ['💧💧', '#보통크기'],
  },
  {
    img: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png',
    title: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    tagData: ['💧💧', '#보통크기'],
  },
];

const settings = {
  centerMode: false,
  infinite: false,
  slidesToShow: 3,
  slide: 'div',
  speed: 500,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1202,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function PopularPlants() {
  return (
    <Section width="lg" margin={200}>
      <Wrapper>
        <SubHead>요즘 뜨는 친구들</SubHead>
        <Plants>
          <StyledSlider {...settings}>
            {popularPlants.map((plant, i) => (
              <RecommendPlant key={i} plant={plant} />
            ))}
          </StyledSlider>
        </Plants>
      </Wrapper>
    </Section>
  );
}

const StyledSlider = styled(Slider)`
  width: 100% !important;
  cursor: pointer;

  button {
    display: none;
  }

  .slick-slide {
    display: inline-block !important;
    outline: none;
  }

  .slick-track {
    width: max-content !important;
    display: flex;
  }
`;

const Wrapper = styled.div`
  li {
    margin-bottom: 0 !important;
  }
`;

const Plants = styled.ul`
  width: 100%;
  margin-top: 100px;
  display: flex;

  @media ${({theme}) => theme.devices.md} {
    margin-top: 22px;
  }
`;

export default PopularPlants;
