import React, { FC, useEffect, useState } from 'react';

import { getRecommendService, getNewestService } from '@/service/homeService';
import { resultType, newAlbumAlbumsType } from '@/types/home';
import Hot from '@/components/Hot';
import NewAlbum from '@/components/NewAlbum';

import './style.scss';

type DiscoverComponentPropType = {};



const Discover: FC<DiscoverComponentPropType> = (props) => {
  const [ result, setResult ] = useState<Array<resultType>>();
  const [ albums, setAlbums ] = useState<any>();

  useEffect(() => {
    getRecommendService().then(result => setResult(result));
    getNewestService().then(albums => setAlbums(albums));
  }, []);
  return (
      <div className="discover-wrap">
        <Hot result={ result }/>
        <NewAlbum newAlbums={ albums }/>
      </div>
  );
};

export default Discover;