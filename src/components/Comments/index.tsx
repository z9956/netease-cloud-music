import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type CommentsComponentPropType = {};
import './style.scss';
import { Simulate } from 'react-dom/test-utils';
import emptied = Simulate.emptied;

const Comments: FC<any> = props => {
  const { comments, total } = props;

  const getDate = (date: Date) => {
    date = new Date(date);
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    return `${ M }月${ D }日 ${ h }${ m }`
  };

  console.log(comments);
  return (
      <div className="comments-wrap">
        <div className="title">
          <h3>评论</h3>
          <span>共{ total }条评论</span>
        </div>
        <div className="comments-list">
          <div className="user-comments">
            <div className="user-img">
              <img src={ `http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50` } alt=""/>
            </div>
            <div className="user-text">
              <div className="text-wrap">
                <textarea placeholder='评论'></textarea>
              </div>
              <div className="btns">
                <span>140</span>
                <button>评论</button>
              </div>
            </div>
          </div>
          <div className="commts">
            <h3>精彩评论</h3>
            {
              comments && comments.map((comment: any) => {
                return <div className="item" key={ comment.user.userId + comment.commentId }>
                  <div className="head">
                    <Link to={ `/user/home?id=${ comment.user.userId }` }>
                      <img src={ comment.user.avatarUrl } alt=""/>
                    </Link>
                  </div>
                  <div className="cont">
                    <p className="cont-head">
                      <Link to={ `/user/home?id=${ comment.user.userId }` }>{ comment.user.nickname }</Link>: { comment.content }
                    </p>
                    {
                      comment.beReplied && comment.beReplied.map((replied: any) => {
                        if(replied.content) {
                          return <div className="replied" key={ replied.user.userId }>
                            <Link to={ `/user/home?id=${ replied.user.userId }` }>{ replied.user.nickname }</Link>: { replied.content }
                          </div>
                        }

                      })
                    }
                    <div className="cont-info">
                      <div>{ getDate(comment.time) }</div>
                      <div>
                        <span>
                          <i className="iconfont icon-dianzan1"></i>
                          {/*<i className="iconfont icon-dianzan"></i>*/}
                          <em>{ comment.likedCount !== 0 ? `(${ comment.likedCount })` : '' }</em>
                        </span>
                        <span>回复</span>
                      </div>
                    </div>
                  </div>
                </div>;
              })
            }
          </div>
        </div>
      </div>
  );
};

export default Comments;