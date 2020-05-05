import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getDjRecommend, getProgramTopList } from '@/apis/djradio';
import ProgramList from "@/components/common/ProgramList";

type ProgramComponentPropType = {};
import './style.scss';

const Program: FC<ProgramComponentPropType> = () => {
  const [ programs, setPrograms ] = useState<any>([]);
  const [ topList, setTopList ] = useState<any>([]);

  const getData = async () => {
    const res = await getProgramTopList({ idx: 1, limit: 10 });
    if (res.data.code === 200) setTopList(res.data.toplist);
  };

  const getDjRecommendData = async () => {
    const res = await getDjRecommend();
    if (res.data.code === 200) setPrograms(res.data.programs);
  };

  useEffect(() => {
    let flag = false;
    if (!flag) {
      getData();
      getDjRecommendData()
    }

    return () => {
      flag = true;
    };
  }, []);

  return (
    <div className="program-wrap">
      <ProgramList/>
      <ProgramList title={ '推荐节目' } path={ `/discover/djradio/recommend` } data={ programs }/>
      <ProgramList title={ '节目排行榜' } path={ `/discover/djradio/rank` } data={ topList }/>
    </div>
  );
};

export default Program;