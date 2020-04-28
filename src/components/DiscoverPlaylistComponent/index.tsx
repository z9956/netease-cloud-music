import React, { FC, useEffect, useState } from 'react';

import Hot from '@/components/Hot';
import Paging from '@/components/Paging';
import { getTopPlaylist } from '@/apis/playlist';

import './style.scss';

type TitleComponentPropType = {
  top?: number
};

const DiscoverPlaylistComponent: FC<any> = props => {
  const [ playlists, setPlaylists ] = useState<any>([]);
  const [ total, setTotal ] = useState<number>(1);
  const [ checkIndex, setIndex ] = useState<number>(1);

  const handleChangeIndex = (num: number) => {
    setIndex(num);
  };

  useEffect(() => {
    let flag = false;

    const params = checkIndex !== 1 ? { cat: '华语', limit: 35 } : { cat: '华语', limit: 35, offset: checkIndex };
    (async function () {
      const res = await getTopPlaylist(params);
      if(!flag && res.data.code === 200) {
        const { total, playlists } = res.data;

        const changePlaylists = playlists.map((item: any) => {
          const { id, name, coverImgUrl, creator: { nickname } } = item;
          return { id, nickname, picUrl: coverImgUrl, name };
        });

        setTotal(total);
        setPlaylists(changePlaylists)
      };
    })();
    return () => { flag = true };
  }, [checkIndex]);

  return(
      <div className="discover-playlist">
        <Hot result={ playlists }/>
        <Paging total={ total } checkIndex={ checkIndex } onChangeComments={ handleChangeIndex }/>
      </div>
  );
};

export default DiscoverPlaylistComponent;