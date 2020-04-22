import axios from 'axios';
import { getRecommendPlaylists, getNewAlbum, getBanner, getKeywords, getNewest, getTopList, getSingers } from '@/apis/home';

//记得封一个全局的提示 重复代码封装

export const getRecommendService = async() => {
  const res = await getRecommendPlaylists();
  if(res.data?.code) {
    return res.data.result;
  } else {
    alert('网络请求错误');
  }
};

export const getBannerService = async() => {
  const res = await getBanner();
  if(res.data?.code === 200) {
    return res.data.banners;
  } else {
    alert('网络请求错误');
  }
};

export const getNewestService = async() => {
  const res = await getNewest();
  if(res.data?.code === 200) {
    return res.data.albums;
  } else {
    alert('网络请求错误');
  }
};

export const getKeywordsService = async(keywords: string) => {
  const res = await getKeywords(keywords);
  if(res.data?.code === 200) {
    return res.data.result;
  } else {
    alert('网络请求错误');
  }
};

export const getTopListService = async(idx: number) => {
  const res = await getTopList(idx);
  if(res.data?.code === 200) {
    return res.data.playlist;
  } else {
    alert('网络请求错误');
  }
};

export const getAllTopListService = () => {
  return axios.all([
    getTopListService(0),
    getTopListService(1),
    getTopListService(2) ]);
};





