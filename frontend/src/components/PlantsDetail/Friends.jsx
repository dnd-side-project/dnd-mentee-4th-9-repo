import React from 'react';
import plants from '../../const/sliderPlantsTest';
import Section, {SIDE} from '../Section';
import Slider from '../Slider';
import {TagsHead} from './Feature';

function Friends() {
  return (
    <Section margin={100} width="lg" order={SIDE}>
      <TagsHead>
        <span>몬스테라</span>와 비슷한 친구 추천
      </TagsHead>
      <Slider plants={plants} />
    </Section>
  );
}

export default Friends;
