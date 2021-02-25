import React from 'react';
import {Helmet} from 'react-helmet-async';

/*
title: string;
description: string;
image: string;
*/
const Meta = ({title = 'See-at 나만의 작은 친구', description = '반려식물 큐레이션 서비스', image = null}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};

export default Meta;
