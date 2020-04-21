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
export const getBanner = (type: number = 0) => http.get(`/banner?type=${ type }`);

/**
 * 推荐歌单
 * @param { number } limit 去除数量，默认为30(不支持offset)
 * */
export const getRecommendPlaylists = (limit: number = 8) => http.get(`/personalized?limit=${ limit }`);

/**
 * 歌单(网友精选碟)
 * @param { string } cat 歌单tag
 * @param { string } order new | hot
 * @param { number } limit 数量
 * @param params
 * */
export const getPlaylist = (
    params: {
      cat?: string,
      limit: number,
      orader?: string
    }) => {
  return http.get(`/top/playlist`, { params });
};

/**
 * 获取歌单分类,包含 category 信息
 * */
export const getHotPlaylist = () => http.get(`/playlist/hot`);

/**
 * 获取歌单分类,包含 category 信息
 * @param { number } offset 偏移数量，用于分页，默认为0
 * @param { number } limit 取出数量，默认为50
 * @param params
 * */
export const getNewAlbum = ( params: {
  limit: number,
  offset?: number
}) => http.get(`/top/album`, { params });

/**
 * 最新专辑
 * */
export const getNewest = () => http.get(`/album/newest`);

/**
 * 所有榜单内容摘要
 * */
export const getTopListDetail = () => http.get(`/toplist/detail`);

/**
 * 排行榜
 * @param { number } idx 排行榜key
 * */
export const getTopList = (idx: number) => http.get(`/top/list?idx=${ idx }`);

/**
 * 歌手分类列表
 * */
export const getSingers = (params: {
  cat: number,
  limit: number
}) => http.get(`/artist/list`, params);

/**
 * 电台 最热主播榜
 * @param { number } limit 数量
 * */
export const getDjPopular = (limit: number) => http.get(`/dj/toplist/popular?limit=${ limit }`);

