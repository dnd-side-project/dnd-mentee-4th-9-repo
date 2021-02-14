import React from 'react';
import Section, {SECTION} from '../components/Section';
import Feature from '../components/PlantsDetail/Feature';
import Warning from '../components/PlantsDetail/Warning';
import Nothing from '../components/Nothing';
import TestMain from '../components/TestMain';
import Footer from '../components/Footer/Footer';
import TagsDetail from '../components/PlantsDetail/TagsDetail';
import PlantMain from '../components/PlantsDetail/PlantMain';
import AllKeywords from '../components/PlantsDetail/AllKeywords';
import DescText from '../styles/DescText';

// test data
function PlantsDetail() {
  const mainData = {
    name: '몬스테라',
    description: '바쁜 일상 속 조용한 힐링',
    imagePath: 'https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1_full.png',
    ment:
      '몬스테라는 크고 특이하게 갈라진 잎이 매력적인 친구이며, 크기도 적당해서 플랜테리어 식물로 유명하답니다. 또한 관리가 쉽고 환경 변화에 크게 예민하지 않아 식물을 키운 경험이 적은 초보 식물 집사에게 인기가 많아요. 예쁘게 자라는 모습도 눈에 잘 들어옵니다. 단, 직사광선보다는 밝은 창가가, 많은 물을 필요로 하지 않는 만큼 과습에 주의해준다면 더욱 잘 자란답니다.',
    star: '⭐⭐',
    allTags: [
      {
        name: '⭐',
      },

      {
        name: '💧💧💧',
      },
      {
        name: '#보통크기',
      },
      {
        name: '#꽃',
      },
      {
        name: '#열매',
      },
      {
        name: '#그늘에서',
      },
      {
        name: '#쑥쑥자라요',
      },
      {
        name: '#적당히포근하게',
      },
    ],
  };

  const {name, ment, description, imagePath, allTags, star} = mainData;

  return (
    <>
      <PlantMain name={name} description={description} imgPath={imagePath} star={star} />
      <Section width="lg">
        <DescText>{ment}</DescText>
      </Section>
      <AllKeywords name={name} keywords={allTags} />
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
