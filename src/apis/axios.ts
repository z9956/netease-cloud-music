import axios from 'axios';

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

// 暂时就设置个baseUrl,别的封装在说
export const http = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  // headers: {
  //   'Content-Type': 'application/json; charset=utf-8'
  // }
});
