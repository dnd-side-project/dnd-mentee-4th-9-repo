import React from 'react';
import styled from 'styled-components';
import RecommendPlant from './RecommentPlant';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

function Slider({plants}) {
  return (
    <StyledSlider freeMode={true} slidesPerView={'auto'} pagination={{clickable: true}}>
      {plants.map((plant, i) => (
        <SwiperSlide key={plant.name}>
          <RecommendPlant plant={plant} />
        </SwiperSlide>
      ))}
    </StyledSlider>
  );
}

const StyledSlider = styled(Swiper)`
  cursor: pointer;

  .swiper-slide {
    width: max-content !important;
  }
`;

export default Slider;
