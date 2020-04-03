import React, { FC } from 'react';

type TitleComponentPropType = {
  title: string,
  list?: Array<string>,
  path: string
};
import './style.scss';

const Title: FC<TitleComponentPropType> = (props) => {
  const { title, list, path } = props;
  return(
      <div className="title-wrap">

      </div>
  );
};

export default Title;