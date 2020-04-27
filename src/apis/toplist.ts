import { http } from '@/apis/axios';

/**
 * 所有榜单
 * */
export const getAllToplist = () => http.get(`/toplist`);