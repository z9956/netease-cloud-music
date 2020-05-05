import React, { FC, useEffect, useState } from 'react';

import { getHotRadio } from '@/apis/djradio';
import CateList from "@/components/common/CateList";

import './style.scss';

type CategoryComponentPropType = {};

const CategoryComponent: FC<any> = props => {
  const [ programs, setPrograms ] = useState<any>([]);

  useEffect(() => {
    let flag = false;
    (async function () {
      // const res = await getHotRadio();
      // if (!flag && res.data.code === 200) setPrograms(res.data.programs);
    })();
  },[]);

  return(
    <>
      <CateList/>
    </>
  );
};

export default CategoryComponent;