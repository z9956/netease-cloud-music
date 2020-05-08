import React, { FC } from 'react';

import CateList from '@/components/common/CateList';
import Program from "@/components/common/Program";

import './style.scss';

type DiscoverDjRadioComponentPropType = {};

const DiscoverDjRadioComponent: FC<DiscoverDjRadioComponentPropType> = props => {

  return (
    <div className="discover-dj">
      <CateList/>
      <Program/>
    </div>
  )
};

export default DiscoverDjRadioComponent;