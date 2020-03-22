import React, { ChangeEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { getKeywords } from '@/apis/home';
import './style.scss';


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
  const [ keywords, setKeywords ] = useState( '' );
  const [ results, setSesults ] = useState( '' );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeywords( value );
    getKeywords( keywords ).then( res => {
      console.log( res );
    } );
  };

  return (
      <div className='topbar'>
        <div className="wrap">
          <div className="nav-top margin">
            <h1 className="logo"></h1>
            <ul className="nav">
              {
                navList && navList.map( (item) => {

                  return <li className='a' key={ item.name }>{ item.name }</li>;
                } )
              }
            </ul>
            <div className='search'>
              <div className="search-input">
                <i className={ 'iconfont icon-xingtaiduICON_sousuo---copy' }></i>
                <input type="text" placeholder={ '音乐/视频/电台/用户' } onChange={ handleSearch } defaultValue={ keywords }/>
              </div>
              <div className="result" style={ { display: keywords.length ? 'block' : 'none' } }>
                <p>
                  <Link to={ '/search/?s=赵雷' }>搜"赵雷"相关用户 ></Link>
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
            <p className="creator">创作者中心</p>
            <div className='user-info'>
              <div className="photos">
                <img src="http://p4.music.126.net/NWbMq8btqZAlEG9SMT4uGA==/1376588559261305.jpg?param=30y30" alt=""/>
              </div>
              <ul className="user-list">
                <li>
                  <i className='iconfont icon-min7'></i>
                  <em>我的主页</em>
                </li>
                <li>
                  <i className='iconfont icon-youjian'></i>
                  <em>我的消息</em>
                </li>
                <li>
                  <i className='iconfont icon-dengji'></i>
                  <em>我的等级</em>
                </li>
                <li>
                  <i className='iconfont icon-333333-copy'></i>
                  <em>VIP会员</em>
                </li>
                <li>
                  <i className='iconfont icon-shimingrenzheng'></i>
                  <em>实名认证</em>
                </li>
                <li>
                  <i className='iconfont icon-tuichu'></i>
                  <em>退出</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="sub-nav margin">
            <div className="nav">
              <ul className="nav-list margin">
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