import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Hot from '@/components/common/Hot';
import Paging from '@/components/common/Paging';
import { getTopPlaylist, getPlaylistCatlist } from '@/apis/playlist';
import { parseQuery } from '@/utils/utils';

import './style.scss';

type PlaylistComponentPropType = {};

const DiscoverPlaylistComponent: FC<PlaylistComponentPropType> = props => {
  const [ total, setTotal ] = useState<number>(1);
  const [ checkIndex, setIndex ] = useState<number>(1);
  const [ catList, setCatList ] = useState<any>({});
  const [ playlists, setPlaylists ] = useState<any>([]);
  const [ show, setShow ] = useState<boolean>(false);

  const handleChangeIndex = (num: number) => {
    setIndex(Math.floor(num));
  };

  const handleToggleShow = () => setShow(show => !show);

  const local = useLocation();
  let { cat } = parseQuery(local.search);

  useEffect(() => {
    let flag = false;
    (async function () {
      const res = await getPlaylistCatlist();
      if (!flag && res.data.code === 200) {
        const { all, sub, categories } = res.data;
        setCatList({ all, sub, categories });
      }
      ;
    })()
  }, []);

  useEffect(() => {
    let flag = false;
    cat = cat ? cat : '华语';
    const params = checkIndex === 1 ? { cat, limit: 35 } : { cat, limit: 35, offset: checkIndex };
    (async function () {
      const res = await getTopPlaylist(params);
      if (!flag && res.data.code === 200) {
        const { total, playlists } = res.data;

        const changePlaylists = playlists.map((item: any) => {
          const { id, name, coverImgUrl, creator: { nickname } } = item;
          return { id, nickname, picUrl: coverImgUrl, name };
        });

        setTotal(total);
        setPlaylists(changePlaylists)
      }
      ;
    })();
    return () => {
      flag = true
    };
  }, [ checkIndex, local ]);

  const { all, sub } = catList;

  return (
    <div className="discover-playlist">
      <div className="playlist-title">
        <div className="catlist">
          <h3>{ cat ? cat : '华语' }</h3>
          <button onClick={ handleToggleShow }>选择分类</button>
        </div>
        <div className="hot">
          <Link to={ `/discover/playlist?cat=华语&order=热门` }>热门</Link>
        </div>
      </div>
      <Hot result={ playlists } titleShow={ true }/>
      <Paging total={ total } checkIndex={ checkIndex } onChangeComments={ handleChangeIndex }/>
      {/*<ul className="all-catlist">*/ }
      <ul className={ show ? 'show all-catlist' : 'all-catlist' }>
        <li><Link to={ `/discover/playlist` }>{ all?.name }</Link></li>
        {
          sub && sub.map((item: any, index: number) => {
            return <li key={ index }><Link to={ `/discover/playlist?cat=${ item?.name }` }
                                           onClick={ handleToggleShow }>{ item?.name }</Link></li>;
          })
        }
      </ul>
    </div>
  );
};

export default DiscoverPlaylistComponent;