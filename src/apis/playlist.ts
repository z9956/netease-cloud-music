import { http } from '@/apis/axios';

/**
 * 歌单评论
 * @param { number } id  歌单id
 * */
export const getPlaylistComment = (id: number) => http.get(`/comment/playlist?id=${ id }`);