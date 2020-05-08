import { http } from './axios';

/**
 * 最新专辑
 * */
export const getAlbumNews = () => http.get(`/album/newest`);

/**
 * 新碟上架
 * */
export const getTopAlbum = (params: {
  offset: number,
  limit?: number
}) => http.get(`/top/album`, params);

/**
 * 新碟上架
 * */
export const getAlbum = (id: number) => http.get(`/album?id=${ id }`);