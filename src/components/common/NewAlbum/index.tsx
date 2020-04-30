import React, { FC,  useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { newAlbumType } from '@/types/home';
import Title from '@/components/common/Title';
import './style.scss';



const NewAlbum: FC<newAlbumType> = props => {
  const { albums } = props;
  const [ left, setLeft ] = useState<number>(0);
  const banner = useRef<HTMLUListElement>(null) ;

  const handleLeftBtn = () => {
    let offsetWidth = banner.current ? banner.current.offsetWidth : 0;
    let offsetLeft = banner.current ? banner.current.offsetLeft : 0;
    let newLeft = left + (offsetWidth / 3);
    if(newLeft >= offsetLeft) newLeft = 0;
    setLeft(newLeft);
  };

  const handleRightBtn = () => {
    let offsetWidth = banner.current ? banner.current.offsetWidth : 0;
    let offsetLeft = banner.current ? banner.current.offsetLeft : 0;
    let newLeft = left - (offsetWidth / 3);
    if(left < offsetLeft) newLeft = -980;
    setLeft(newLeft);
  };

  return (
      <div className="new-album">
        <Title info={ { title: '新碟上架', path: '/discover/album' } }/>
        <div className="album-banner">
          <div className="album" style={ { left: left } }>
            <ul ref={ banner }>
              { albums && albums.map((item: any) => {
                return <li key={ item.id }>
                  <div className="albums-item">
                    <img src={ item.picUrl } alt=""/>
                    <div></div>
                  </div>
                  <p>
                    <Link  className="ellipsis" to={ `/album?id=${ item.id } `}>{ item.name }</Link>
                  </p>
                  <p>
                    <Link  className="ellipsis" to={ `/album?id=${ item.id } `}>{ item?.artists.name }</Link>
                  </p>
                </li>;
              }) }
            </ul>
          </div>
          <i className="iconfont icon-zuo" onClick={ handleLeftBtn }></i>
          <i className="iconfont icon-you" onClick={ handleRightBtn }></i>
        </div>
      </div>
  );
};

export default NewAlbum;