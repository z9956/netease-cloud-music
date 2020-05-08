import React, { FC, useEffect, useState } from 'react';

import ProgramList from "@/components/common/ProgramList";
import { getProgramTopList } from '@/apis/djradio';
import { rankType } from "@/types/djradio";

import './style.scss';

type RankComponentPropType = {};

const RankComponent: FC<RankComponentPropType> = props => {
  const [ programs, setPrograms ] = useState<Array<rankType>>([]);
  const [ updateTime, setUpdateTime ] = useState<number>(0);

  useEffect(() => {
    let flag = false;
    (async function () {
      const res = await getProgramTopList({ idx: 1 });
      if (!flag && res.data.code === 200) {
        const { toplist, updateTime } = res.data;
        setPrograms(toplist);
        setUpdateTime(updateTime);
      }
    })();
  }, []);


  return (
    <div className="recommend">
      <ProgramList title={ '节目排行榜' } path={ `/discover/djradio/rank` } updateTime={ updateTime } data={ programs }
                   type={ 1 }/>
    </div>
  );
};

export default RankComponent;