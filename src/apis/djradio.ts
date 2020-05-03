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
    idx: number,
    limit?: number,
    offset?: number
}) => http.get(`/dj/program/toplist`, params);
