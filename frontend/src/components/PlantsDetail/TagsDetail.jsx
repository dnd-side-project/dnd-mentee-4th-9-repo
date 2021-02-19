import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import {TagsHead} from './Feature';
import TagCard from './TagCard';

import theme from '../../styles/theme';
import {NO_DISPLAY_TAG} from '../../const/tags';

/*
tag {
  id: number,
  name: string,
  PlantTag: {
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
        <DetailsHead>
          <span>{name}</span>는 어떤 친구인가요?
        </DetailsHead>
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

const DetailsHead = styled(TagsHead)`
  margin-bottom: 50px;

  @media ${({theme}) => theme.devices.md} {
    margin-bottom: 30px;
  }
`;

export default TagsDetail;
