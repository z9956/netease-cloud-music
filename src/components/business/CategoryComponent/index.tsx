import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation, RouteComponentProps } from 'react-router-dom';

import CateList from "@/components/common/CateList";
import { getHotRadio } from '@/apis/djradio';
import { parseQuery } from "@/utils/utils";
import { djRadiosType, radiosType } from '@/types/djradio';

import './style.scss';

type CategoryComponentPropType = RouteComponentProps & {};

const CategoryComponent: FC<CategoryComponentPropType> = props => {
  const [ djRadios, setDjRadios ] = useState<Array<djRadiosType>>([{
    id: 0,
    picUrl: '',
    name: '',
    programCount: 0,
    subCount: 0,
    userId:0,
    nickname: ''
  }]);

  const local = useLocation();

  useEffect(() => {
    let flag = false;
    const { id } = parseQuery(local.search);
    (async function () {
      const res = await getHotRadio({ cateId: +id });
      if (!flag && res.data.code === 200) {
          const data = res.data.djRadios.map((item: radiosType) => {
            const { dj, id, picUrl, name, programCount, subCount } = item;
            return { id, picUrl, name, programCount, subCount, userId: dj.userId, nickname: dj.nickname };
          });
        setDjRadios(data);
      }
    })();
  }, [ local ]);

  return (
    <div className="category-wrap">
      <CateList/>
      <div className="category">
        <h3>电台排行榜</h3>
        <ul className="dj-list">
          {
            djRadios && djRadios.map((item: any) => {
              return <li key={ item.id }>
                <Link to={ `/djradio?id=${ item.id }` }>
                  <img src={ item.picUrl } alt=""/>
                </Link>
                <div className="dj-info">
                  <h3>
                    <Link to={ `/djradio?id=${ item.id }` }>{ item.name }</Link>
                  </h3>
                  <p>
                    <Link to={ `/user/home?id=${ item.userId }` }>{ item.nickname }</Link>
                  </p>
                  <p>
                    <span>共{ item.programCount }期</span>
                    <span>订阅{ item.subCount }次</span>
                  </p>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default CategoryComponent;