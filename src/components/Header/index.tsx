import React, { ChangeEvent, FC, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { getKeywordsService } from '@/service/homeService';
import { resultsType, navListType } from '@/types/home';
import './style.scss';

type HeaderComponentType = navListType & RouteComponentProps;


const Header: FC<HeaderComponentType> = props => {
  const { navList, subNav, history } = props;
  const [ keywords, setKeywords ] = useState<string>('');
  const [ checkIndex, setIndex ] = useState<number>(0);
  const [ results, setResults ] = useState<resultsType>({
    albums: [], artists: [], mvs: [], songs: [], order: []
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeywords(value.replace(/(^\s+)|(\s+$)/g, ''));

    if(!keywords.length) return;

    getKeywordsService(keywords).then(result => setResults(result));
  };

  const handleJump = (index: number, path: string) => {
    setIndex(index);
    history.push(path);
  };

  const getIcon = (key: string) => {
    let icons: { [key: string]: any } = {
      artists: [ 'icon-geshou', '歌手' ],
      songs: [ 'icon-yinle', '单曲' ],
      albums: [ 'icon-zhuanji', '专辑' ],
      mvs: [ 'icon-shipin', '视频' ],
      playlists: [ 'icon-gedan', '歌单' ],
    };

    if(!icons[key]) return;

    return (
        <>
          <i className={ `iconfont ${ icons[key][0] }` }/>
          <em>{ icons[key][1] }</em>
        </>
    );
  };

  const liElent = (item: { [key: string]: any }, key: string) => {
    if(!item) return;
    let  artist  = item?.artists || item?.artist;
    switch(key) {
      case 'artists':
        return <li key={ item.id } className='ellipsis'><span className='name'>{ item.name } </span></li>;
      case 'mvs':
        return <li key={ item.id } className='ellipsis'>
                 <span>{ `MV:${ item.name }-` } </span>
                 <span className='name'>{ item.artistName } </span>
              </li>;
      case 'songs':
        return <li key={ item.id }  className='ellipsis'>
                  <span>{ `${ item.name }-` } </span>
                  <span className='name'>{ artist[0].name } </span>
                </li>;
      case 'albums':
        return <li key={ item.id }  className='ellipsis'>
                <span>{ `${ item.name }-` } </span>
                <span className='name'>{ artist.name } </span>
              </li>;
      default:
        return <li key={ item.id } className='ellipsis'><span className='name'>{ item.name } </span></li>;
    }
  };

  return (
      <div className="topbar">
        <div className="wrap">
          <div className="nav-top margin">
            <h1 className="logo"/>
            <ul className="nav">
              {
                navList && navList.map((item) => <li className="a" key={ item.name }>{ item.name }</li>)
              }
            </ul>
            <div className="search">
              <div className="search-input">
                <i className="iconfont icon-xingtaiduICON_sousuo---copy"/>
                <input type="text" placeholder="音乐/视频/电台/用户" onChange={ handleSearch } defaultValue={ keywords }/>
              </div>
              <div className="result" style={ { display: keywords.length ? 'block' : 'none' } }>
                <p>
                  <Link to={ `/search/?s${ keywords }` }>搜"{ keywords }"相关用户 ></Link>
                </p>
                <div className="item-wrap">
                  {
                    results && results.order?.map(key => {
                      return <div className="item" key={ key }>
                        <div className="item-left">
                          { getIcon(key) }
                        </div>
                        <ul className="item-right">
                          {
                            // @ts-ignore
                            results[key].map((item: { [key: string]: any }) => {
                              return liElent(item, key);
                            })
                          }
                        </ul>
                      </div>;
                    })
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
                { subNav && subNav.map((item, index) => <li key={ item.name }>
                  <span className={ index === checkIndex ? 'check' : '' } onClick={ () => handleJump(index, item.path)  }>{ item.name }</span>
                </li>) }
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default withRouter(Header);
