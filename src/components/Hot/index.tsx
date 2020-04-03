import React, { FC } from 'react';

import { hotResultType } from '@/types/home';
import './style.scss';

const Hot: FC<hotResultType> = (props) => {
  const { result } = props;
  return(
      <div className="hot-wrap"></div>
  );
};

export default Hot;