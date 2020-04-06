import React, { FC } from 'react';

import Title from '@/components/Title';
import { hotResultType } from '@/types/home';
import './style.scss';

const Hot: FC<hotResultType> = (props) => {
  const { result } = props;
  return(
      <div className="hot-wrap">
        <Title></Title>
      </div>
  );
};

export default Hot;