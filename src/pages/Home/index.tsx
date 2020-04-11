import React, { Component } from 'react';

import Header from '@/components/Header';
import Banner from '@/components/Banner';
import BackTop from '@/components/BackTop';
import Didcover from '@/components/Discover';
import Singers from '@/components/Singers';
import { navList, subNav } from '@/apis/model';
import { HomeComponentStateType } from '@/types/home';
import { getBannerService } from '@/service/homeService';
import './style.scss';



class Home extends Component<{}, HomeComponentStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      navList,
      subNav,
      banners: []
    };
  }
  componentDidMount(): void {
    getBannerService().then(banners => this.setState({ banners }));
  }

  render() {
    const { navList, subNav, banners } = this.state;
    return (
      <>
        <Header navList={ navList } subNav={ subNav } />
        <Banner banners={ banners }></Banner>
        <div className="cont margin">
          <Didcover/>
          <Singers/>
        </div>
        <BackTop/>
      </>
    );
  }
}

export default Home;
