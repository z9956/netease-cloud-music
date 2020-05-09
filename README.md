> 后台接口

网易云音乐NodeJS版API <br/>
https://binaryify.github.io/NeteaseCloudMusicApi/#/

> 目标
>
>
1、pd端(pc端大致完成，接下来优化)<br>
2、移动端<br>
3、客户端<br>

> 技术选择
>
React + Hooks + TypeScript + Sass

>部署
>
前端Nginx 后端pm2<br>
哪天想起来再整个Jenkins or action

>总结
>
掌握Hooks TypeScript基本使用<br>
对前后端部署有基本认识<br>

>项目结构
>
```
netease-cloud-music
├── config
│   ├── config.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── public
│   └── index.html
├── README.md
├── src
│   ├── apis
│   │   ├── album.ts
│   │   ├── artist.ts
│   │   ├── axios.ts
│   │   ├── djradio.ts
│   │   ├── home.ts
│   │   ├── model.ts
│   │   ├── playlist.ts
│   │   ├── song.ts
│   │   ├── toplist.ts
│   │   └── user.ts
│   ├── components
│   │   ├── business
│   │   │   ├── ArtistComponent
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── CategoryComponent
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── DiscoverAlbumComponent
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── DiscoverDjRadioComponent
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── DiscoverPlaylistComponent
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── MusicComponent
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── RankComponent
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   └── RecommendComponent
│   │   │       ├── index.tsx
│   │   │       └── style.scss
│   │   └── common
│   │       ├── ArtistList
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── BackTop
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Banner
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── CateList
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Comments
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Discover
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Header
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Hot
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Likes
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── List
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── NewAlbum
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Notification
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Paging
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── PlaylistTitle
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── PlaylistTop
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── PlayRelated
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Program
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── ProgramList
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Ranking
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Singers
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── SongList
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── Title
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       ├── TopList
│   │       │   ├── index.tsx
│   │       │   └── style.scss
│   │       └── TopListInfo
│   │           ├── index.tsx
│   │           └── style.scss
│   ├── index.tsx
│   ├── pages
│   │   ├── App.tsx
│   │   ├── DiscoverPage
│   │   │   ├── DiscoverAlbumPage
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── DiscoverArtistPage
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── DiscoverDjRadioPage
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── DiscoverIndexPage
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   ├── DiscoverPlaylistPage
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.scss
│   │   │   └── DiscoverTopListPage
│   │   │       ├── index.tsx
│   │   │       └── style.scss
│   │   ├── PlaylistPage
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── RouterPage
│   │   │   └── index.tsx
│   │   └── SongPage
│   │       ├── index.tsx
│   │       └── style.scss
│   ├── route
│   │   └── router.tsx
│   ├── service
│   │   └── homeService.ts
│   ├── serviceWorker.ts
│   ├── static
│   │   ├── css
│   │   │   ├── common.scss
│   │   │   └── mixins.scss
│   │   ├── font
│   │   │   ├── iconfont.css
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.js
│   │   │   ├── iconfont.json
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   ├── iconfont.woff
│   │   │   └── iconfont.woff2
│   │   └── images
│   │       ├── coverall.png
│   │       ├── favicon.ico
│   │       ├── icon.png
│   │       ├── icon2.png
│   │       ├── index.png
│   │       └── topbar.png
│   ├── types
│   │   ├── artist.d.ts
│   │   ├── home.d.ts
│   │   └── images.d.ts
│   └── utils
│       ├── initialState.tsx
│       └── utils.tsx
├── package-lock.json
├── package.json
├── tree.md
└── tsconfig.json

```

 

