import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { raingType } from '@/types/home';
import './style.scss';


const Ranking: FC<any> = (props) => {
  const { rankingData } = props;
  const { coverImgUrl, name, tracks } = rankingData;

  useEffect(() => {
    console.log(rankingData);
  },[rankingData])
  return (
      <div className="ranking-warp">
        <div className="header">
          <div className="header-left">
            <Link to={ '/' }>
              <img src={ coverImgUrl } alt=""/>
            </Link>
          </div>
          <div className="header-right">
            <Link to={ `/` } title={ name }>{ name }</Link>
            <div className="icons">
              <Link to={ `/` }></Link>
              <Link to={ `/` }></Link>
            </div>
          </div>
        </div>
        <ul className="tracks">
          {
            tracks && tracks.map((item: any, index: number) => {
              return <li key={ item.id } className={ index % 2 === 0 ? 'gray' : ''}>
                <span>{ item.t }</span>
                <div className="name">
                  <Link to={ `/${ item.id }` }>{ item.name }</Link>
                  <div>播放站位</div>
                </div>
              </li>;
            })
          }
          <li>
            <Link to={ `/` }>查看全部></Link>
          </li>
        </ul>
      </div>
  );
};

export default Ranking;