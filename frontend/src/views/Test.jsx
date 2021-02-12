import React from 'react';
import Section from '../components/Section';
import {FULL_SCREEN} from '../components/Section';
import TestQuestion from '../components/TestQuestion';

function Test() {
  return (
    <Section type={FULL_SCREEN} bgColor="lightGreen">
      <TestQuestion />
    </Section>
  );
}

export default Test;
