import React, { FC, useEffect, useState } from 'react';
import { Link,  useLocation } from 'react-router-dom';

import PlaylistTitle from '@/components/PlaylistTitle';
import { getPlaylistDetail } from '@/apis/playlist';
import { parseQuery } from '@/utils/utils';

import './style.scss';


type PlaylistTopComponentPropType = {};

const PlaylistTop: FC<PlaylistTopComponentPropType> = props => {
  const [ tracks, setTracks ] = useState<any>();
  const [ subscribers, setSubscribers ] = useState<any>('');

  const [ creator, setCreator ] = useState<any>({});
  const [ playlist, setPlaylist ] = useState<any>({});

  const local = useLocation();

  const getDate = (createTime: number) => {
    try{
      return new Date(createTime).toISOString().split('T')[0];
    }catch(e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let ignone = false;
    const { id } = parseQuery(local.search);
    if(!id) return;

    (async function () {
      const result = await getPlaylistDetail({ id: 924680166 });
      if(!ignone && result.data.code === 200) {
        const { playlist: { name, description, createTime, commentCount, shareCount, subscribedCount, coverImgUrl, subscribers, tracks, playCount, tags, creator } } = result.data;
        const { userId,  avatarUrl, nickname } = creator;

        setTracks(tracks);
        setSubscribers(subscribers);
        setCreator({ userId,  avatarUrl, nickname });
        setPlaylist({ name, description, coverImgUrl, shareCount, commentCount, subscribedCount, playCount, tags, createTime });
      }
    })();

    return (() => {
      ignone = true;
    });
  }, []);

  const { userId,  avatarUrl, nickname } = creator;
  const { name, description, coverImgUrl, playCount, commentCount, shareCount, subscribedCount, tags, createTime } = playlist;
  return (
      playlist && <div className="playlist-wrap">
        <div className="playlist-img">
          <img  src={ coverImgUrl } alt=""/>
        </div>
        <div className="playlist-right">
          <PlaylistTitle title={ name } type={ 0 }/>
          <div className="user">
            <Link to={ `/user/home?id=${ userId }` }>
              <img src={ avatarUrl } alt=""/>
            </Link>
            <Link to={ `/user/home?id=${ userId }` }>{ nickname }</Link>
            <span>{  createTime && getDate(createTime) } 创建</span>
          </div>
          <div className="operation">
            <div><em>播放</em></div>
            <div><em>{ Math.round(subscribedCount  / 10000) }万</em></div>
            <div><em>{ shareCount }</em></div>
            <div><em>下载</em></div>
            <div><em>{ commentCount }</em></div>
          </div>
          <div className="tags">
            <b>标签:</b>
            {
              tags && tags.map((tag: string, index: number) => {
                return <Link to={ `/discover/playlist/?cat=${ tag }&order=hot` } key={ index }>{ tag }</Link>;
              })
            }
          </div>
          <p>介绍:{ description }</p>
        </div>
      </div>
  );
};

export default PlaylistTop;