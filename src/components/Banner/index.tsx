import React, { FC } from 'react';

import { bannersType } from '@/types/home';

const Banner: FC<bannersType> = (props) => {
  const { banners } = props;
  return(
      <div className="banner-wrap">
        <div className="banner">
          <div className="banner-img">
            <img src="" alt=""/>
          </div>
          <i className="iconfont icon-zuo"></i>
          <i className="iconfont icon-you"></i>
          <div className="dots">
            <span></span>
          </div>
        </div>
        <div className="download">
          <p>下载客户端</p>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
  );
};

export default Banner;