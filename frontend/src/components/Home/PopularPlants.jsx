import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import SubHead from '../../styles/SubHead';
import Slider from '../Slider';

import {getAllPlants} from '../../api/plantsAPI';
import {isEmptyArr} from '../../lib/handler';

function PopularPlants() {
  const plants = usePopularPlants();
  const topPlants = isEmptyArr(plants) ? plants : plants.slice(0, plants.length / 2);

  return (
    <>
      {!isEmptyArr(plants) && (
        <Wrapper>
          <SubHead>요즘 뜨는 친구들</SubHead>
          <Plants>
            <Slider plants={topPlants} />
          </Plants>
        </Wrapper>
      )}
    </>
  );
}

function usePopularPlants() {
  const [plants, setPlants] = useState();

  const getPlants = async () => {
    const resPlants = await getAllPlants('view');
    setPlants(resPlants);
  };

  useEffect(() => {
    getPlants();
  }, []);

  return plants;
}

const Wrapper = styled.div`
  li {
    margin-bottom: 0 !important;
  }
`;

const Plants = styled.ul`
  width: 100%;
  margin-top: 54px;
  display: flex;

  @media ${({theme}) => theme.devices.md} {
    margin-top: 25px;
  }
`;

export default PopularPlants;
