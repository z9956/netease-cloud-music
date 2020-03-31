import { http } from './axios';

/**
* 关键字搜索
* @param { string } keywords 关键字
* */
export const getKeywords = (keywords: string) => http.get(`/search/suggest?keywords=${ keywords }`);

/**
 * 歌手热门50首歌曲
 * @param { string } id 歌手id
 * */
export const getArtistSongs = (id: string) => http.get(`/artist/top/song?id=${ id }`);

/**
 * 获取banner数据
 * @param { number } type 资源类型
 * 0: pc
 * 1: android
 * 2: iphone
 * 3: ipad
 * */
export const getBanner = (type?: number) => http.get(`/artist/top/song?id=${ type }`);

/**
 * 推荐歌单
 * @param { number } limit 去除数量，默认为30(不支持offset)
 * */
export const getRecommendPlaylists = (limit: number = 8) => http.get(`/personalized?limit=${ limit }`);
