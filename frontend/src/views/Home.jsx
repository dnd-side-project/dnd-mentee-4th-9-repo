import React from 'react';
import Section, {SECTION} from '../components/Section';
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
      <PopularPlants />
      <KeywordSearch />
      <Footer />
    </>
  );
}
export default Home;
