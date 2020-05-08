export type albumsType = {
  name: string,
  picUrl: string,
  id: number,
  nickname: string
};

export type tempAlbumsType = {
  "songs": string[] | [],
  "paid": boolean,
  "onSale": boolean,
  "mark": number,
  "commentThreadId": string,
  "briefDesc": string,
  "publishTime": number,
  "company": string,
  "tags": string,
  "status": number,
  "blurPicUrl": string,
  "companyId": number,
  "alias": string[] | [],
  "artists": [
    {
      "img1v1Id": number,
      "topicPerson": number,
      "albumSize": number,
      "followed": boolean,
      "img1v1Url": string,
      "briefDesc": string,
      "musicSize": number,
      "alias": string[] | [],
      "picId": number,
      "trans": string,
      "picUrl": string,
      "name": string,
      "id": number,
      "img1v1Id_str": string
    }
  ],
  "copyrightId": number,
  "picId": number,
  "artist": {
    "img1v1Id": number,
    "topicPerson": number,
    "albumSize": number,
    "followed": boolean
    "img1v1Url": string,
    "briefDesc": "",
    "musicSize": number,
    "alias": string[] | [],
    "picId": number,
    "trans": string,
    "picUrl": string,
    "name": string,
    "id": number,
    "picId_str": string,
    "img1v1Id_str": string
  },
  "pic": number,
  "picUrl": string,
  "subType": string,
  "description": string,
  "name": string,
  "id": number,
  "type": string,
  "size": number,
  "picId_str": string
};