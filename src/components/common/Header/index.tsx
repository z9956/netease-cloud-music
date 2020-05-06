import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { getKeywordsService } from '@/service/homeService';
import { resultsType, navListType } from '@/types/home';
import { phoneLogin, getUserSubCount, getLoginStatus } from '@/apis/user';
import { cookie } from "@/utils/utils";

import './style.scss';

type HeaderComponentType = navListType & RouteComponentProps;


const Header: FC<HeaderComponentType> = props => {
  const { navList, subNav, history } = props;
  const [ keywords, setKeywords ] = useState<string>('');
  const [ LoginStatus, setLoginStatus ] = useState<boolean>(false);
  const [ checkIndex, setIndex ] = useState<number>(0);
  const [ phone, setPhone ] = useState<string>('');
  const [ show, setShow ] = useState<boolean>(false);
  const [ password, setPassword ] = useState<string>('');
  const [ info, setInfo ] = useState<{
    userId: string,
    avatarUrl: string
  }>({ avatarUrl: '', userId: '' });
  const [ results, setResults ] = useState<resultsType>({
    albums: [], artists: [], mvs: [], songs: [], order: []
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeywords(value.replace(/(^\s+)|(\s+$)/g, ''));

    if (!keywords.length) return;

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

    if (!icons[key]) return;

    return (
      <>
        <i className={ `iconfont ${ icons[key][0] }` }/>
        <em>{ icons[key][1] }</em>
      </>
    );
  };

  const handleLogin = async () => {
    try{
      const res = await phoneLogin({ phone: phone, password });
      if (res.data.code === 200) {
        const { token } = res.data;
        cookie.setCookie('MUSIC_U', token);
        setShow(false);
      }
    }catch (e) {
      console.log(e);
    }
  };

  const liElent = (item: { [key: string]: any }, key: string) => {
    if (!item) return;
    let artist = item?.artists || item?.artist;
    switch (key) {
      case 'artists':
        return <li key={ item.id } className='ellipsis'><span className='name'>{ item.name } </span></li>;
      case 'mvs':
        return <li key={ item.id } className='ellipsis'>
          <span>{ `MV:${ item.name }-` } </span>
          <span className='name'>{ item.artistName } </span>
        </li>;
      case 'songs':
        return <li key={ item.id } className='ellipsis'>
          <span>{ `${ item.name }-` } </span>
          <span className='name'>{ artist[0].name } </span>
        </li>;
      case 'albums':
        return <li key={ item.id } className='ellipsis'>
          <span>{ `${ item.name }-` } </span>
          <span className='name'>{ artist.name } </span>
        </li>;
      default:
        return <li key={ item.id } className='ellipsis'><span className='name'>{ item.name } </span></li>;
    }
  };

  const handleUserInfo = async() => {
    const res = await getUserSubCount();
  };

  const handleQuit = () => {
    cookie.delCookie('MUSIC_U');
    setLoginStatus(false);
  };

  const getLoginEle = () => {
    return(<div className="user-info">
      <div className="photos" onClick={ handleLogin }>
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
          <em onClick={ handleQuit }>退出</em>
        </li>
      </ul>
    </div>);
  };

  useEffect(() => {
    let flag = false;
    (async function () {
      const res = await getLoginStatus();
      if (!flag && res.data.code === 200) {
        setLoginStatus(true);
      }
    })();
    return () => { flag = true };
  },[]);

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
                          results[key].map((item: any) => {
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
          {
            LoginStatus ? getLoginEle() : <div onClick={ () => setShow(true) }>登录</div>
          }
        </div>
      </div>
      <div className="wrap sub-wrap">
        <div className="sub-nav margin">
          <div className="nav">
            <ul className="nav-list margin">
              { subNav && subNav.map((item, index) => <li key={ item.name }>
                <span className={ index === checkIndex ? 'check' : '' }
                      onClick={ () => handleJump(index, item.path) }>{ item.name }</span>
              </li>) }
            </ul>
          </div>
        </div>
      </div>
      <div className={ show ? 'login block' : 'login' }>
        <p className="title">
          <span>手机号登陆</span>
          <span onClick={ () => setShow(false) }>X</span>
        </p>
        <p className="user"><input type="text" placeholder={ '请输入手机号' } value={ phone }
                                   onChange={ e => setPhone(e.target.value) }/></p>
        <p className="password"><input type="password" placeholder={ '请输入密码' } value={ password }
                                       onChange={ e => setPassword(e.target.value) }/></p>
        <p>
          <button type="submit" onClick={ handleLogin }>登录</button>
        </p>
      </div>
    </div>

  );
};

export default withRouter(Header);
