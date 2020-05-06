import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ArtistList from "@/components/common/ArtistList";
import { getArtistList } from '@/apis/artist';
import { artistNav } from '@/apis/model'
import { listType } from "@/types/artist";
import './style.scss';
import { parseQuery } from "@/utils/utils";

type ArtistComponentPropType = {};

const ArtistComponent: FC<ArtistComponentPropType> = props => {
  const [ title, setTitle ] = useState<string>('');
  const [ artists, setArtists ] = useState<Array<listType>>([]);

  const local = useLocation().search;

  useEffect(() => {
    const params = local ? parseQuery(local) :  { limit: 100 };
    let flag = false;
    (async function () {
      const res = await getArtistList({ ...params, limit: 100});
      if (!flag && res.data.code === 200) setArtists(res.data.artists);
    })();
  },[local]);

  const handleChangeTitle = (title: string, index: number) => setTitle(title);

  return(
    <div className="artist-wrap">
      <div className="artist-nav">
        {
          artistNav.map(item => {
            return <div key={ item.name }>
              <h3>{ item.name }</h3>
              {
                <ul>
                  {
                    item.list.map((nav, index) => {
                      return <li key={ nav.path } onClick={ () =>  handleChangeTitle(nav.name, index) } className={ nav.name === title ? 'active' : '' }>
                        <Link to={ `/discover/artist?${ nav.path }` }>{ nav.name }</Link>
                      </li>
                    })
                  }
                </ul>
              }
            </div>
          })
        }
      </div>
      <ArtistList title={ title } list={ artists }/>
    </div>
  );
};

export default ArtistComponent;