import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getSingers, getDjPopular } from '@/apis/home';
import { singersDataType, singersSingersType } from '@/types/home';

import './style.scss';

type SingersComponentPropType = {};

const Singers: FC<SingersComponentPropType> = props => {
  const [ data, setData ] = useState<singersDataType>();
  const [ artists, setArtists ] = useState<singersSingersType>();
  const { } = props;
  const getData = async () => {
    const artists = await getSingers({ cat: 5001, limit: 5 });
    const data = await getDjPopular(5);
    if(artists.data?.code && data.data?.code) {
      setData(data.data.data.list);
      setArtists(artists.data.artists);
    }
  };
  useEffect(() => {
    getData();
  },[]);

  return (
      <div className="singers-wrap">
        <div className="singers">
          <h3>
            <span>入驻歌手</span>
            <Link to={ `/` }>查看全部></Link>
          </h3>
          <ul className="singers-list">
            {
              artists && artists.map(singers => {
                return <li key={ singers.id }>
                  <Link to={ `/user/home?${ singers.id }` }>
                    <div className="singers-left">
                      <img src={ singers.picUrl } alt={ singers.name }/>
                    </div>
                    <div className="singers-right">
                      <h4>{ singers.name }</h4>
                      <p><span>{ singers.alias[0] ? singers.alias[0] : ''}</span></p>
                    </div>
                  </Link>
                </li>
              })
            }
          </ul>
          <div className="apply">
            <Link to={ `/` }>申请成为网易音乐人</Link>
          </div>
        </div>
        <div className="dj">
          <h3>热门主播</h3>
          <ul className="dj-list">
            {
              data && data.map(item => {
                return <li key={ item.id }>
                    <Link to={ `/user/home?id=${ item.id }` }>
                      <img src={ item.avatarUrl } alt=""/>
                    </Link>
                  <div className="info">
                    <p>
                      <Link to={ `/user/home?id=${ item.id }` }>{ item.nickName }</Link>
                    </p>
                    <p></p>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
  );
};

export default Singers;