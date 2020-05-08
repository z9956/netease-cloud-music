//Header
export type artistType = {
  id: number,
  name: string,
  picUrl: string,
  alias: Array<string> | [],
  albumSize: number,
  picId: number,
  img1v1Url: string,
  img1v1: number,
  trans: string | null,
  accountId?: number
};

export type albumsType = {
  id: number,
  name: string,
  artist: Array<artistType>,
  publishTime: number,
  size: number,
  copyrightId: number
  status: number
  picId: number
  mark: number
};

export type resultsType = {
  order: Array<string>,
  albums: Array<albumsType>,
  artists: Array<artistType>,
  songs: Array<{
    id: number,
    name: string,
    artists: Array<artistType>,
    album: Array<artistType>,
    duration: number,
    copyrightId: number,
    status: number,
    alias: Array<string> | [],
    rtype: number,
    ftype: number,
    mvid: number,
    fee: number,
    rUrl: string | null,
    mark: number
  }>,
  mvs: Array<{
    id: number,
    cover: string,
    name: string,
    playCount: number,
    briefDesc: string,
    desc: null,
    artistName: string,
    artistId: number,
    duration: number,
    mark: number,
    transNames: string | null,
    alias: string | null,
    artists: Array<{
      id: number,
      name: string,
      alias: Array<string>
    }>,
    subed: boolean,
    mv: {
      authId: number,
      status: number,
      id: number,
      title: string,
      subTitle: string | null,
      appTitle: string | null,
      aliaName: string | null,
      transName: string | null,
      pic4v3: number,
      pic16v9: number,
      caption: number,
      captionLanguage: string,
      style: string,
      mottos: string | null,
      oneword: string | null,
      appword: string,
      stars: string | null,
      desc: string,
      area: string,
      type: string,
      subType: string,
      neteaseonly: number,
      upban: number,
      topWeeks: null,
      publishTime: string,
      online: number,
      score: number,
      plays: number,
      monthplays: number,
      weekplays: number,
      dayplays: number,
      fee: number,
      artists: Array<{
        id: number,
        name: string
      }>,
      videos: Array<{
        tagSign: {
          br: number,
          type: string,
          tagSign: string,
          resolution: number,
          mvtype: string
        },
        tag: string,
        url: string,
        duration: number,
        size: number,
        width: number,
        height: number
        container: string,
        md5: string,
        check: boolean
      }>
    }
  }>
};

export type navListType = {
  navList: Array<{
    name: string,
    path: string
  }>,
  subNav: Array<{
    name: string,
    path: string
  }>
};
export type hotResultType = {
  path?: string,
  result: Array<resultType>,
  titleShow?: boolean
};
export type resultType = {
  id: number,
  type?: number,
  name: string,
  copywriter?: string,
  picUrl: string,
  canDislike?: boolean,
  trackNumberUpdateTime?: number,
  playCount?: number,
  trackCount?: number,
  highQuality?: boolean,
  alg?: string,
  nickname?: string
};

export type newAlbumArtistsType = {
  img1v1Id: number,
  topicPerson: number,
  alias: Array<string>,
  picId: number,
  musicSize: number,
  albumSize: number,
  briefDesc: string,
  followed: boolean,
  img1v1Url: string,
  trans: string,
  picUrl: string,
  name: string,
  id: number,
  img1v1Id_str: string
};

export type newAlbumAlbumsType = {
  songs: Array<string> | [],
  paid: boolean,
  onSale: boolean,
  mark: number,
  alias: Array<string> | [],
  artists: Array<newAlbumArtistsType>,
  copyrightId: number,
  picId: number,
  artist: Array<newAlbumArtistsType>,
  briefDesc: string,
  publishTime: number,
  company: string,
  commentThreadId: string,
  picUrl: string,
  blurPicUrl: string,
  companyId: number,
  pic: number,
  tags: string,
  status: number,
  subType: string,
  description: string,
  name: string,
  id: number,
  type: string,
  size: number,
  picId_str: string
};

export type newAlbumType = {
  albums: Array<newAlbumAlbumsType>
};

export type HomeComponentStateType = bannersType;

