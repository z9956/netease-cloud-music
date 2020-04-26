import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type PlayRelatedComponentPropType = {};
import './style.scss';

const PlayRelated: FC<any> = props => {
  const { relatedList } = props;

  return (
      <div className="related-wrap">
        <h3>相关推荐</h3>
        <ul className="related-list">
          {
            relatedList && relatedList.map((related: any) => {
              return <li key={ related.id }>
                <div className="cover">
                  <Link to={ `/playlist?id=${ related.id }` }>
                    <img src={ related.coverImgUrl } alt="" title={ related.name }/>
                  </Link>
                </div>
                <div className="info">
                  <p className="ellipsis"><Link to={ `/playlist?id=${ related.id }` }>{ related.name }</Link></p>
                  <p className="ellipsis">
                    <span>by</span>
                    <Link to={ `/${ related.creator.userId }` }>
                      { related.creator.nickname }
                    </Link>
                  </p>
                </div>
              </li>;
            })
          }
        </ul>
      </div>
  );
};

export default PlayRelated;