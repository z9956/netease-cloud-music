import React, { FC, useEffect, useState } from 'react';

import { getAllTopListService } from '@/service/homeService';
import { raingType } from '@/types/home';
import { rainginit } from '@/utils/initialState';
import Title from '@/components/common/Title';
import Ranking from '@/components/common/Ranking';
import './style.scss';

type ListComponentPropType = {};

const List: FC<ListComponentPropType> = props => {
  const [ soarSong, setSoarSong ] = useState<raingType>(rainginit);
  const [ newSong, setNewSong ] = useState<raingType>(rainginit);
  const [ originalSong, setOriginalSong ] = useState<raingType>(rainginit);
  const [ show, setShow ] = useState<boolean>(false);

  useEffect(() => {
    getAllTopListService().then(data => {
      setSoarSong(data[0]);
      setNewSong(data[1]);
      setOriginalSong(data[2]);
      setShow(true);
    });
  },[]);

  return (
      show ? <div className="List-warp">
        <Title info={ { title: '榜单', path: '/toplist'}} />
        <div className="ranking-item">
          <Ranking { ...soarSong } />
          <Ranking { ...newSong } />
          <Ranking { ...originalSong } />
        </div>
      </div> : null
  );
};

export default List;