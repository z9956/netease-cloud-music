import { http } from "@/apis/axios";

/**
 * 手机登录
 * */

export const phoneLogin = (params: {
    phone: number,
    password: number
}) => {
    return http.get(`/login/cellphone`, params);
};