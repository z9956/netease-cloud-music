import React, { FC, useEffect, useState } from 'react';

import { getCheckMusic, getSongUrl } from '@/apis/home';
import './style.scss';

type MusicComponentPropType = {};

const MusicComponent: () => "" | any = () => {
  const [ url, setUrl ] = useState<string>('');

  useEffect(() => {
    window.addEventListener("setItemEvent", function (e) {
      // @ts-ignore
      const { key, newValue } = e;
        console.log(e);
        if (key === 'music' && newValue) {
          (async function () {
            const res = await getCheckMusic(+newValue);
            if (!res.data?.success) return;
            const musicUrl = await getSongUrl(+newValue);
            if (musicUrl.data.code === 200) musicUrl.data && setUrl(musicUrl.data.data[0].url);
          })();
        }
    });

  }, [ localStorage ]);

  return (
    url && <div className="music-wrap">
      <audio src={ url } autoPlay controls={ true }></audio>
    </div>
  );
};

export default MusicComponent;