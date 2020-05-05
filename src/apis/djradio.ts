import { http } from '@/apis/axios';

/**
 * 所有榜单
 * */
export const getDjCateList = () => http.get(`/dj/catelist`);

/**
 * 推荐节目
 * */
export const getDjRecommend = (limit: number = 10) => http.get(`/program/recommend?limit=${ limit }`);

/**
 * 电台-节目榜
 * */
export const getProgramTopList = (params: {
    idx: number,
    limit?: number,
    offset?: number
}) => http.get(`/dj/program/toplist`, params);

/**
 * 电台-节目榜
 * */
export const getHotRadio = (cateId: number) => http.get(`/dj/radio/hot?cateId=${ cateId }`);

/**
 * 电台-分类推荐
 * */
export const getRecommendType = (type: number) => http.get(`/dj/recommend/type?type=${ type }`);