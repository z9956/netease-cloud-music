import { http } from '@/apis/axios';

/**
 * 所有榜单
 * */
export const getAllToplist = () => http.get(`/toplist`);

/**
 * 所有榜单内容摘要
 * */
export const getAllToplistDetail = () => http.get(`/toplist/detail`);

/**
 * 排行榜
 * @param { number }
 * */
export const getTopList = (idx: number) => http.get(`/top/list?idx=${ idx }`);