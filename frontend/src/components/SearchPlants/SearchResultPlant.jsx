import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Section from '../Section';
import RecommentPlant from '../RecommentPlant';
import {TagsHead} from '../PlantsDetail/Feature';

import theme from '../../styles/theme';
import {getSearchKeywordPlants} from '../../api/plantsAPI';
import NoResult from './NoResult';

function SearchResultPlant({keyword, pressEnter = true}) {
  const matches = useMediaQuery(theme.devices.md);
  const [plantsInfo, setInfo] = useState({
    isLoaded: false,
    plantData: [],
  });

  const searchKeyword = useCallback(async () => {
    if (!keyword || !pressEnter) return;
    const plantData = await getSearchKeywordPlants(keyword);
    setInfo({isLoaded: true, plantData});
  }, [keyword, pressEnter]);

  useEffect(() => {
    if (pressEnter) searchKeyword();
  }, [searchKeyword, pressEnter]);

  const {isLoaded, plantData} = plantsInfo;

  return (
    <>
      {isLoaded && (
        <Section width="lg">
          {plantData.length ? (
            <>
              <ListHead>
                <span>{plantData.length}개</span>의 반려식물이 있어요
              </ListHead>
              <Grid container spacing={matches ? 2 : 3}>
                {plantData.map((plant) => (
                  <Grid item key={plant.id}>
                    <RecommentPlant plant={plant} desk="lg" mobile="xs" isSimple />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <NoResult />
          )}
        </Section>
      )}
    </>
  );
}

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

export default SearchResultPlant;
