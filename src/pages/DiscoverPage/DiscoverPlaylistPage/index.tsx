import React, { useEffect, useState } from 'react';
import { useLocation, useHistory, RouteComponentProps } from 'react-router-dom';

import PlaylistTop from '@/components/PlaylistTop';
import PlayRelated from '@/components/PlayRelated';
import Comments from '@/components/Comments';
import SongList from '@/components/SongList';
import Paging from '@/components/Paging';
import Likes from '@/components/Likes';
import { parseQuery } from '@/utils/utils';
import { getPlaylistDetail, getPlaylistComment, getPlaylistRelated } from '@/apis/playlist';

import './style.scss';


const DiscoverPlaylistPage = () => {
  return(
      <>
        DiscoverPlaylistPage
      </>
      )
};

export default DiscoverPlaylistPage;
