import React, { FC, useEffect, useState } from 'react';

import { getDjRecommend } from '@/apis/djradio';
import ProgramList from "@/components/common/ProgramList";

import './style.scss';

type RecommendComponentPropType = {};

const RecommendComponent: FC<any> = props => {
  const [ programs, setPrograms ] = useState<any>([]);

  useEffect(() => {
    let flag = false;
    (async function () {
      const res = await getDjRecommend(50);
      if (!flag && res.data.code === 200) setPrograms(res.data.programs);
    })();
  },[]);


  return(
    <div className="recommend">
      <ProgramList title={ '推荐节目' } time={ '每日更新' } path={ `/discover/djradio/recommend` } data={ programs } type={ 0 }/>
    </div>
  );
};

export default RecommendComponent;