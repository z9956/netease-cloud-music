import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getDjRecommend, getProgramTopList } from '@/apis/djradio';

type ProgramComponentPropType = {};
import './style.scss';

const Program: FC<ProgramComponentPropType> = () => {
  const [ programs, setPrograms ] = useState<any>([]);
  const [ topList, setTopList ] = useState<any>([]);

  const getData = async () => {
    const res = await getProgramTopList({ idx: 1, limit: 10 });
    if (res.data.code === 200) setTopList(res.data.toplist);
  };

  const getDjRecommendData = async () => {
    const res = await getDjRecommend();
    if (res.data.code === 200) setPrograms(res.data.programs);
  };

  const getProgramEle = (title: string, path: string, data: any) => {
    return(
      <div className="program">
        <div className="title">
          <h3>
            <Link to={ path }>{ title }</Link>
          </h3>
          <Link to={ path }>更多</Link>
        </div>
        <ul className="playlist">
          {
            data.map((item: any, index: number) => {
              if(item?.program) {
                const rankInfo = { rank: item.rank, lastRank: item.lastRank };
                item = item.program;
                item = { ...item, ...rankInfo};
              }
              return <li key={ item.radio.id }>
                {
                  item.rank && <div className="rank">
                    <em>{ item.rank }</em>
                    <span>
                      <i className="iconfont icon-iconsfsx"></i>
                      { item.lastRank === -1 ? 'new' : item.lastRank }
                    </span>
                  </div>
                }
                <Link className="prc-url" to={ 'javascript:;' } title={ '播放' }>
                  <img src={ item.radio.picUrl } alt=""/>
                </Link>
                <div className="programs-info">
                  <p className="ellipsis">
                    <Link to={ `/program?id=${ item.radio.lastProgramId }` }>{ item.mainSong.name }</Link>
                  </p>
                  <p className="ellipsis">
                    <Link to={ `/djradio?id=${ item.radio.id }` }>{ item.radio.name }</Link>
                  </p>
                </div>
                <Link className="tag"
                      to={ `/discover/djradio/category?id=${ item.radio.categoryId }` }>{ item.radio.category }</Link>
              </li>
            })
          }
        </ul>
      </div>
    );
  };

  useEffect(() => {
    let flag = false;
    if (!flag) {
      getData();
      getDjRecommendData()
    }

    return () => {
      flag = true;
    };
  }, []);

  return (
    <div className="program-wrap">
      { programs && getProgramEle('推荐节目', `/discover/djradio/recommend`, programs) }
      { topList && getProgramEle('节目排行榜', `/discover/djradio/rank`, topList) }
    </div>
  );
};

export default Program;