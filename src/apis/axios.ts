import axios, { AxiosRequestConfig } from 'axios';

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://101.132.108.7:4000' : 'http://101.132.108.7:4000';

const CancelToken = axios.CancelToken;
export let cancel: any;

export const request = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  // headers: {
  //   // 'Content-Type': 'application/json; charset=utf-8'
  // }
});

request.defaults.withCredentials = true;

// request.interceptors.request.use((config: AxiosRequestConfig)  => {
//   let token = cookie.getCookie('MUSIC_U');
//   if (token) {
//     config.headers.Authorization = `MUSIC_U ${token}`
//   }
//   return config;
// },err => {
//   return Promise.reject(err);
// });

// request.interceptors.request.use(function (config) {
//   return config
// }, function (error) {
//   return Promise.reject(error);
// });


export const http = {
  get: (url: string, data?: any) => {
    return request.get(url, {
      cancelToken: new CancelToken(function executor(e) {
        cancel = e;
      }), params: data
    })
  }
}





