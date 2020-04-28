import Url from 'url';

import { ids } from '@/apis/model';

export const parseQuery = (url: string) => Url.parse(url, true).query;

export const getDate = (createTime: number) => {
  try {
    return new Date(createTime).toISOString().split('T')[0];
  } catch(e) {
    console.log(e);
  }
};

export const getIdx = (name:string) => ids.indexOf(name);