import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { newAlbumAlbumsType } from '@/types/home';
import Title from '@/components/Title';
import './style.scss';

import cover from  '@/static/images/topbar.png';


const NewAlbum: FC<any> = (props) => {
  const { albums } = props;
  const [ index, setIndex ] = useState<number>(0);

  const handleLeftBtn = () => {

  };

  const handleRightBtn = () => {

  };

  return (
      <div className="new-album">
        <Title info={ { title: '新碟上架', path: '/discover/album' } }/>
        <div className="album-banner">
          <div className="album"  style={ { backgroundImage: `url(${ cover })`}}>
            <ul>
              { albums && albums.map((item: any) => {
                return <li key={ item.id }>
                  <div className="albums-item">
                    <img src={ item.picUrl } alt=""/>
                  </div>
                  <p className="ellipsis">
                    <Link to={ `/album?id=${ item.id } `}>{ item.name }</Link>
                  </p>
                  <p className="ellipsis">
                    <Link to={ `/album?id=${ item.id } `}>{ item?.artists.name }</Link>
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