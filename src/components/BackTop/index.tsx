import React, { FC, useEffect, useState } from 'react';

import './style.scss';

type TitleComponentPropType = {
  top?: number
};
import './style.scss';

const BackTop: FC<TitleComponentPropType> = (props) => {
  const [ show, setShow ] = useState<boolean>(false);
  useEffect(() => {
    const listener = () => {
      const shouldShow = window.scrollY > 300;
      if(shouldShow !== show) setShow(shouldShow);
    };

    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener);
  }, [show]);
  return(
      show? <div className="back-top" onClick={ () => window.scrollTo(0, 0) }>Top</div> : null
  );
};

export default BackTop;