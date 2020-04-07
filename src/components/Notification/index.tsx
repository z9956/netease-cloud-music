import React, { FC, useEffect } from 'react';

import './style.scss';

type NotificationComponentPropType = {
  info: {
    title: string,
    path: string
  },
  list?: Array<string>
};
import './style.scss';

const Notification: FC<NotificationComponentPropType> = (props) => {
  return (
      <div className="wrap"></div>
  );
};

export default Notification;