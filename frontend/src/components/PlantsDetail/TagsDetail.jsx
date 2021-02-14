import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import {TagsHead} from './Feature';
import TagCard from './TagCard';

import theme from '../../styles/theme';

const testData = [
  {
    id: 9,
    name: '#그늘에서',
    PlantTag: {
      type: '장소',
      imagePath: '',
      description: '실내 또는 실외의 그늘진 장소',
    },
  },
  {
    id: 8,
    name: '#그늘에서',
    PlantTag: {
      type: '장소',
      imagePath: '',
      description: '실내 또는 실외의 그늘진 장소',
    },
  },
  {
    id: 7,
    name: '#그늘에서',
    PlantTag: {
      type: '장소',
      imagePath: '',
      description: '실내 또는 실외의 그늘진 장소',
    },
  },
  {
    id: 6,
    name: '#그늘에서',
    PlantTag: {
      type: '장소',
      imagePath: '',
      description: '실내 또는 실외의 그늘진 장소',
    },
  },
];

function TagsDetail() {
  const matches = useMediaQuery(theme.devices.md);

  return (
    <Section width="lg" margin={100}>
      <div>
        <TagsHead>
          <span>몬스테라</span>는 어떤 친구인가요?
        </TagsHead>
        <Grid container spacing={matches ? 2 : 3}>
          {testData.map((tag) => (
            <Grid item key={tag.id}>
              <TagCard tag={tag} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Section>
  );
}

export default TagsDetail;
