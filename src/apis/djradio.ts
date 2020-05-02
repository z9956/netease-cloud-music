import { http } from '@/apis/axios';

/**
 * 所有榜单
 * */
export const getDjCateList = () => http.get(`/dj/catelist`);

/**
 * 推荐节目
 * */
export const getDjRecommend = () => http.get(`/program/recommend`);

/**
 * 电台-节目榜
 * */
export const getProgramTopList = (params: {
    limit?: number,
    offset?: number
}) => http.get(`/dj/program/toplist?limit=1`, params);
