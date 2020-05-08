import React, { FC, useEffect, useState, useContext } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { getAllToplist } from '@/apis/toplist';

import './style.scss';

type TopListComponentPropType = {};

const TopList: FC<any> = props => {
  const { handleChangeInfo } = props;
  const [ checkIndex, setIndex ] = useState<number>(0);
  const [ list, setList ] = useState<any>([]);

  const pageHistory = useHistory();

  const handleCheck = (item: any, index: number) => {
    pageHistory.push(`/discover/toplist/?id=${ item.id }`);
    setIndex(index);
    handleChangeInfo(item);
  };

  useEffect(() => {
    let ignore = false;
    (async function () {
      const res = await getAllToplist();
      if (!ignore && res.data.code === 200) {
        setList(res.data.list);
        handleChangeInfo(res.data.list[0]);
      }
      ;
    })();

    return () => {
      ignore = true
    };
  }, []);
  return (
    <div className="toplist-wrap">
      <h2>云音乐排行榜</h2>
      <ul className="toplist">
        {
          list && list.map((item: any, index: number) => {
            return <li key={ item.id } className={ checkIndex === index ? 'active' : '' }
                       onClick={ () => handleCheck(item, index) }>
              <div className="item-img">
                <Link to={ `/discover/toplist?id=${ item.id }` }>
                  <img src={ item.coverImgUrl } title={ item.name }/>
                </Link>
              </div>
              <div className="item-info">
                <p>{ item.name }</p>
                <p>{ item.updateFrequency }</p>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default TopList;