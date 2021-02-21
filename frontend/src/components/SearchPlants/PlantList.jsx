import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import {TagsHead} from '../PlantsDetail/Feature';
import Grid from '@material-ui/core/Grid';
import RecommentPlant from '../RecommentPlant';

function PlantList({filterTag}) {
  console.log(filterTag);
  return (
    <Section width="lg">
      <ListHead>
        <span>15</span>개의 반려식물이 있어요
      </ListHead>
      <Grid container>
        <Grid item>{/* <RecommentPlant desk="lg" mobile="xs" isSimple/> */}</Grid>
      </Grid>
    </Section>
  );
}

const ListHead = styled(TagsHead)`
  margin: 40px auto !important;

  @media ${({theme}) => theme.devices.md} {
    margin: 25px auto !important;
  }
`;

export default PlantList;
