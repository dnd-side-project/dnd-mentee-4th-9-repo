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
import {isEmptyArr} from '../lib/handleArray';

function PlantsDetail({
  match: {
    params: {id},
  },
}) {
  const plant = usePlantInfo(id);
  const {name, ment = '', description, imagePath, allTags} = plant;

  const star = !isEmptyArr(allTags) && allTags[allTags.length - 1].name;

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
      {/* <Friends /> */}
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
