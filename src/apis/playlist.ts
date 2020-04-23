import { http } from '@/apis/axios';

/**
 * 歌单评论
 * @param { number } id  歌单id
 * */
export const getPlaylistComment = (id: number) => http.get(`/comment/playlist?id=${ id }`);

/**
 * 获取歌单详情
 * @param { number } id  歌单id
 * */
export const getPlaylistDetail = (id: number) => http.get(`/playlist/detail?id=${ id }`);

/**
 * 相关歌单推荐
 * @param { number } id  歌单id
 * */
export const getPlaylistRelated = (id: number) => http.get(`/related/playlist?id=${ id }`);

/**
 * 歌单收藏着
 * @param { number } id 歌单id
 * @param { number } limit 数量
 * @param params
 * */
export const getPlaylistSubscribers = (params: {
  id: number,
  limit?: number
}) => http.get(`/playlist/subscribers`, params);