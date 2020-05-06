import React, { FC, useEffect, useState } from 'react';

import { getCheckMusic, getSongUrl } from '@/apis/home';

import './style.scss';

type MusicComponentPropType = {};

const MusicComponent: FC<MusicComponentPropType> = props => {
  const [ programs, setPrograms ] = useState<any>([]);

  useEffect(() => {
    window.addEventListener('storage', function (e) {
      console.log('key', e.key);
      console.log('oldValue', e.oldValue);
      console.log('newValue', e.newValue);
      console.log('url', e.url);
      console.log(e);
    });
    // let flag = false;
    // (async function () {
    //   // const res = await getDjRecommend(50);
    //   // if (!flag && res.data.code === 200) setPrograms(res.data.programs);
    // })();
  },[localStorage]);

  return(
    <div className="music-wrap">
      <audio src={ `http://m7.music.126.net/20200506235110/0a7e2fe6254f1bd1f92510caabfdc1aa/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3` }
             autoPlay controls={ true }></audio>
    </div>
  );
};

export default MusicComponent;