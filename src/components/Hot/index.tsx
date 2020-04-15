import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Title from '@/components/Title';
import { hotResultType } from '@/types/home';
import './style.scss';

const Hot: FC<hotResultType> = props => {
  const { result } = props;
  const [ list ] = useState<Array<string>>([ '华语', '流行', '摇滚', '民谣', '电子' ]);

  return (
      <div className="hot-wrap">
        <Title list={ list } info={ { title: '热门推荐', path: '/discover/playlist' } }></Title>
        <ul>
          {
            result && result.map(item => {
              return <li key={ item.id }>
                <div>
                  <img className="picUrl" src={ item.picUrl } alt=""/>
                  <Link to={ `/playlist?id=${ item.id }` }></Link>
                </div>
                <p className="name">
                  <Link to={ `/playlist?id=${ item.id }` }>{ item.name }</Link>
                </p>
              </li>
            })
          }
        </ul>
      </div>
  );
};

export default Hot;