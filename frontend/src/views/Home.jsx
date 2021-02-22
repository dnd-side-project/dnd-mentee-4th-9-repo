import React from 'react';
import Section, {SECTION, SIDE} from '../components/Section';
import Main from '../components/Home/Main';
import TestMain from '../components/TestMain';
import PopularPlants from '../components/Home/PopularPlants';
import KeywordSearch from '../components/Home/KeywordSearch';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Main />
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>
      <Section width="lg" margin={200} order={SIDE}>
        <PopularPlants />
      </Section>
      <KeywordSearch />
      <Footer />
    </>
  );
}
export default Home;
