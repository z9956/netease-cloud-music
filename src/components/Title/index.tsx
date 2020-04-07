import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

type TitleComponentPropType = {
  info: {
    title: string,
    path: string
  },
  list?: Array<string>
};
import './style.scss';

const Title: FC<TitleComponentPropType> = (props) => {
  const { info, list } = props;
  return (
      info && <div className="title-wrap">
        <div className="title-left">
          <i className="iconfont icon-yuanquan"></i>
          <Link className="title" to={ '/' }>热门推荐</Link>
          <ul className="nav">
            { list && list.map(val => {
              return <li key={ val }>{ val }</li>;
            }) }
          </ul>
        </div>
        <span className="more">
          <Link to={ info.path }>更多</Link>
          <i className="iconfont icon-xiangyou"></i>
        </span>
      </div>
  );
};

export default Title;