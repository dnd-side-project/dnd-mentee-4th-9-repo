import React from 'react';
import Section, {FULL_SCREEN} from '../components/Section';
import TestMain from '../components/TestMain';

function TestStart() {
  return (
    <Section width="lg" type={FULL_SCREEN} bgColor="green">
      <TestMain type={FULL_SCREEN} />
    </Section>
  );
}

export default TestStart;
