import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type CommentsComponentPropType = {};

import './style.scss';

const Comments: FC<any> = props => {
  const { comments, hotComments, total, hotShow } = props;

  const getDate = (date: Date) => {
    date = new Date(date);
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    return `${ M }月${ D }日 ${ h }${ m }`;
  };

  const handleContent = (content: any, userId: number, nickname: string) => {
    const imgElE = "<img width={ 40 } height={ 40 } src='http://s1.music.126.net/style/web2/emt/emoji_33.png' alt='' align='center'/>";

    return `<a href='/user/home?id=${ userId }'>${ nickname }</a>:${ content.replace(/\[爱心\]/g, imgElE) }`;
  };

  const handleData = (comments: any, type: number) => {
    return (
        <>
          { type ? <h3>精彩评论</h3> : <h3>最新评论({ total })</h3> }
          {
            comments.map((comment: any) => {
              return <div className="item" key={ comment.user.userId + comment.commentId }>
                <div className="head">
                  <Link to={ `/user/home?id=${ comment.user.userId }` }>
                    <img src={ comment.user.avatarUrl } alt=""/>
                  </Link>
                </div>
                <div className="cont">
                  <div className="cont-head" dangerouslySetInnerHTML={ { __html: handleContent(comment.content, comment.user.userId, comment.user.nickname) } }></div>
                  {
                    comment.beReplied && comment.beReplied.map((replied: any) => {
                      if(replied.content) {
                        return <div className="replied" key={ replied.user.userId } dangerouslySetInnerHTML={ { __html: handleContent(replied.content, comment.user.userId, replied.user.nickname) } }></div>;
                      }else {
                        return <div className="replied" key={ replied.user.userId }>该评论已删除</div>;
                      }
                    })
                  }
                  <div className="cont-info">
                    <div>{ getDate(comment.time) }</div>
                    <div>
                        <span>
                          <i className="iconfont icon-dianzan1"></i>
                          {/*<i className="iconfont icon-dianzan"></i>*/ }
                          <em>{ comment.likedCount !== 0 ? `(${ comment.likedCount })` : '' }</em>
                        </span>
                      <span>回复</span>
                    </div>
                  </div>
                </div>
              </div>;
            })
          }
        </>

    );

  };

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
            {
              hotShow && handleData(hotComments, 1)
            }
            {
              comments && handleData(comments, 0)
            }
          </div>
        </div>
      </div>
  );
};

export default Comments;