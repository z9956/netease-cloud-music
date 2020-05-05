import React, { FC, useEffect, useState } from 'react';
import { Link } from "react-router-dom";


type ProgramListComponentPropType = {};

import '@/components/common/Program/style.scss';
import './style.scss';

const ProgramList: FC<any> = props => {
  const { path, title, data, time, type } = props;

  return(
    <div className="program-wrap">
      { data ? <div className="program">
        <div className="title">
          <h3>
            <Link to={ path }>{ title }</Link>
            { time && <span>{ time }</span> }
          </h3>
          <Link to={ path }>更多></Link>
        </div>
        <ul className="playlist">
          {
            data.map((item: any, index: number) => {
              if (item?.program) {
                const rankInfo = { rank: item.rank, lastRank: item.lastRank };
                item = item.program;
                item = { ...item, ...rankInfo };
              }
              return <li key={ item.radio.id + item.createTime }>
                {
                  item.rank && <div className="rank">
                    <em>{ item.rank }</em>
                    <span>
                      <i className="iconfont icon-iconsfsx"></i>
                      { item.lastRank === -1 ? 'new' : item.lastRank }
                    </span>
                  </div>
                }
                <a className="prc-url" href={ '' } onClick={ e => e.preventDefault() } title={ '播放' }>
                  <img src={ item.radio.picUrl } alt=""/>
                </a>
                {
                  type ? <div>
                    <p className="ellipsis">
                      <Link to={ `/program?id=${ item.radio.lastProgramId }` }>{ item.mainSong.name }</Link>
                    </p>
                    <p className="ellipsis">
                      <Link to={ `/djradio?id=${ item.radio.id }` }>{ item.radio.name }</Link>
                    </p>
                    <p>播放{ item.listenerCount }</p>
                    <p>赞{ item.serialNum }</p>
                  </div> : <div className={ item.rank ? 'info-width' : 'programs-info' }>
                    <p className="ellipsis">
                      <Link to={ `/program?id=${ item.radio.lastProgramId }` }>{ item.mainSong.name }</Link>
                    </p>
                    <p className="ellipsis">
                      <Link to={ `/djradio?id=${ item.radio.id }` }>{ item.radio.name }</Link>
                    </p>
                  </div>
                }
                {
                  item.rank ? <div className="bar">
                    <i style={ { width: (100 - index * 6) + '%' } }></i>
                  </div> : <Link className="tag"
                                 to={ `/discover/djradio/category?id=${ item.radio.categoryId }` }>{ item.radio.category }</Link>
                }
              </li>
            })
          }
        </ul>
      </div> : null }
    </div>
  );
};

export default ProgramList;