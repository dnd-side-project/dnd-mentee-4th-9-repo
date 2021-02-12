import React from 'react';
import SubHead from '../../styles/SubHead';
import Section from '../Section';
import styled from 'styled-components';
import RecommendPlant from '../RecommentPlant';

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
];

function PopularPlants() {
  return (
    <Section width="lg" margin={200}>
      <Wrapper>
        <SubHead>요즘 뜨는 친구들</SubHead>
        <Plants>
          {popularPlants.map((plant, i) => (
            <li key={i}>
              <RecommendPlant plant={plant} />
            </li>
          ))}
        </Plants>
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div`
  li {
    margin-bottom: 0 !important;
  }
`;

const Plants = styled.ul`
  margin-top: 100px;
  display: flex;

  @media ${({theme}) => theme.devices.md} {
    margin-top: 22px;
  }
`;

export default PopularPlants;
