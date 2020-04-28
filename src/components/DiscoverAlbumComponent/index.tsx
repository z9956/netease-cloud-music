import React, { FC, useEffect, useState } from 'react';

import Hot from '@/components/Hot';
import Paging from '@/components/Paging';
import { getAlbumNewst, getTopAlbum } from '@/apis/album';

type TitleComponentPropType = {
  top?: number
};
import './style.scss';

const DiscoverAlbumComponent: FC<any> = props => {
  const [ albums, setAlbums ] = useState<any>([]);
  const [ newAlbums, setNewAlbums ] = useState<any>([]);
  const [ total, setTotal ] = useState<any>(0);
  const [ checkIndex, setIndex ] = useState<number>(1);

  const handleChangeIndex = (num: number) => setIndex(num);

  useEffect(() => {
    let flag: boolean = false;

    (async function () {
        const res = await getAlbumNewst();
        if(!flag && res.data.code === 200) {
          let result = res.data.albums.splice(0, 10);

          result = result.map((item: any) => {
            return {  name: item.name, picUrl: item.picUrl, id: item.id, nickname: item.artist.name };
          });

          setAlbums(result);
        }
    })();
    return () => { flag = true };
  }, []);

  useEffect(() => {
    let flag = false;

    (async function () {
      const res = await getTopAlbum({ offset: checkIndex, limit: 35});
      if(!flag && res.data.code === 200) {
        let { total, albums, picUrl, id } = res.data;

        albums = albums.map((item: any) => {
          return { name: item.name, picUrl: item.picUrl, id: item.id, nickname: item.artist.name };
        });

        setNewAlbums(albums);
        setTotal(total);
      }
    })();
    return () => { flag = true };
  },[checkIndex]);

  return(
      <div className="discover-album">
        <h3>热门新碟</h3>
        <Hot result={ albums } titleShow={ true }/>
        <h3>全部新碟</h3>
        <Hot result={ newAlbums } titleShow={ true }/>
        <Paging checkIndex={ checkIndex } onChangeComments={ handleChangeIndex } total={ total }/>
      </div>
  );
};

export default DiscoverAlbumComponent;