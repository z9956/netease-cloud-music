import React, { FC, useEffect, useState } from 'react';
import { Link } from "react-router-dom";


type ProgramListComponentPropType = {};

import './style.scss';

const ProgramList: FC<any> = props => {
  const { path, title, data, time, type } = props;

  const getProgramEle = (item: any, type?: number) => {
    switch (type) {
      case 0:
        return (<div className="recommend-info">
          <p className="ellipsis">
            <Link to={ `/program?id=${ item.radio.lastProgramId }` }>{ item.mainSong.name }</Link>
          </p>
          <p className="ellipsis">
            <Link to={ `/djradio?id=${ item.radio.id }` }>{ item.radio.name }</Link>
          </p>
          <p>播放{ item.listenerCount }</p>
          <p>赞{ item.serialNum }</p>
        </div>);
      case 1:
        return (<div className="rank-wrap">
          <p className="ellipsis">
            <Link to={ `/program?id=${ item.radio.lastProgramId }` }>{ item.mainSong.name }</Link>
          </p>
          <p className="ellipsis">
            <Link to={ `/djradio?id=${ item.radio.id }` }>{ item.radio.name }</Link>
          </p>
          <p>
            <Link className="tag"
                  to={ `/discover/djradio/category?id=${ item.radio.categoryId }` }>{ item.radio.category }</Link>
          </p>
        </div>);
      default:
        return (<div className={ item.rank ? 'info-width' : 'programs-info' }>
          <p className="ellipsis">
            <Link to={ `/program?id=${ item.radio.lastProgramId }` }>{ item.mainSong.name }</Link>
          </p>
          <p className="ellipsis">
            <Link to={ `discover/djradio/category?id=${ item.radio.id }` }>{ item.radio.name }</Link>
          </p>
        </div>);
    }
  };

  const getRankIng = (index: number, num: number) => {
    if (num === -1 ) {
      return (
        <>
          <em>{ index }</em>
          <span>
            { num === -1 ? 'new' : num }
        </span>
        </>);
    }else if(num - index > 0 ) {
      return (
        <>
          <em>{ index }</em>
          <span>
          <i className="iconfont icon-iconsfsx"></i>
            { num - index }
        </span>
        </>);
    }else if(index > num) {
      return (
        <>
          <em>{ index }</em>
          <span>
            <i className="iconfont icon-plus-shiftdown"></i>
            { index - num }
        </span>
        </>);
    }else if(num - index === 0) {
      return (
        <>
          <em>{ index }</em>
          <span>
            <i>-</i>
            { index - num }
        </span>
        </>);
    }

  };

  return (
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
                  item.rank && <div className={ index < 3 ? 'rank red' : 'rank' }>
                    { getRankIng(index + 1, item.lastRank) }
                  </div>
                }
                <a className="prc-url" href={ '' } onClick={ e => e.preventDefault() } title={ '播放' }>
                  <img src={ item.radio.picUrl } alt=""/>
                </a>
                { getProgramEle(item, type) }
                {
                  item.rank ? <div className="bar">
                    <i style={ { width: (100 - index * 0.5) + '%' } }></i>
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