import React, { FC, useEffect } from 'react';

import './style.scss';

type TitleComponentPropType = {
  top?: number
};
import './style.scss';

const BackTop: FC<TitleComponentPropType> = (props) => {
  useEffect(() => {
  }, []);
  return(
      <div className="back-top">Top</div>
  );
};

export default BackTop;