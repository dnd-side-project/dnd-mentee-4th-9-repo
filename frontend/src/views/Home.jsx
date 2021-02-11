import React from 'react';
import Section, {SECTION} from '../components/Section';
import Main from '../components/Home/Main';
import TestMain from '../components/TestMain';
import Footer from '../components/Footer/Footer';
import KeywordSearch from '../components/Home/KeywordSearch';

function Home() {
  return (
    <>
      <Main />
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>
      <KeywordSearch />
      <Footer />
    </>
  );
}
export default Home;
