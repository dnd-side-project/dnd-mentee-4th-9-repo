import React from 'react';
import Section, {SECTION} from '../components/Section';
import TestMain from '../components/TestMain';
import Footer from '../components/Footer/Footer';

function PlantsDetail() {
  return (
    <>
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>
      <Footer />
    </>
  );
}

export default PlantsDetail;
