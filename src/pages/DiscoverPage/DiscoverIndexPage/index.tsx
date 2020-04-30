import React, { Component } from 'react';

import Banner from '@/components/common/Banner';
import Didcover from '@/components/common/Discover';
import Singers from '@/components/common/Singers';
import { HomeComponentStateType } from '@/types/home';
import { getBannerService } from '@/service/homeService';
import { cancel } from '@/apis/axios';
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

  componentWillUnmount(): void {
    cancel('取消请求');
  }

  render() {
    const { banners } = this.state;
    return (
      <>
        <Banner banners={ banners }></Banner>
        <div className="discover-cont margin">
          <Didcover/>
          <Singers/>
        </div>
      </>
    );
  }
}

export default DiscoverPage;
