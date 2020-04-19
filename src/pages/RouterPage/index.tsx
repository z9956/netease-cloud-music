import React, { Component, lazy } from 'react';
import { Route, Switch, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

import { navListType } from '@/types/home';
import { navList, subNav } from '@/apis/model';
import { routePath } from '@/route/router';
import { cancel } from '@/apis/axios';

const BackTop = lazy(() => import('@/components/BackTop'));
const Header = lazy(() => import('@/components/Header'));
const DiscoverPage = lazy(() => import('@/pages/DiscoverPage'));
const SongPage = lazy(() => import('@/pages/SongPage'));

class RouterPage extends Component<RouteComponentProps, navListType>{
  constructor(props: any) {
    super(props);
    this.state = {
      navList,
      subNav
    };
  }

  componentDidMount(): void {
    console.log(this.props.history);
  }

  componentDidUpdate(prevProps: Readonly<RouteComponentProps>, prevState: Readonly<navListType>, snapshot?: any): void {
    console.log(this.props.history);

  }

  render() {
    const { navList, subNav } = this.state;
    return(
        <>
          <Header navList={ navList } subNav={ subNav }/>
          <Switch>
            <Route
                path={ routePath.discover.index }
                exact={ true }
                component={ DiscoverPage }
            />
            <Route
                path={ routePath.song }
                exact={ true }
                component={ SongPage }
            />
            <Route
                path={ routePath.discover.index }
                render={() => (
                    <Switch>
                      <Route
                          exact={ true }
                          path={ routePath.discover.album }
                          component={ () =>(<div>album</div>) }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.artist }
                          component={ () =>(<div>artist</div>) }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.djradio }
                          component={ () =>(<div>djradio</div>) }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.toplist }
                          component={ () =>(<div>toplist</div>) }
                      />
                    </Switch>
                )}
            />
            <Route
                path="/"
                render={() => {
                  return <Redirect to={ routePath.discover.index }/>
                }}
            />
          </Switch>
          <BackTop/>
        </>
    )
  }
}

export default  withRouter(RouterPage);