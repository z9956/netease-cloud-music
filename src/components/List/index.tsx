import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Title from '@/components/Title';
import './style.scss';

type ListComponentPropType = {

};
import './style.scss';

const List: FC<ListComponentPropType> = (props) => {
  return (
      <div className="List-warp">
        <Title info={ { title: '榜单', path: '/toplist'}} />
      </div>
  );
};

export default List;