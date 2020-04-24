import axios from 'axios';

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://101.132.108.7:4000' : 'http://101.132.108.7:4000';

const CancelToken = axios.CancelToken;
export let cancel: any;

export const request = axios.create({
  baseURL: baseUrl,
  // timeout: 10000,
  // headers: {
  //   'Content-Type': 'application/json; charset=utf-8'
  // }
});

export const http = {
  get: (url: string, data?: any) => {
    return request.get(url, {
      cancelToken: new CancelToken(function executor(e) {
        cancel = e;
      }), params: data
    })
  }
}



