import React, { Component, lazy } from 'react';
import { Route, Switch, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

import { navListType } from '@/types/home';
import { navList, subNav } from '@/apis/model';
import { routePath } from '@/route/router';


const BackTop = lazy(() => import('@/components/common/BackTop'));
const Header = lazy(() => import('@/components/common/Header'));
const SongPage = lazy(() => import('@/pages/SongPage'));
const PlaylistPage = lazy(() => import('@/pages/PlaylistPage'));
const DiscoverIndexPage = lazy(() => import('@/pages/DiscoverPage/DiscoverIndexPage'));
const DiscoverPlaylistPage = lazy(() => import('@/pages/DiscoverPage/DiscoverPlaylistPage'));
const DiscoverAlbumPage = lazy(() => import('@/pages/DiscoverPage/DiscoverAlbumPage'));
const DiscoverArtistPage = lazy(() => import('@/pages/DiscoverPage/DiscoverArtistPage'));
const DiscoverDjRadioPage = lazy(() => import('@/pages/DiscoverPage/DiscoverDjRadioPage'));
const DiscoverTopListPage = lazy(() => import('@/pages/DiscoverPage/DiscoverTopListPage'));

class RouterPage extends Component<RouteComponentProps, navListType>{
  constructor(props: any) {
    super(props);
    this.state = {
      navList,
      subNav
    };
  }

  componentDidMount(): void {

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
                component={ DiscoverIndexPage }
            />
            <Route
                path={ routePath.song }
                exact={ true }
                component={ SongPage }
            />
            <Route
                path={ routePath.playlist }
                exact={ true }
                component={ PlaylistPage }
            />
            <Route
                path={ routePath.discover.index }
                render={() => (
                    <Switch>
                      <Route
                          exact={ true }
                          path={ routePath.discover.album }
                          component={ DiscoverAlbumPage }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.artist }
                          component={ DiscoverArtistPage }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.playlist }
                          component={ DiscoverPlaylistPage }
                      />
                      <Route
                          exact={ true }
                          path={ routePath.discover.toplist }
                          component={ DiscoverTopListPage }
                      />
                      <Route
                          path={ routePath.discover.djradio.index }
                          render={ () => (
                              <Switch>
                                  <Route
                                      exact={ true }
                                      path={ routePath.discover.djradio.index }
                                      component={ DiscoverDjRadioPage }
                                  />
                                  <Route
                                    exact={ true }
                                    path={ routePath.discover.djradio.rank }
                                    component={ () => (<div>rank</div>)}
                                  />
                                  <Route
                                      exact={ true }
                                      path={ routePath.discover.djradio.recommend }
                                      component={ () => (<div>recommend</div>)}
                                  />
                                  <Route
                                      exact={ true }
                                      path={ routePath.discover.djradio.category }
                                      component={ () => (<div>category</div>)}
                                  />
                                  <Route
                                      path="*"
                                      render={() => {
                                          return <Redirect to={ routePath.discover.djradio.index } />;
                                      }}
                                  />
                              </Switch>
                          ) }
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