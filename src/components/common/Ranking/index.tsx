import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { raingType } from '@/types/home';
import { playMusic } from "@/utils/utils";
import './style.scss';

const Ranking: FC<raingType> = props => {
  const { coverImgUrl, name, tracks } = props;

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
            <span className="play"></span>
            <span className="collect"></span>
          </div>
        </div>
      </div>
      <ul className="tracks">
        {
          tracks && tracks.map((item: any, index: number) => {
            if (index < 10) {
              return <li key={ item.id } className={ index % 2 === 0 ? 'gray' : '' }>
                <span className={ index < 3 ? 'red' : '' }>{ index + 1 }</span>
                <div className="name ellipsis">
                  <Link className="ellipsis" to={ `/song?${ item.id }` }>{ item.name }</Link>
                  <div className="oper">
                    <div>
                      <span className="play" onClick={ () => playMusic('music', item.id) }></span>
                      <span className="add"></span>
                      <span className="collect"></span>
                    </div>

                  </div>
                </div>
              </li>;
            }
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