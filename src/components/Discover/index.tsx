import React, { FC, useEffect, useState } from 'react';

import { getRecommendService, getNewestService } from '@/service/homeService';
import { resultType, newAlbumAlbumsType, newAlbumType } from '@/types/home';
import Hot from '@/components/Hot';
import NewAlbum from '@/components/NewAlbum';
import List from '@/components/List';
import { albumsinit } from '@/utils/initialState';

import './style.scss';

type DiscoverComponentPropType = {};



const Discover: FC<DiscoverComponentPropType> = props => {
  const [ result, setResult ] = useState<Array<resultType>>([{
    id: 0,
    type: 0,
    name: '',
    copywriter: '',
    picUrl: '',
    canDislike: false,
    trackNumberUpdateTime: 0,
    playCount: 0,
    trackCount: 0,
    highQuality: false,
    alg: ''
  }]);
  const [ albums, setAlbums ] = useState<Array<newAlbumAlbumsType>>([ albumsinit ]);

  useEffect(() => {
    getRecommendService().then(result => setResult(result));
    getNewestService().then(albums => setAlbums(albums));
  }, []);
  return (
      <div className="discover-wrap">
        <Hot result={ ...result }/>
        <NewAlbum albums={ albums }/>
        <List/>
      </div>
  );
};

export default Discover;