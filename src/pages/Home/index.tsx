import React, { Component } from 'react';
import { HashRouter, Router, Route, Switch, Link } from 'react-router-dom';


import './style.scss';
import a from '@/static/images/galsang.png';

import Header from '@/components/Header';


type HomeComponentStateType = {
  navList: Array<{
    name: string,
    path?: string
  }>,
  subNav: object[]
};

class Home extends Component<any, any> {
  constructor(props: any) {
    super( props );
    this.state = {
      navList: [
        {
          name: '发现音乐',
          path: '/'
        },
        {
          name: '我的音乐',
          path: '/my'
        },
        {
          name: '朋友',
          path: '/friend'
        }
      ],
      subNav: [
        { name: '推荐', path: '/discover' },
        { name: '排行榜', path: '/discover/toplist' },
        { name: '歌单', path: '/discover/playlist' },
        { name: '主播电台', path: '/discover/djradio' },
        { name: '歌手', path: '/discover/artist' },
        { name: '新碟上架', path: '/discover/album' }
      ]
    };
  }

  render() {
    const { history } = this.props;
    const { navList, subNav } = this.state;
    return (
        <div>
          <Header navList={ navList } subNav={ subNav }></Header>
        </div>
        // <div className='list'>
        //   测试123
        //   <img width='40' height='40' src={ a } alt=""/>
        //   <Router history={ history }>
        //     <ul>
        //       <li>
        //         <Link to={ '/a' }>a</Link>
        //       </li>
        //       <li>
        //         <Link to={ '/b' }>b</Link>
        //       </li>
        //     </ul>
        //   </Router>
        //
        //
        //   <HashRouter>
        //     <Switch>
        //       <Route path={ '/a' } component={ PageA }></Route>
        //       <Route path={ '/b' } component={ PageB }></Route>
        //       {/*<Redirect to={'/'}/>*/ }
        //     </Switch>
        //   </HashRouter>
        // </div>
    );
  }
}

export default Home;
