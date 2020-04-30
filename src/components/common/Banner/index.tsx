import React, { FC, useState, useEffect, useRef } from 'react';

import { bannersType } from '@/types/home';
import './style.scss';

const Banner: FC<bannersType> = props => {
  const [ checkIndex, setCheckIndex ] = useState<number>(0);
  let time: any = null;
  const { banners } = props;

  useEffect(() => {
    time  = setTimeout(() => {
      setCheckIndex(checkIndex => checkIndex + 1);
      if(checkIndex >= banners.length -1)  setCheckIndex(0);
    }, 3000);
    return () => { time && clearTimeout(time)};
  }, [checkIndex]);

  const handleRadioBtn = (index: number) => {
    clearTimeout(time);
    setCheckIndex(index);
  };

  const handleLeftBtn = () => {
    clearTimeout(time);
    let index = checkIndex;
    index--;
    if(index <= 0) index = banners.length - 1;
    setCheckIndex(index);
  };

  const handleRightBtn = () => {
    clearTimeout(time);
    let index = checkIndex;
    index++;
    if(index >= banners.length) index = 0;
    setCheckIndex(index);
  };

  return (
      <div className="wrap" style={ { backgroundImage: `url(${ banners[checkIndex]?.imageUrl })` } }>
        <div className="banner-wrap">
          <div className="banner">
            <div className="banner-img">
              {
                banners && banners.map((imgInfo, index) => {
                  return <img className={ index === checkIndex ? 'active' : '' } src={ imgInfo.imageUrl }
                              key={ imgInfo.imageUrl } alt=""/>;
                })
              }
            </div>
            <i className="iconfont icon-zuo" onClick={ handleLeftBtn }></i>
            <i className="iconfont icon-you" onClick={ handleRightBtn }></i>
            <div className="dots">
              {
                banners && banners.map((item, index) => {
                  return <span className={ index === checkIndex ? 'active' : '' } key={ item.imageUrl }
                               onClick={ () => handleRadioBtn(index) }/>;
                })
              }
            </div>
          </div>
          <div className="download">
            <div>
              <p>下载客户端</p>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Banner;