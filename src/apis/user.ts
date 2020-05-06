import { http } from "@/apis/axios";

/**
 * 手机号登录
 * */

export const phoneLogin = (params: {
    phone: string,
    password: string
}) => {
    return http.get(`/login/cellphone`, params);
};

/**
 * 获取用户信息，歌单，收藏，mv，dj数量
 * */

export const getUserSubCount = () => http.get(`/user/subcount`);