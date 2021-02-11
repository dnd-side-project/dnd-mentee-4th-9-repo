import React from 'react';
import Section, {SECTION} from '../components/Section';
import Main from '../components/Home/Main';
import TestMain from '../components/TestMain';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Main />
      <Section bgColor="green" margin={200}>
        <TestMain type={SECTION} />
      </Section>
      <Footer />
    </>
  );
}
export default Home;
