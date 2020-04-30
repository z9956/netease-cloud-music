import React, { lazy } from 'react';

const DiscoverDjRadioComponent = lazy(() => import('@/components/business/DiscoverDjRadioComponent'));

import './style.scss';

const DiscoverDjRadioPage = () => {
  return (
      <>
        <DiscoverDjRadioComponent/>
      </>
  );
};

export default DiscoverDjRadioPage;
