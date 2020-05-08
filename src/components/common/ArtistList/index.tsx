import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { listType } from "@/types/artist";

type ArtistListComponentPropType = {
  title: string,
  list: Array<listType>
};
import './style.scss';
import { parseQuery } from "@/utils/utils";

const ArtistList: FC<ArtistListComponentPropType> = props => {
  const { title, list } = props;
  const [ checkIndex, setIndex ] = useState<number>(0);
  const [ initial ] = useState<string[]>([ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]);

  const local = useLocation();
  let path = local.pathname;
  const query = parseQuery(local.search);

  const stringQuery = (query: any) => {
    let strQuery = path + '?';
    for (let key in query) {
      strQuery += key + '=' + query[key] + '&';
    }
    return strQuery.substr(0, strQuery.length - 1);
  };

  return (
    <div className="artist-list">
      <h3>{ title ? title : '华语男歌手' }</h3>
      <ul className="initial">
        <li className={ checkIndex === 0 ? 'active' : '' } onClick={ () => setIndex(0) }>
          <Link to={ `${ stringQuery({ ...query, initial: -1 }) }` }>热门</Link>
        </li>
        {
          initial.map((val, index: number) => {
            const state = stringQuery({ ...query, initial: val });
            return <li key={ val } className={ index + 1 === checkIndex ? 'active' : '' }
                       onClick={ () => setIndex(index + 1) }>
              <Link to={ state }>{ val }</Link>
            </li>
          })
        }
        <li className={ checkIndex === initial.length + 1 ? 'active' : '' }
            onClick={ () => setIndex(initial.length + 1) }>
          <Link to={ `${ stringQuery({ ...query, initial: 0 }) }` }>其他</Link>
        </li>
      </ul>
      <ul className="artist-item">
        {
          list && list.map((artist, index) => {
            if (index < 10) {
              return <li key={ artist.id } className="line">
                <div className="cover">
                  <Link to={ `/artist?id=${ artist.id }` }>
                    <img src={ artist.img1v1Url } title={ `${ artist.name }的音乐` }/>
                  </Link>
                </div>
                <p>
                  <Link to={ `/artist?id=${ artist.id }` }> { artist.name }</Link>
                </p>
              </li>
            } else {
              return <li key={ artist.id }>
                <p>
                  <Link to={ `/artist?id=${ artist.id }` }> { artist.name }</Link>
                </p>
              </li>
            }
          })
        }
      </ul>
    </div>
  );
};

export default ArtistList;