//Banner
export type bannersType = {
  banners: Array<{
    imageUrl: string,
    targetId: number,
    adid: string | null,
    targetType: number,
    titleColor: string,
    typeTitle: string,
    url: string | null,
    exclusive: boolean,
    monitorImpress: string | null,
    monitorClick: string | null,
    monitorType: string | null,
    monitorImpressList: string | null,
    monitorClickList: string | null,
    monitorBlackList: string | null,
    extMonitor: string | null,
    extMonitorInfo: string | null,
    adSource: string | null,
    adLocation: string | null,
    adDispatchJson: string | null,
    encodeId: string,
    program: string | null,
    event: string | null,
    video: string | null,
    song: string | null,
    scm: string
  }>
};

export type creatorType = {
  defaultAvatar: boolean,
  province: number,
  authStatus: number,
  followed: boolean,
  avatarUrl: string,
  accountStatus: number,
  gender: number,
  city: number,
  birthday: number,
  userId: number,
  userType: number,
  nickname: string,
  signature: string,
  description: string,
  detailDescription: string,
  avatarImgId: number,
  backgroundImgId: number,
  backgroundUrl: string,
  authority: number,
  mutual: boolean,
  expertTags: string | null,
  experts: string | null,
  djStatus: number,
  vipType: number,
  remarkName: string | null,
  avatarImgIdStr: string,
  backgroundImgIdStr: string,
  avatarImgId_str: string
};

export type hType = {
  br: number,
  fid: number,
  size: number,
  vd: number
};
export type tracksType = {
  name: string,
  id: number,
  pst: number,
  t: number,
  ar: Array<{
    id: number,
    name: string,
    tns: Array<string> | [],
    alias: Array<string> | []
  }>
  alia: Array<string> | [],
  pop: number,
  st: number,
  rt: string,
  fee: number,
  v: number,
  crbt: string | null,
  cf: string,
  al: {
    id: number,
    name: string,
    picUrl: string,
    tns: Array<string> | [],
    pic_str: string,
    pic: number
  },
  dt: number,
  h: hType
  m: hType
  l: hType
  a: string | null,
  cd: string,
  no: number,
  rtUrl: string | null,
  ftype: number,
  rtUrls: Array<string> | [],
  djId: number,
  copyright: number,
  s_id: number,
  mark: number,
  mst: number,
  cp: number,
  mv: number,
  rtype: number,
  rurl: string | null,
  publishTime: number
};

export type raingType = {
  subscribers: Array<string> | [],
  subscribed: boolean,
  creator: Array<creatorType>,
  tracks: Array<tracksType>,
  trackIds: Array<{
    id: number,
    v: number,
    alg: string | null,
    lr?: number,
  }>,
  updateFrequency: string | null,
  backgroundCoverId: number,
  backgroundCoverUrl: string | null,
  titleImage: number,
  titleImageUrl: null
  englishTitle: null
  opRecommend: boolean,
  tags: Array<string> | [],
  createTime: number,
  highQuality: boolean,
  description: string,
  userId: number,
  trackCount: number,
  playCount: number,
  trackNumberUpdateTime: number,
  coverImgId: number,
  newImported: boolean,
  updateTime: number,
  coverImgUrl: string,
  specialType: number,
  commentThreadId: string,
  privacy: number,
  trackUpdateTime: number,
  ordered: boolean,
  subscribedCount: number,
  cloudTrackCount: number,
  status: number,
  adType: number,
  name: string,
  id: number,
  shareCount: number,
  coverImgId_str: string,
  ToplistType: string,
  commentCount: number
};

export type singersDataType = Array<{
  id: number,
  rank: number,
  lastRank: number,
  score: number,
  nickName: string,
  avatarUrl: string,
  userType: number
}>;
export type singersSingersType = Array<{
  img1v1Id: number,
  topicPerson: number,
  followed: boolean,
  musicSize: number,
  alias: string[] | [],
  trans: string,
  albumSize: number,
  img1v1Url: string,
  picUrl: string,
  briefDesc: string,
  picId: number,
  name: string,
  id: number,
  accountId: number,
  picId_str: string,
  img1v1Id_str: string
}>;