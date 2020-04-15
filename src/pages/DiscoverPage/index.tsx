import React, { Component } from 'react';

import Banner from '@/components/Banner';
import BackTop from '@/components/BackTop';
import Didcover from '@/components/Discover';
import Singers from '@/components/Singers';
import { HomeComponentStateType } from '@/types/home';
import { getBannerService } from '@/service/homeService';
import './style.scss';



class DiscoverPage extends Component<{}, HomeComponentStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      banners: []
    };
  }
  componentDidMount(): void {
    getBannerService().then(banners => this.setState({ banners }));
  }

  render() {
    const { banners } = this.state;
    return (
      <>
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

export default DiscoverPage;
