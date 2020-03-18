import React, { ChangeEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';


import './style.scss';
import Logo from '../../static/images/topbar.png';


type HeaderComponentPropType = {
  navList: Array<{
    name: string,
    path: string
  }>,
  subNav: Array<{
    name: string,
    path: string
  }>
};


const Header: FC<HeaderComponentPropType> = (props) => {
  const { navList, subNav } = props;
  const [ searchVal, setSearchVal ] = useState( '' );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log( e );
  };

  return (
      <div className='topbar'>
        <div className="wrap">
          <div className="nav-top margin">
            <h1 className="logo"></h1>
            <ul className="nav">
              {
                navList && navList.map( (item) => {

                  return <li className='a' key={ item.name }>{ item.name }</li>
                      ;
                } )
              }
            </ul>
            <div className='search'>
              <div className="search-input">
                <input type="text" placeholder={ '音乐/视频/电台/用户' } onChange={ handleSearch }/>
              </div>
              <div className="result">
                <p>
                  <Link to={'/search/?s=赵雷'}>搜"赵雷"相关用户 ></Link>
                </p>
                <div className="item-wrap">
                  <div className="item">
                    <div className="item-left">
                      <i className='iconfont icon-geshou'></i>
                      <em>歌手</em>
                    </div>
                    <ul className="item-right">
                      <li>赵雷</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p>创作者中心</p>
            <div className='user-info'>
              <div className="photos">
                <img src="http://p4.music.126.net/NWbMq8btqZAlEG9SMT4uGA==/1376588559261305.jpg?param=30y30" alt=""/>
              </div>
              <div className="user-list">
                <li>
                  <i></i>
                  <em>我的主页</em>
                </li>
                <li>
                  <i></i>
                  <em>我的主页</em>
                </li>
                <li>
                  <i></i>
                  <em>我的主页</em>
                </li>
                <li>
                  <i></i>
                  <em>我的主页</em>
                </li>
                <li>
                  <i></i>
                  <em>我的主页</em>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="sub-nav margin">
            <div className="nav">
              <ul className="nav-list">
                { subNav && subNav.map( item => {
                  return <li key={ item.name }>{ item.name }</li>;
                } ) }
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;