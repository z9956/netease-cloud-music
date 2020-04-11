import React, { FC } from 'react';
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

const Title: FC<TitleComponentPropType> = props => {
  const { info: { title, path }, list } = props;
  return (
      <div className="title-wrap">
        <div className="title-left">
          <i className="iconfont icon-yuanquan"></i>
          <Link className="title" to={ '/' }>{ title }</Link>
          <ul className="nav">
            { list && list.map(val => {
              return <li key={ val }>{ val }</li>;
            }) }
          </ul>
        </div>
        <span className="more">
          <Link to={ path }>更多</Link>
          <i className="iconfont icon-xiangyou"></i>
        </span>
      </div>
  );
};

export default Title;