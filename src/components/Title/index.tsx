import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPlaylist } from '@/apis/home';

import './style.scss';

type TitleComponentPropType = {
  info?: {
    title: string,
    path: string
  },
  list?: Array<string>
};
import './style.scss';

const Title: FC<TitleComponentPropType> = (props) => {
  const { info, list } = props;
  useEffect(() => {
    // let cat = '华语';
    getPlaylist({ cat: '华语', limit: 10 }).then(res => {
      console.log(res);
    });
  }, []);
  return(
      <div className="title-wrap">
        <Link to={ '/' }>热门推荐</Link>
      </div>
  );
};

export default Title;