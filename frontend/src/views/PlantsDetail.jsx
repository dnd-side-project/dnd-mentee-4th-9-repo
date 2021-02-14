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
  return (
    <>
      <PlantMain />
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
