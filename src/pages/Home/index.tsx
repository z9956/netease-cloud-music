import React, { Component } from 'react';

import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Hot from '@/components/Hot';
import { HomeComponentStateType } from '@/types/home';
import { getBanner, getRecommendPlaylists } from '@/apis/home';
import './style.scss';



class Home extends Component<{}, HomeComponentStateType> {
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
      banners: [],
      result: []
    };
  }
  componentDidMount(): void {
    getBanner().then(res => {
      if(res.data.code === 200) {
        this.setState({ banners: res.data.banners });
      }
    });
    getRecommendPlaylists().then(res => {
      if(res.data.code === 200) {
        this.setState({result: res.data.result});
      }
    });
  }

  render() {
    const { navList, subNav, banners, result } = this.state;
    return (
      <div>
        <Header navList={ navList } subNav={ subNav } />
        <Banner banners={ banners }></Banner>
        <div className="cont margin">
          <Hot result={ result }></Hot>
        </div>
      </div>
    );
  }
}

export default Home;
