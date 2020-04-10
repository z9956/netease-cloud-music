import React, { FC, useEffect, useState } from 'react';

import { getTopListService } from '@/service/homeService';
// import { raingType } from '@/types/home';
import Title from '@/components/Title';
import Ranking from '@/components/Ranking';
import './style.scss';

type ListComponentPropType = {

};
import './style.scss';

const List: FC<ListComponentPropType> = (props) => {
  const [ rankingData, setRankingData ] = useState<any>();
  useEffect(() => {
    getTopListService(1).then(data => setRankingData(data));
  },[]);
  return (
      rankingData ? <div className="List-warp">
        <Title info={ { title: '榜单', path: '/toplist'}} />
        <Ranking rankingData={ rankingData } />
      </div> : null
  );
};

export default List;