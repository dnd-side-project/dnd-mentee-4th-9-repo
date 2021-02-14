import React from 'react';
import Section, {SECTION} from '../components/Section';
import Feature from '../components/PlantsDetail/Feature';
import Warning from '../components/PlantsDetail/Warning';
import Nothing from '../components/Nothing';
import TestMain from '../components/TestMain';
import Footer from '../components/Footer/Footer';
import TagsDetail from '../components/PlantsDetail/TagsDetail';
import PlantMain from '../components/PlantsDetail/PlantMain';

function PlantsDetail() {
  const mainData = {
    name: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    imagePath: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1_full.png',
    star: '⭐',
  };

  const {name, description, imagePath, star} = mainData;

  return (
    <>
      <PlantMain name={name} description={description} imgPath={imagePath} star={star} />
      <TagsDetail />
      <Feature />
      <Warning />
      <Nothing />
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>
      <Footer />
    </>
  );
}

export default PlantsDetail;
