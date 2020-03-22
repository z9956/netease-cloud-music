import { http } from './axios';

/**
* 关键字搜索
* @param { string } keywords 关键字
* */
export const getKeywords = (keywords: string) => {
  return http.get(`/search/suggest?keywords=${keywords}`);
};