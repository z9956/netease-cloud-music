import Url from 'url';

export const parseQuery = (url: string) => Url.parse(url, true).query;