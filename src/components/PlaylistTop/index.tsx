import React, { FC, useEffect, useState } from 'react';
import { Link, useRouteMatch, useParams, useLocation, withRouter, RouteComponentProps } from 'react-router-dom';

import PlaylistTitle from '@/components/PlaylistTitle';
import { getPlaylistDetail } from '@/apis/playlist';
import { parseQuery } from '@/utils/utils';

import './style.scss';


type PlaylistTopComponentPropType = {};

const PlaylistTop: FC<PlaylistTopComponentPropType> = props => {
  const [ name, setName ] = useState<string>('');
  const [ tags, setTags ] = useState<string>('');
  const [ subscribers, setSubscribers ] = useState<any>('');

  const local = useLocation();

  useEffect( () => {
    let ignone = false;
    const { id } = parseQuery(local.search);
    if(!id) return;

     (async function () {
      const result = await getPlaylistDetail({ id: 924680166 });
      if(!ignone && result.data.code === 200) {
        let { playlist: { name, description, backgroundCoverUrl, titleImageUrl, subscribers } } = result.data;
        setName(name);
        setTags(tags);
      }
    })();

    return (() => { ignone = true });
  }, []);
  return (
      <>
        <img src={ backgroundCoverUrl } alt=""/>
        <PlaylistTitle title={ name }/>
      </>
  );
};

export default PlaylistTop;