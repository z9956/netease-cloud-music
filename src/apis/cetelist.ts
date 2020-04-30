import { http } from '@/apis/axios';

/**
 * 所有榜单
 * */
export const getDjCateList = () => http.get(`/dj/catelist`);