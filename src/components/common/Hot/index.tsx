import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Title from '@/components/common/Title';
import { hotResultType } from '@/types/home';
import './style.scss';

const Hot: FC<hotResultType> = props => {
  const { result, titleShow, path, children } = props;
  const [ list ] = useState<Array<string>>([ '华语', '流行', '摇滚', '民谣', '电子' ]);

  return (
    <div className="hot-wrap">
      { children }
      { !titleShow && <Title list={ list } info={ { title: '热门推荐', path: '/discover/playlist' } }></Title> }
      <ul>
        {
          result && result.map(item => {
            return <li key={ item.id }>
              <div>
                <Link to={ path ? `${ path }?id=${ item.id }` : `/playlist?id=${ item.id }` }>
                  <img className="picUrl" src={ item.picUrl } alt=""/>
                </Link>
                <div className="bottom">
                  {
                    item.playCount && <p>
                      <i className="iconfont icon-erji201"></i>
                      <span>{ Math.round(item.playCount / 1000) }万</span>
                    </p>
                  }
                  <i className="iconfont icon-bofang"></i>
                </div>
              </div>
              <div className={ item.nickname ? 'ellipsis name' : 'name' }>
                <Link to={ path ? `${ path }?id=${ item.id }` : `/playlist?id=${ item.id }` }>{ item.name }</Link>
                <p className="gray">{ item.nickname ? `by ${ item.nickname }` : '' }</p>
              </div>
            </li>;
          })
        }
      </ul>
    </div>
  );
};

export default Hot;