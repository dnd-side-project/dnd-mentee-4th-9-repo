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
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta property="og:description" content={description} data-react-helmet="true" />
      <meta name="description" content={description} data-react-helmet="true" />
      {image && <meta property="og:image" content={image} data-react-helmet="true" />}
    </Helmet>
  );
};

export default Meta;
