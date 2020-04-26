import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import PlaylistTop from '@/components/PlaylistTop';
import PlayRelated from '@/components/PlayRelated';
import Comments from '@/components/Comments';
import SongList from '@/components/SongList';
import Likes from '@/components/Likes';
import { parseQuery } from '@/utils/utils';
import { getPlaylistDetail, getPlaylistComment, getPlaylistRelated } from '@/apis/playlist';
import './style.scss';


const PlaylistPage = () => {
  const [ tracks, setTracks ] = useState<any>();
  const [ subscribers, setSubscribers ] = useState<any>('');
  const [ creator, setCreator ] = useState<any>({});
  const [ playlist, setPlaylist ] = useState<any>({});
  const [ SongData, setSongData ] = useState<any>({});
  const [ relatedList, setRelatedList ] = useState<any>([]);
  const [ comments, setComments ] = useState<any>([]);
  const [ total, setTotal ] = useState<any>(0);

  const local = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    let ignone = false;
    const { id } = parseQuery(local.search);
    if(!id)  history.push('/discover');

    (async function () {
      const result = await getPlaylistDetail({ id: +id });
      const commentsData = await getPlaylistComment(+id);
      const related = await getPlaylistRelated(+id);
      if(!ignone && result.data.code === 200 && related.data.code === 200) {
        const { playlist: { trackCount, name, description, createTime, commentCount, shareCount, subscribedCount, coverImgUrl, subscribers, tracks, playCount, tags, creator } } = result.data;
        const { userId, avatarUrl, nickname } = creator;

        setTracks(tracks);
        setSubscribers(subscribers);
        setCreator({ userId, avatarUrl, nickname });
        setPlaylist({
          name,
          description,
          coverImgUrl,
          shareCount,
          commentCount,
          subscribedCount,
          tags,
          createTime
        });
        setSongData({ playCount, trackCount });
        setRelatedList(related.data.playlists);
        setTotal(commentsData.data.total);
        setComments([...commentsData.data.hotComments, ...commentsData.data.comments]);
      }
    })();

    return (() => {
      ignone = true;
    });
  }, [local]);
  return (
      <div className="playlist">
        <div className="playlist-left">
          <PlaylistTop { ...playlist } { ...creator}/>
          {/*<SongList tracks={ tracks } { ...SongData }/>*/}
          <Comments comments={ comments } total={ total }/>
        </div>
        <div className="playlist-right">
          <Likes subscribers={ subscribers }/>
          <PlayRelated relatedList={ relatedList }/>
        </div>
      </div>
  );
};

export default PlaylistPage;
