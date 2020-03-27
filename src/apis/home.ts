import { http } from './axios';

/**
* 关键字搜索
* @param { string } keywords 关键字
* */
export const getKeywords = (keywords: string) => http.get(`/search/suggest?keywords=${keywords}`);

export const text = 1;
