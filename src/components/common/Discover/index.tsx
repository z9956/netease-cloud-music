import React, { FC, useEffect, useState } from 'react';

import { getRecommendService, getNewestService } from '@/service/homeService';
import { resultType, newAlbumAlbumsType } from '@/types/home';
import Hot from '@/components/common/Hot';
import NewAlbum from '@/components/common/NewAlbum';
import List from '@/components/common/List';
import { cancel } from '@/apis/axios';
import { albumsinit } from '@/utils/initialState';
import './style.scss';
import { getNewAlbum, getNewest, getRecommendPlaylists } from '@/apis/home';

type DiscoverComponentPropType = {};


const Discover: FC<DiscoverComponentPropType> = props => {
  const [ result, setResult ] = useState<Array<resultType>>([ {
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
  } ]);
  const [ albums, setAlbums ] = useState<Array<newAlbumAlbumsType>>([ albumsinit ]);

  const getData = async () => {
    const result = await getRecommendPlaylists();
    const album = await getNewest();
    if(result.data?.result && album.data?.albums) {
      setResult(result.data.result);
      setAlbums(album.data.albums)
    }
  };

  useEffect( () => {
    getData();
    return () => {
      cancel('取消请求');
    };
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