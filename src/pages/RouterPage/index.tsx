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
          <Header navList={ navList } subNav={ subNav }/>
          <Switch>
            <Route
                path={ routePath.discover.index }
                exact={ true }
                component={ DiscoverPage }
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

export default  RouterPage;