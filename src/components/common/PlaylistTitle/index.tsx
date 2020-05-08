import React, { FC } from 'react';

import './style.scss';

type PlaylistTopComponentPropType = {
  type?: number,
  none?: boolean,
  title: string
};

const PlaylistTitle: FC<PlaylistTopComponentPropType> = props => {
  const { title, none } = props;

  const getBackgroundImg = (type: number) => {

  };

  return (
    <div className="playlist-title">
      { none ? <i></i> : '' }
      <h2>{ title }</h2>
    </div>
  );
};

export default PlaylistTitle;