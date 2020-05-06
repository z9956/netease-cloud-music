import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CateList from "@/components/common/CateList";
import { getHotRadio } from '@/apis/djradio';
import { parseQuery } from "@/utils/utils";

import './style.scss';

type CategoryComponentPropType = {};

const CategoryComponent: FC<any> = props => {
  const [ djRadios, setDjRadios ] = useState<any>([]);

  const local = useLocation();

  useEffect(() => {
    let flag = false;
    const { id } = parseQuery(local.search);
    (async function () {
      const res = await getHotRadio({ cateId: +id });
      if (!flag && res.data.code === 200) setDjRadios(res.data.djRadios);
    })();
  },[local]);

  return(
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
                    <Link to={ `/user/home?id=${ item.dj.userId }` }>{ item.dj.nickname }</Link>
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