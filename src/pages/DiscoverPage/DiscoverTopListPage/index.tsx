import React, { useState } from 'react';

import TopList from '@/components/common/TopList';
import TopListInfo from '@/components/common/TopListInfo';

import './style.scss';

const DiscoverTopListPage = () => {
  const [ info, setInfo ] = useState<any>();

  const handleChangeInfo = (item: any) => setInfo(item);

  return (
    <div className="toplist-page">
      <TopList handleChangeInfo={ handleChangeInfo }/>
      <TopListInfo { ...info }/>
    </div>
  );
};

export default DiscoverTopListPage;
