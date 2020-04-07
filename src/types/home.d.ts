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
    alias: [],
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
  result: Array<resultType> | undefined
};
export type resultType = {
  id: number,
  type: number,
  name: string,
  copywriter: string,
  picUrl: string,
  canDislike: boolean,
  trackNumberUpdateTime: number,
  playCount: number,
  trackCount: number,
  highQuality: boolean,
  alg: string
};

export type newAlbumArtistsType = {
  img1v1Id: number,
  topicPerson: number,
  alias: Array<string>,
  picId: number,
  musicSize: number,
  albumSize: number,
  briefDesc: string,
  followed: false
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

export type HomeComponentStateType = navListType & bannersType;

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