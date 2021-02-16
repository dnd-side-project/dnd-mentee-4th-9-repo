import React from 'react';
import Section, {SIDE} from '../Section';
import {TagsHead} from './Feature';
import Slider from '../Slider';

/* plant {
  "id": number;
  "name": string;
  "thumbnailPath": string;
  "description": string;
  "Tags": [
    {
      "id": number;
      "name": string;
      "type": string;
    },
    ...
  ]
}
*/

/*
name: string;
plants: plant[]
*/
function Friends({name = '', plants}) {
  return (
    <Section margin={100} width="lg" order={SIDE}>
      <TagsHead>
        <span>{name}</span>와 비슷한 친구 추천
      </TagsHead>
      <Slider plants={plants} />
    </Section>
  );
}

export default Friends;
