import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import PlaylistTitle from '@/components/common/PlaylistTitle';
import { getDate } from '@/utils/utils';

import './style.scss';


type PlaylistTopComponentPropType = {};

const PlaylistTop: FC<any> = props => {
  const {
    userId,
    avatarUrl,
    nickname,
    name,
    description,
    coverImgUrl,
    commentCount,
    shareCount,
    subscribedCount,
    tags,
    createTime
  } = props;

  const [ show, setShow ] = useState<boolean>(false);

  const handleButton = () => {
    setShow(!show);
  };

  return (
    <div className="playlist-wrap">
      <div className="playlist-img">
        <img src={ coverImgUrl } alt=""/>
      </div>
      <div className="playlist-info">
        <PlaylistTitle title={ name } type={ 0 }/>
        <div className="user">
          <Link to={ `/user/home?id=${ userId }` }>
            <img src={ avatarUrl } alt=""/>
          </Link>
          <Link className="nickname" to={ `/user/home?id=${ userId }` }>{ nickname }</Link>
          <span>{ createTime && getDate(createTime) } 创建</span>
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
            <em>{ commentCount }</em>
          </div>
        </div>
        <div className="tags">
          <b>标签:</b>
          {
            tags && tags.map((tag: string, index: number) => {
              return <Link to={ `/discover/playlist/?cat=${ tag }&order=hot` } key={ index }>{ tag }</Link>;
            })
          }
        </div>
        <p className={ show ? 'top-info' : 'infoH' }>{ description }</p>
        <p className="clone">
          <button onClick={ handleButton }>{ show ? '收起' : '展开' }</button>
        </p>
      </div>
    </div>
  );
};

export default PlaylistTop;