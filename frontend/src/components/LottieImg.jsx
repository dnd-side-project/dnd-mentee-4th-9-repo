import React from 'react';
import Lottie from 'react-lottie';

/*
lottieFile: json lottie file (ex. TestMain.default)
*/
function LottieImg({lottieFile}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} isStopped={false} isPaused={false} />;
}

export default LottieImg;
