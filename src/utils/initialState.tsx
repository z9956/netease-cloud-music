import { subType } from "@/types/djradio";

const artists = [
  {
    img1v1Id: 0,
    topicPerson: 0,
    alias: [ '' ],
    picId: 0,
    musicSize: 0,
    albumSize: 0,
    briefDesc: '',
    followed: false,
    img1v1Url: '',
    trans: '',
    picUrl: '',
    name: '',
    id: 0,
    img1v1Id_str: ''
  }
];
export const albumsinit = {
  songs: [],
  paid: false,
  onSale: false,
  mark: 0,
  alias: [],
  artists: artists,
  copyrightId: 0,
  picId: 0,
  artist: artists,
  briefDesc: '',
  publishTime: 0,
  company: '',
  commentThreadId: '',
  picUrl: '',
  blurPicUrl: '',
  companyId: 0,
  pic: 0,
  tags: '',
  status: 0,
  subType: '',
  description: '',
  name: '',
  id: 0,
  type: '',
  size: 0,
  picId_str: ''
};

const creator = {
  defaultAvatar: false,
  province: 0,
  authStatus: 0,
  followed: false,
  avatarUrl: '',
  accountStatus: 0,
  gender: 0,
  city: 0,
  birthday: 0,
  userId: 0,
  userType: 0,
  nickname: '',
  signature: '',
  description: '',
  detailDescription: '',
  avatarImgId: 0,
  backgroundImgId: 0,
  backgroundUrl: '',
  authority: 0,
  mutual: false,
  expertTags: null,
  experts: null,
  djStatus: 0,
  vipType: 0,
  remarkName: null,
  avatarImgIdStr: '',
  backgroundImgIdStr: '',
  avatarImgId_str: ''
};

const h = {
  br: 0,
  fid: 0,
  size: 0,
  vd: 0
};
const tracks = {
  name: '',
  id: 0,
  pst: 0,
  t: 0,
  ar: [
    {
      id: 0,
      name: '',
      tns: [],
      alias: []
    }
  ],
  alia: [],
  pop: 0,
  st: 0,
  rt: '',
  fee: 0,
  v: 0,
  crbt: null,
  cf: '',
  al: {
    id: 0,
    name: '',
    picUrl: '',
    tns: [],
    pic_str: '',
    pic: 0
  },
  dt: 0,
  h: h,
  m: h,
  l: h,
  a: null,
  cd: '',
  no: 0,
  rtUrl: null,
  ftype: 0,
  rtUrls: [],
  djId: 0,
  copyright: 0,
  s_id: 0,
  mark: 0,
  mst: 0,
  cp: 0,
  mv: 0,
  rtype: 0,
  rurl: null,
  publishTime: 0
};
export const rainginit = {
  subscribers: [],
  subscribed: false,
  creator: [ creator ],
  tracks: [ tracks ],
  trackIds: [
    {
      id: 0,
      v: 0,
      alg: null,
      lr: 0
    }
  ],
  updateFrequency: null,
  backgroundCoverId: 0,
  backgroundCoverUrl: null,
  titleImage: 0,
  titleImageUrl: null,
  englishTitle: null,
  opRecommend: false,
  tags: [],
  createTime: 0,
  highQuality: false,
  description: '',
  userId: 0,
  trackCount: 0,
  playCount: 0,
  trackNumberUpdateTime: 0,
  coverImgId: 0,
  newImported: false,
  updateTime: 0,
  coverImgUrl: '',
  specialType: 0,
  commentThreadId: '',
  privacy: 0,
  trackUpdateTime: 0,
  ordered: false,
  subscribedCount: 0,
  cloudTrackCount: 0,
  status: 0,
  adType: 0,
  name: '',
  id: 0,
  shareCount: 0,
  coverImgId_str: '',
  ToplistType: '',
  commentCount: 0
};

export const categoriesInit = {
  "pic96x96Url": '',
  "pic84x84IdUrl": '',
  "pic56x56Url": '',
  "pic96x96IdStr": '',
  "picPCWhiteStr": '',
  "picPCWhiteUrl": '',
  "picPCBlackStr": '',
  "picPCBlackUrl": '',
  "picWebStr": '',
  "picWebUrl": '',
  "picMacId": '',
  "picMacUrl": '',
  "picUWPId": '',
  "picUWPUrl": '',
  "picIPadStr": '',
  "picIPadUrl": '',
  "pic56x56IdStr": '',
  "pic56x56Id": 0,
  "pic96x96Id": 0,
  "picPCWhite": 0,
  "picPCBlack": 0,
  "picWeb": 0,
  "picIPad": 0,
  "pic84x84Id": 0,
  "name": '',
  "id": 0
};

//playlist
export const catListInit = {
  "all": {
    "name": '',
    "resourceCount": 0,
    "imgId": 0,
    "imgUrl": '',
    "type": 0,
    "category": 0,
    "resourceType": 0,
    "hot": '',
    "activity": ''
  },
  "sub": [{
    "name": '',
    "resourceCount": 0,
    "imgId": 0,
    "imgUrl": '',
    "type": 0,
    "category": 0,
    "resourceType": 0,
    "hot": false,
    "activity": false
  }],
  "categories": {
    "0": '',
    "1": '',
    "2": '',
    "3": '',
    "4": ''
  }
};