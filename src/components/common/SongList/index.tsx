import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type SongListComponentPropType = {};
import './style.scss';

const SongList: FC<any> = props => {
  const { tracks, playCount, trackCount } = props;
  return (
      <div className="songlist">
        <div className="title">
          <p className="title-info">
            <span>歌曲列表</span>
            <span>{ trackCount }首歌</span>
          </p>
          <p className="playCount">播放:<span>{ playCount }</span>次</p>
        </div>
        <ul className="song-list">
          <li className="firstilne">
            <div className="play-icon"></div>
            <div className="song-title">歌曲标题</div>
            <div className="time-len">时长</div>
            <div className="artist">歌手</div>
            <div className="album">专辑</div>
          </li>
          {
            tracks && tracks.map((track: any, index: number) => {
              return <li key={ track.id } className={ index % 2 === 0 ? 'gray' : '' }>
                <div className="play-icon">
                  <span>{ index }</span>
                  <i className="iconfont icon-bofang"></i>
                </div>
                <div className="song-title">
                  <Link to={ `/song?id=${ track.id }` }>{ track.name }</Link>
                </div>
                <div className="time-len">{ }</div>
                <div className="artist">
                  {
                  track.ar.map((ar: any) => {
                    return <Link  to={ `/artist?id=${ ar.id }` } key={ ar.id }>{ ar.name }</Link>;
                  }) }
                </div>
                <div className="album">
                  <Link to={ `/album?id=${ track.al.id }` }>{ track.al.name }</Link>
                  </div>
              </li>;
            })
          }
        </ul>
      </div>
  );
};

export default SongList;