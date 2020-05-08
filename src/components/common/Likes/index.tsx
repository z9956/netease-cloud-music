import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type LikesComponentPropType = {};
import './style.scss';

const Likes: FC<any> = props => {
  const { subscribers } = props;

  return (
    <div className="likes">
      <h3>喜欢这个歌单的人</h3>
      <ul className="like-list">
        {
          subscribers && subscribers.map((item: any, index: number) => {
            return <li key={ item.userId } className={ index === 0 || index === 4 ? 'none' : '' }>
              <Link to={ `/user/home?id=${ item.userId }` }>
                <img src={ item.avatarUrl } title={ item.nickname }/>
              </Link>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default Likes;