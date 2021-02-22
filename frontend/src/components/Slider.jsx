import React, {useLayoutEffect} from 'react';
import styled from 'styled-components';
import RecommendPlant from './RecommentPlant';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import {isEmptyArr} from '../lib/handler';

/*
plants {
  id: numberr;
  name: string;
  description: string;
  thumbnailPath: string;
  Tags: [
    id: number;
    name: string; (required)
    type: string;
  ]
}
*/
function Slider({plants}) {
  useLayoutEffect(() => {
    if (!isEmptyArr(plants)) {
      const swiper = document.querySelector('.swiper-container').swiper;
      swiper.update();
      swiper.slideTo(0);
    }
  }, [plants]);

  return (
    <StyledSlider freeMode={true} freeModeMomentum={false} slidesPerView={'auto'}>
      {plants.map((plant) => (
        <SwiperSlide key={plant.id}>
          <RecommendPlant plant={plant} isSimple />
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

  .card-wrapper {
    margin-bottom: 0 !important;
  }
`;

export default Slider;
