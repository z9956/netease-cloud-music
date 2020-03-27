import React, { Component } from 'react';

import Header from '@/components/Header';
import './style.scss';


class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      navList: [
        {
          name: '发现音乐',
          path: '/',
        },
        {
          name: '我的音乐',
          path: '/my',
        },
        {
          name: '朋友',
          path: '/friend',
        },
        {
          name: '商城',
          path: 'https://music.163.com/store/product',
        },
        {
          name: '音乐人',
          path: 'https://music.163.com/nmusician/web/index#/',
        },
        {
          name: '下载客户端',
          path: 'https://music.163.com/#/download',
        },
      ],
      subNav: [
        { name: '推荐', path: '/discover' },
        { name: '排行榜', path: '/discover/toplist' },
        { name: '歌单', path: '/discover/playlist' },
        { name: '主播电台', path: '/discover/djradio' },
        { name: '歌手', path: '/discover/artist' },
        { name: '新碟上架', path: '/discover/album' },
      ],
    };
  }

  render() {
    const { navList, subNav } = this.state;
    return (
      <div>
        <Header navList={navList} subNav={subNav} />
      </div>
    );
  }
}

export default Home;
