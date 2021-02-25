import React from 'react';
import Meta from '../components/Meta';
import Section, {FULL_SCREEN} from '../components/Section';
import TestMain from '../components/TestMain';

function TestStart() {
  return (
    <>
      <Meta title="테스트 | See-at" />
      <Section width="lg" type={FULL_SCREEN} bgColor="green">
        <TestMain type={FULL_SCREEN} />
      </Section>
    </>
  );
}

export default TestStart;
