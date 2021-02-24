import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Section, {SECTION, SIDE} from '../components/Section';
import Main from '../components/Home/Main';
import TestMain from '../components/TestMain';
import PopularPlants from '../components/Home/PopularPlants';
import KeywordSearch from '../components/Home/KeywordSearch';
import Footer from '../components/Footer/Footer';

import theme from '../styles/theme';

const COMMON_MG = 100;

function Home() {
  const isMobile = useMediaQuery(theme.devices.md);
  const [testMG, commonMG] = isMobile ? [COMMON_MG, COMMON_MG] : [170, 200];

  return (
    <>
      <Main />
      <Section width="lg" bgColor="green" margin={testMG}>
        <TestMain type={SECTION} />
      </Section>
      <Section width="lg" margin={commonMG} order={SIDE}>
        <PopularPlants />
      </Section>
      <Section width="lg" margin={commonMG}>
        <KeywordSearch />
      </Section>
      <Footer />
    </>
  );
}

export default Home;
