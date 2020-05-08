import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


import CateList from '@/components/common/CateList';
import Program from "@/components/common/Program";
import { getDjCateList } from '@/apis/djradio';

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