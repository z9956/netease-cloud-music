import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { getAllTopListService } from '@/service/homeService';
// import { raingType } from '@/types/home';
import Title from '@/components/Title';
import Ranking from '@/components/Ranking';
import './style.scss';

type ListComponentPropType = {

};

const List: FC<ListComponentPropType> = (props) => {
  const [ soarSong, setSoarSong ] = useState<any>();
  const [ newSong, setNewSong ] = useState<any>();
  const [ originalSong, setOriginalSong ] = useState<any>();
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
          <Ranking rankingData={ soarSong } />
          <Ranking rankingData={ newSong } />
          <Ranking rankingData={ originalSong } />
        </div>
      </div> : null
  );
};

export default List;