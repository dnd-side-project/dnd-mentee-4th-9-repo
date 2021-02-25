import React from 'react';

const BASE_URL = 'https://resources.seeat-plant.com/';

/*
speed: string;
*/
function LottiePlayer({filename, speed = '1'}) {
  const src = `${BASE_URL.concat(filename)}.json`;
  return <lottie-player src={src} background="transparent" speed={speed} loop autoplay />;
}

export default LottiePlayer;
