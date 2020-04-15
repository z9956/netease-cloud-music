import React, { Component, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { navListType } from '@/types/home';
import { navList, subNav } from '@/apis/model';
import { routePath } from '@/route/router';

const BackTop = lazy(() => import('@/components/BackTop'));
const Header = lazy(() => import('@/components/Header'));
const DiscoverPage = lazy(() => import('@/pages/DiscoverPage'));

class RouterPage extends Component<{}, navListType>{
  constructor(props: any) {
    super(props);
    this.state = {
      navList,
      subNav
    };
  }

  render() {
    const { navList, subNav } = this.state;
    return(
        <>
          <Header navList={ navList } subNav={ subNav } />
          <Switch>
            <Route
                path={ routePath.discover.index }
                exact={ true }
                component={ DiscoverPage }
                render={() => (
                    <Switch>
                      <Route
                          exact={ true }
                          path={ routePath.discover.album }
                          component={ DiscoverPage }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.artist }
                          component={ DiscoverPage }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.djradio }
                          component={ DiscoverPage }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.playlist }
                          component={ DiscoverPage }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.toplist }
                          component={ DiscoverPage }
                      />
                      <Route
                          path="*"
                          render={() => {
                            return <Redirect to={ routePath.discover.index }/>
                          }}
                      />
                    </Switch>
                )}
            />
          </Switch>
          <BackTop/>
        </>
    )
  }
}

export default RouterPage;