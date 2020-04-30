import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Comments from '@/components/common/Comments';
import Paging from '@/components/common/Paging';
import SongList from '@/components/common/SongList';
import PlaylistTop from '@/components/common/PlaylistTop';
import { parseQuery, getIdx, getDate } from '@/utils/utils';
import PlaylistTitle from '@/components/common/PlaylistTitle';
import { getPlaylistComment } from '@/apis/playlist';
import { getTopList } from '@/apis/toplist';

type TitleComponentPropType = {
  top?: number
};
import './style.scss';

const TopListInfo: FC<any> = props => {
  const { name,  id, updateFrequency, updateTime, subscribedCount, coverImgUrl  } = props;
  const [ checkIndex, setIndex ] = useState<number>(1);
  const [ total, setTotal ] = useState<number>(0);
  const [ hotComments, setHotComments ] = useState<any>([]);
  const [ comments, setComments ] = useState<any>([]);
  const [ tracks, setTracks ] = useState<any>();
  const [ toplistInfo, setToplistInfo ] = useState<any>({});

  const handleComments = async (index: number) => {
    setIndex(index);
  };

  useEffect(() => {
    if(!name) return;
    let ignone: boolean = false;
    let idx: number = getIdx(name) ? getIdx(name) : 0;

    (async function () {
      const res = await getTopList(idx);
      if(!ignone && res.data?.code === 200) {
        const { tracks, playCount, trackCount, shareCount } = res.data.playlist;

        setTracks(tracks);
        setToplistInfo({ playCount, trackCount, shareCount });
      }
    })();
    return () => { ignone = true };
  },[id, name]);

  useEffect(() => {
    let ignone: boolean = false;
    if(!id) return;

    (async function () {
      const res = await getPlaylistComment({ id });
      if(!ignone && res.data?.code === 200) {
        setTotal(res.data.total);
        setComments(res.data.comments);
        setHotComments(res.data.hotComments);
      }
    })();
    return () => { ignone = true };
  }, [id, checkIndex]);

  const { playCount, trackCount, shareCount } = toplistInfo;

  return(
      <div className="toplist-info">
        <div className="playlist-wrap">
          <div className="playlist-img">
            <img src={ coverImgUrl } alt=""/>
          </div>
          <div className="playlist-info">
            <PlaylistTitle title={ name } type={ 0 } none={ true }/>
            <div className="user">
              <span>最新更新: { updateTime && getDate(updateTime) } ({ updateFrequency })</span>
            </div>
            <div className="operation">
              <div>
                <i className="iconfont icon-bofang"></i>
                <em>播放</em>
              </div>
              <div>
                <i className="iconfont icon-new"></i>
                <em>{ Math.round(subscribedCount / 10000) }万</em>
              </div>
              <div>
                <i className="iconfont icon-zhuanfa"></i>
                <em>{ shareCount }</em>
              </div>
              <div>
                <i className="iconfont icon-xiazai"></i>
                <em>下载</em>
              </div>
              <div>
                <i className="iconfont icon-pinglun"></i>
                <em>{ total }</em>
              </div>
            </div>
          </div>
        </div>
        <SongList tracks={ tracks } playCount={ playCount } trackCount={ trackCount }/>
        <Comments hotComments={ hotComments } comments={ comments } total={ total } hotShow={ checkIndex === 1 }/>
        <Paging total={ total } checkIndex={ checkIndex } onChangeComments={ handleComments }/>
      </div>
  );
};

export default TopListInfo;