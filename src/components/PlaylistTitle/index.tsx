import React, { FC } from 'react';

import './style.scss';

type PlaylistTopComponentPropType = {
  type?: number,
  title: string
};

const PlaylistTitle: FC<PlaylistTopComponentPropType> = props => {
  const { title } = props;

  const getBackgroundImg = (type: number) => {

  };

  return (
      <div className="playlist-title">
        <i></i>
        <h2>{ title }</h2>
      </div>
  );
};

export default PlaylistTitle;