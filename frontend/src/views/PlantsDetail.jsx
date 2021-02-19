import React, {useState, useEffect, useCallback} from 'react';

import Section, {SECTION} from '../components/Section';
import PlantMain from '../components/PlantsDetail/PlantMain';
import AllKeywords from '../components/PlantsDetail/AllKeywords';
import TagsDetail from '../components/PlantsDetail/TagsDetail';
import Feature from '../components/PlantsDetail/Feature';
import Warning from '../components/PlantsDetail/Warning';
import Nothing from '../components/Nothing';
import TestMain from '../components/TestMain';
import Footer from '../components/Footer/Footer';

import DescText from '../styles/DescText';
import Friends from '../components/PlantsDetail/Friends';

import {getPlantDetail} from '../api/plantsAPI';
import {isEmptyArr} from '../lib/handler';

function PlantsDetail({
  match: {
    params: {id},
  },
}) {
  const plant = usePlantInfo(id);
  const {name, feature, ment = '', warning, description, imagePath, Tags, allTags, recommendPlants} = plant;

  const star = !isEmptyArr(allTags) && allTags[0];

  window.scrollTo({
    top: 0,
  });

  return (
    <>
      <PlantMain name={name} description={description} imgPath={imagePath} star={star} />

      <Section width="lg">
        <DescText>{ment}</DescText>
      </Section>
      <AllKeywords plantId={id} name={name} keywords={allTags} />
      <TagsDetail name={name} tags={Tags} />
      <Feature name={name} feature={feature} />
      <Warning name={name} warning={warning} />
      {!isEmptyArr(recommendPlants) && <Friends name={name} plants={recommendPlants} />}
      <Nothing />
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>

      <Footer />
    </>
  );
}

function usePlantInfo(id) {
  const [plant, setPlant] = useState({});

  const getPlantInfo = useCallback(async () => {
    const plantInfo = await getPlantDetail(id);
    setPlant(plantInfo);
  }, [id]);

  useEffect(() => {
    getPlantInfo();
  }, [getPlantInfo]);

  return plant;
}

export default PlantsDetail;
