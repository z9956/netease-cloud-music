import Url from 'url';

import { ids } from '@/apis/model';

/**
 * url转对象
 * @param { string } url 地址
 * */
export const parseQuery = (url: string) => Url.parse(url, true).query;

/**
 * 获取时间
 * @param { number } createTime 时间戳
 * */
export const getDate = (createTime: number) => {
  try {
    return new Date(createTime).toISOString().split('T')[0];
  } catch (e) {
    console.log(e);
  }
};

export const getIdx = (name: string) => ids.indexOf(name);

export const cookie = {
  getCookie(key: any) {
    const data = document.cookie
    let startIndex = data.indexOf(key + '=');
    if (startIndex > -1) {
      startIndex = startIndex + key.length + 1;
      let endIndex = data.indexOf(';', startIndex);
      endIndex = endIndex < 0 ? data.length : endIndex;
      return decodeURIComponent(data.substring(startIndex, endIndex));
    } else {
      return '';
    }
  },
  setCookie(key: any, value: any, time?: any) {
    const times = time;
    const cur = new Date();
    cur.setTime(cur.getTime() + times * 24 * 3600 * 1000);
    document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + (times === undefined ? '' : cur.toUTCString());
  },
  delCookie(key: any) {
    const data = this.getCookie(key);
    if ((data as any) !== false) {
      this.setCookie(key, data, -1);
    }
  }
};

//解决监听localStorage问题
const orignalSetItem = localStorage.setItem;
localStorage.setItem = function (key, newValue) {
  const setItemEvent: Event & { newValue?: string, key?: string } = new Event("setItemEvent");
  setItemEvent.newValue = newValue;
  setItemEvent.key = key;
  window.dispatchEvent(setItemEvent);

  // @ts-ignore
  orignalSetItem.apply(this, arguments);
};

export const playMusic = (type: string, id: number) => {
  localStorage.setItem(type, JSON.stringify(id));
};
