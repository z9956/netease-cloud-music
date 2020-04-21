import { http } from '@/apis/axios';

/**
 * 获取歌词
 * @param { number } id  音乐id
 * */
export const getLyric = (id: number) => http.get(`/lyric?id=${ id }`);

/**
 * 歌曲评论
 * @param { number } id  音乐id
 * */
export const getMusicComment = (id: number) => http.get(`/comment/music?id=${ id }`);

/**
 * 专辑评论
 * @param { number } id  音乐id
 * */
export const getAlbumComment = (id: number) => http.get(`/comment/album?id=${ id }`);