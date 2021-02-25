import React from 'react';
import Meta from '../components/Meta';
import Section from '../components/Section';
import {FULL_SCREEN} from '../components/Section';
import TestQuestion from '../components/TestQuestion';

function Test() {
  return (
    <>
      <Meta title="테스트 | See-at" />
      <Section type={FULL_SCREEN} bgImage="true">
        <TestQuestion />
      </Section>
    </>
  );
}

export default Test;
