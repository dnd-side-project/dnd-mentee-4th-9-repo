import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import RecommentPlant from '../RecommentPlant';
import {TagsHead} from '../PlantsDetail/Feature';

import {getAllPlants} from '../../api/plantsAPI';
import theme from '../../styles/theme';

function PlantList({filterTag}) {
  const plants = useSearchPlants(filterTag);
  const matches = useMediaQuery(theme.devices.md);

  return (
    <Section width="lg">
      <ListHead>
        <span>{plants.length}</span>개의 반려식물이 있어요
      </ListHead>
      <Grid container spacing={matches ? 2 : 3}>
        {plants.map((plant) => (
          <Grid item key={plant.id}>
            <RecommentPlant plant={plant} desk="lg" mobile="xs" isSimple />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

function useSearchPlants(filterTag) {
  const [plants, setPlants] = useState([]);

  const _getAllPlants = async (e) => {
    const resPlants = await getAllPlants('view');
    setPlants(resPlants);
  };

  useEffect(() => {
    _getAllPlants();
  }, []);

  return plants;
}

const ListHead = styled(TagsHead)`
  margin: 40px auto !important;

  @media ${({theme}) => theme.devices.md} {
    margin: 25px auto !important;
  }
`;

export default PlantList;
