import React, { FC, useEffect, useState } from 'react';

import Hot from '@/components/common/Hot';
import Paging from '@/components/common/Paging';
import { getAlbumNews, getTopAlbum } from '@/apis/album';
import { albumsType, tempAlbumsType } from "@/types/discover";

type DiscoverAlbumComponentPropType = {};
import './style.scss';

const DiscoverAlbumComponent: FC<DiscoverAlbumComponentPropType> = props => {
  const [ albums, setAlbums ] = useState<Array<albumsType>>([ {
    name: '',
    picUrl: '',
    id: 0,
    nickname: ''
  } ]);
  const [ newAlbums, setNewAlbums ] = useState<Array<albumsType>>([ {
    name: '',
    picUrl: '',
    id: 0,
    nickname: ''
  } ]);
  const [ total, setTotal ] = useState<number>(0);
  const [ checkIndex, setIndex ] = useState<number>(1);

  const handleChangeIndex = (num: number) => setIndex(num);

  useEffect(() => {
    let flag: boolean = false;

    (async function () {
      const res = await getAlbumNews();
      if (!flag && res.data.code === 200) {
        let result = res.data.albums.splice(0, 10);

        result = result.map((item: tempAlbumsType) => {
          return { name: item.name, picUrl: item.picUrl, id: item.id, nickname: item.artist.name };
        });

        setAlbums(result);
      }
    })();
    return () => {
      flag = true
    };
  }, []);

  useEffect(() => {
    let flag = false;

    (async function () {
      const res = await getTopAlbum({ offset: checkIndex, limit: 35 });
      if (!flag && res.data.code === 200) {
        let { total, albums, picUrl, id } = res.data;

        albums = albums.map((item: tempAlbumsType) => {
          return { name: item.name, picUrl: item.picUrl, id: item.id, nickname: item.artist.name };
        });

        setNewAlbums(albums);
        setTotal(total);
      }
    })();
    return () => {
      flag = true
    };
  }, [ checkIndex ]);

  return (
    <div className="discover-album">
      <h3>热门新碟</h3>
      <Hot result={ albums } titleShow={ true } path={ '/album' }/>
      <h3>全部新碟</h3>
      <Hot result={ newAlbums } titleShow={ true } path={ '/album' }/>
      <Paging checkIndex={ checkIndex } onChangeComments={ handleChangeIndex } total={ total }/>
    </div>
  );
};

export default DiscoverAlbumComponent;