import React, { FC, useEffect } from 'react';
import { Link, useRouteMatch, useParams, useLocation, withRouter, RouteComponentProps } from 'react-router-dom';

import PlaylistTitle from '@/components/PlaylistTitle';
import { getPlaylistDetail } from '@/apis/playlist';
import { parseQuery } from '@/utils/utils';

import './style.scss';


type PlaylistTopComponentPropType = {} & RouteComponentProps;

const PlaylistTop: FC<PlaylistTopComponentPropType> = props => {
  const { match, location, history } = props;
  let search = useRouteMatch();
  let local = useLocation();
  let param = useParams();

  // const getData = async (id: number) => {
  //   const res = await getPlaylistDetail(id);
  // };

  useEffect( () => {
    let ignone = false;
    const { id } = parseQuery(location.search);
    if(!id) return;

     (async function () {
      const result = await getPlaylistDetail(id);
      // if(!ignone)
      console.log(result);
    })();

    return (() => { ignone = true });
  }, []);
  return (
      <>
        {/*<PlaylistTitle title={}/>*/}
      </>
  );
};

export default withRouter(PlaylistTop);