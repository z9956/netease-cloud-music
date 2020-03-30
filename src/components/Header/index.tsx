import React, { ChangeEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { getKeywords } from '@/apis/home';
import { resultsType } from '@/types/home';
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
  const [ keywords, setKeywords ] = useState<string>( '' );
  const [ results, setResults ] = useState<resultsType>( {
    albums: [], artists: [], mvs: [], songs: [], order: []
  } );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeywords( value.replace( /(^\s+)|(\s+$)/g, '' ) );

    if ( !keywords.length ) return;

    getKeywords( keywords ).then( (res) => {
      if ( res.data.code === 200 ) {
        setResults( res.data.result );
        console.log( results );
      }
    } );
  };
  const getIcon = (key: string) => {
    let icons: { [key: string]: any } = {
      artists: ['icon-geshou', '歌手'],
      songs: ['icon-yinle', '单曲'],
      albums: ['icon-zhuanji', '专辑'],
      mvs: ['icon-shipin', '视频']
    };

    if(!icons[key]) return;

    return (
        <>
          <i className={ `iconfont ${ icons[key][0] }` }/>
          <em>{ icons[key][1] }</em>
        </>
    )
  };

  return (
      <div className="topbar">
        <div className="wrap">
          <div className="nav-top margin">
            <h1 className="logo"/>
            <ul className="nav">
              {
                navList && navList.map( (item) => <li className="a" key={ item.name }>{ item.name }</li> )
              }
            </ul>
            <div className="search">
              <div className="search-input">
                <i className="iconfont icon-xingtaiduICON_sousuo---copy"/>
                <input type="text" placeholder="音乐/视频/电台/用户" onChange={ handleSearch } defaultValue={ keywords }/>
              </div>
              <div className="result" style={ { display: keywords.length ? 'block' : 'none' } }>
                <p>
                  <Link to="/search/?s=赵雷">搜"赵雷"相关用户 ></Link>
                </p>
                <div className="item-wrap">
                  {
                    // @ts-ignore
                    results && results.order.map( key => {
                      return <div className="item" key={ key }>
                        <div className="item-left">
                          { getIcon(key) }
                        </div>
                        <ul className="item-right">
                          {
                            // @ts-ignore
                            results[key].map( (item, index) => {
                            return <li key={ item.id }>{ item.name }</li>;
                          })
                          }
                        </ul>
                      </div>;
                    } )
                  }
                </div>
              </div>
            </div>
            <p className="creator">创作者中心</p>
            <div className="user-info">
              <div className="photos">
                <img src="http://p4.music.126.net/NWbMq8btqZAlEG9SMT4uGA==/1376588559261305.jpg?param=30y30" alt=""/>
              </div>
              <ul className="user-list">
                <li>
                  <i className="iconfont icon-min7"/>
                  <em>我的主页</em>
                </li>
                <li>
                  <i className="iconfont icon-youjian"/>
                  <em>我的消息</em>
                </li>
                <li>
                  <i className="iconfont icon-dengji"/>
                  <em>我的等级</em>
                </li>
                <li>
                  <i className="iconfont icon-333333-copy"/>
                  <em>VIP会员</em>
                </li>
                <li>
                  <i className="iconfont icon-shimingrenzheng"/>
                  <em>实名认证</em>
                </li>
                <li>
                  <i className="iconfont icon-tuichu"/>
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
                { subNav && subNav.map( (item) => <li key={ item.name }>{ item.name }</li> ) }
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
