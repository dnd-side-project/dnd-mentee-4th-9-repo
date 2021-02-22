import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import RecommentPlant from '../RecommentPlant';
import {TagsHead} from '../PlantsDetail/Feature';
import PopularPlants from '../Home/PopularPlants';

import {getAllPlants, getTagPlants} from '../../api/plantsAPI';
import {EMPTY, isEmptyArr, getOriginTag} from '../../lib/handler';
import theme from '../../styles/theme';
import SubHead from '../../styles/SubHead';

/*
filterTag: string[];
*/
function PlantList({filterTag = []}) {
  const {isLoaded, plants = []} = useFiltering(filterTag);
  const success = isLoaded && !isEmptyArr(plants);
  const matches = useMediaQuery(theme.devices.md);

  return (
    <Section width="lg">
      {success ? (
        <>
          {isEmptyArr(filterTag) ? (
            <ListHead>
              <span>{plants.length}개</span>의 반려식물이 있어요
            </ListHead>
          ) : (
            <ListHead>
              <span>{plants.length}개</span>의 맞춤 반려식물을&nbsp;
              <br />
              추천해 드릴게요
            </ListHead>
          )}
          <Grid container spacing={matches ? 2 : 3}>
            {plants.map((plant) => (
              <Grid item key={plant.id}>
                <RecommentPlant plant={plant} desk="lg" mobile="xs" isSimple />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        isLoaded && (
          <>
            <NothingHead>찾으시는 식물이 없어요</NothingHead>
            <Section width="lg">
              <PopularPlants />
            </Section>
          </>
        )
      )}
    </Section>
  );
}

function useFiltering(filterTag) {
  const [plantsInfo, setInfo] = useState({
    isLoaded: false,
    plants: [],
  });

  const {isLoaded, plants} = plantsInfo;

  const _getAllPlants = async () => {
    const resPlants = await getAllPlants('view');
    setInfo({isLoaded: true, plants: resPlants});
  };

  const _getTagPlants = useCallback(async () => {
    let params = EMPTY;

    filterTag.forEach((tag, i) => {
      const originTag = getOriginTag(tag);
      params = params.concat(originTag);
      if (i < filterTag.length - 1) params = params.concat(',');
    });

    const resPlants = await getTagPlants({tags: params});
    setInfo({isLoaded: true, plants: resPlants});
  }, [filterTag]);

  useEffect(() => {
    if (isEmptyArr(filterTag)) {
      _getAllPlants();
    } else {
      _getTagPlants();
    }
  }, [_getTagPlants, filterTag]);

  return {isLoaded, plants};
}

const NothingHead = styled(SubHead)`
  text-align: center;

  margin-top: 40px;
  margin-bottom: 100px;

  @media ${({theme}) => theme.devices.md} {
    margin-top: 25px;
    margin-bottom: 100px;
  }
`;

const ListHead = styled(TagsHead)`
  margin: 40px auto !important;
  line-height: 30px;

  br {
    display: none;
  }

  @media ${({theme}) => theme.devices.md} {
    margin: 25px auto !important;

    br {
      display: block;
    }
  }
`;

export default PlantList;
