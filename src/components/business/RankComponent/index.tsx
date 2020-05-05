import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getDjRecommend, getProgramTopList } from '@/apis/djradio';
import ProgramList from "@/components/common/ProgramList";

import './style.scss';

type RankComponentPropType = {};

const RankComponent: FC<any> = props => {
  const [ programs, setPrograms ] = useState<any>([]);

  useEffect(() => {
    let flag = false;
    (async function () {
      const res = await getProgramTopList({ idx: 1 });
      if (!flag && res.data.code === 200) setPrograms(res.data.programs);
    })();
  },[]);


  return(
    <ProgramList title={ '节目排行榜' } path={ `/discover/djradio/rank` } data={ programs }/>
  );
};

export default RankComponent;