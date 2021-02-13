import React from 'react';
import Section, {SECTION} from '../components/Section';
import TestMain from '../components/TestMain';
import Footer from '../components/Footer/Footer';
import Feature from '../components/PlantsDetail/Feature';
import Warning from '../components/PlantsDetail/Warning';

function PlantsDetail() {
  return (
    <>
      <Feature />
      <Warning />
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>
      <Footer />
    </>
  );
}

export default PlantsDetail;
