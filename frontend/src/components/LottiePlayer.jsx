import React from 'react';

/*
speed: string;
*/
function LottiePlayer({src, speed = '1'}) {
  return <lottie-player src={src} background="transparent" speed={speed} loop autoplay />;
}

export default LottiePlayer;
