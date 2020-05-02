import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CateList from '@/components/common/CateList';
import { getDjCateList } from '@/apis/djradio';

import './style.scss';

type TitleComponentPropType = {
  top?: number
};

const DiscoverDjRadioComponent: FC<any> = props => {


  return(
      <div className="discover-dj">
        <CateList/>
      </div>
  )
};

export default DiscoverDjRadioComponent;