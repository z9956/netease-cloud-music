import React, { ChangeEvent, FC, useState } from 'react';

import './style.scss';
import Logo from '@/static/images/topbar.png';

const defaultProps = {
  navList: [
    {
      name: '发现音乐',
      path: '/'
    },
    {
      name: '我的音乐',
      path: '/my'
    },
    {
      name: '朋友',
      path: '/friend'
    }
  ],
  subNav: [
    { name: '推荐', path: '/discover' },
    { name: '排行榜', path: '/discover/toplist' },
    { name: '歌单', path: '/discover/playlist' },
    { name: '主播电台', path: '/discover/djradio' },
    { name: '歌手', path: '/discover/artist' },
    { name: '新碟上架', path: '/discover/album' }
  ]
};

type HeaderComponentPropType = {} & Partial<typeof defaultProps>;


const Header: FC<HeaderComponentPropType> = (props) => {
  const { navList, subNav } = props;
  const [ searchVal, setSearchVal ] = useState( '' );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
      <div className='topbar'>
        <div className="nav-top">
          <h1 className="logo"></h1>
          <ul className="nav">
            {
              navList && navList.map( (item) => {

                return <li key={ item.name }>{ item.name }</li>;
              } )
            }
          </ul>
          <div className='search'>
            <input type="text" placeholder={ '音乐/视频/电台/用户' } onChange={ handleSearch }/>
          </div>
        </div>
        <div className="sub-nav">
          <div className="nav">
            { subNav && subNav.map( item => {

            } ) }
          </div>
        </div>
      </div>
  );
};

export default Header;