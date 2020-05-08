import React, { FC, useEffect, useState } from 'react';

import { getCheckMusic, getSongUrl } from '@/apis/home';
import { getAlbum } from '@/apis/album';
import './style.scss';


const MusicComponent: () => "" | any = () => {
  const [ url, setUrl ] = useState<string>('');

  const listener = (e: Event & { key?: string, newValue?: string }) => {
    const { key, newValue } = e;
    if (key === 'music' && newValue) {
      (async function () {
        //音乐权限判断
        // const res = await getCheckMusic(+newValue);
        // if (!res.data?.success) return;

        const musicUrl = await getSongUrl(+newValue);
        if (musicUrl.data.code === 200) musicUrl.data && setUrl(musicUrl.data.data[0].url);
      })();
    }

  //  getAlbum 专辑处理 album
  };

  useEffect(() => {
    window.addEventListener('setItemEvent', listener);

    return () => {
      window.removeEventListener('setItemEvent', listener);
    }
  }, [ localStorage ]);

  return (
    url && <div className="music-wrap">
      <audio src={ url } autoPlay controls={ true }></audio>
    </div>
  );
};

export default MusicComponent;