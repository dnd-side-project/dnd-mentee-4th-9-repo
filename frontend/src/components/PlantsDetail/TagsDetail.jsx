import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import {TagsHead} from './Feature';
import TagCard from './TagCard';

import theme from '../../styles/theme';

const NO_DISPLAY_TAG = '#잎도촉촉히';

/*
tag
{
  id: number,
    name: string,
    PlantTag: {
      type: string,
      imagePath: string,
      description: string,
    },
}
*/

/*
name: string
tags: tag[]
*/
function TagsDetail({name = '', tags = []}) {
  const matches = useMediaQuery(theme.devices.md);

  return (
    <Section width="lg" margin={100}>
      <div>
        <TagsHead>
          <span>{name}</span>는 어떤 친구인가요?
        </TagsHead>
        <Grid container spacing={matches ? 2 : 3}>
          {tags.map(
            (tag) =>
              tag.name !== NO_DISPLAY_TAG && (
                <Grid item key={`tag-card-${tag.id}`}>
                  <TagCard tag={tag} />
                </Grid>
              )
          )}
        </Grid>
      </div>
    </Section>
  );
}

export default TagsDetail;
