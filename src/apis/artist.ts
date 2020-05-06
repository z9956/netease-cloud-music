import { http } from './axios';

/**
 * 热门歌手
 * */
export const getTopArtists = (params: {
  offset?: number,
  limit?: number
}) => http.get(`/top/artists`, params);

/**
 * 歌手分类列表
 * */
export const getArtistList = (params?: {
  type?: number,
  area?: number,
  initial?: string,
  limit?: number
}) => {
  return http.get(`/artist/list`, params);
};

