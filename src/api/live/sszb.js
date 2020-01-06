import api from 'api'
export default {
  Top: () => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://api.shoumilive.com:83' : '/smzb'
    return api.req.get('/v1/index.json')
  },
  Match: () => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://api.shoumilive.com:83' : '/smzb'
    return api.req.get('/v1/match_all.json')
  },

  Room: (id) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://api.shoumilive.com:83' : '/smzb'
    return api.req.get('/v1/room/'+id+'.json')
  },
  Nav: () => [{
      cid: '197',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/13dd274ba87ac05e04387c7740857a1e.jpg',
      pname: 'NBA',
      name: 'NBA'
    },
    {
      cid: '198',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/159d4f7dcd3133d8f1b3fb76e9a99d43.jpg',
      name: '足球',
      pname: 'Football'
    },
    {
      cid: '199',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/adf4bdbb84304764cf015fc8e84de34d.jpg',
      name: '健身',
      pname: 'Exercise'
    },
    {
      cid: '200',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/a0d1c6f5e84e2d6dac05b5faa793e09c.jpg',
      name: '台球',
      pname: 'Billiards'
    },
    {
      cid: '202',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/876298dc93f1ac9f41ed90879f77d16b.jpg',
      name: '搏击',
      pname: 'Fight'
    },
    {
      cid: '204',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/2ee7efae69404728b7d38ff9d204ba0c.jpg',
      name: '网球/排球',
      pname: 'Tennis'
    },
    {
      cid: '211',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/5c9f99425e5a5fa1513cb76754442339.jpg',
      name: '综合',
      pname: 'Others'
    },
    {
      cid: '214',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/d9662b30d0f82b83a3c6588a3c2cf71e.jpg',
      name: '篮球',
      pname: 'Basketball'
    },
    {
      cid: '215',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/9537ed9e75c5d54ecd7b5f0137dd239a.jpg',
      name: '英文原声',
      pname: 'English'
    },
    {
      cid: '216',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/afec6e6d66bf249e0874442c677a7f47.jpg',
      name: '棋牌/游戏',
      pname: 'Game'
    },
    {
      cid: '218',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/be250e87747503937408a78558ddefb0.jpg',
      name: '飞镖',
      pname: 'FB'
    },
    {
      cid: '219',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/e77645345ad5246ca9737e1ec34e3ab0.jpg',
      name: '鹅赛场',
      pname: 'esc'
    },
    {
      cid: '224',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/7f34ce74f44a9756b068c64bb3e9a4d9.jpg',
      name: '女神',
      pname: 'NS'
    },
    {
      cid: '231',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/ee726c60e7591958eac1b71f4ed58474.jpg',
      name: 'CBA',
      pname: 'CBA'
    },
    {
      cid: '232',
      img: 'http://upstatic.qiecdn.com/upload/game_cate/cb49b92c6d12b26b1d36e7b906e018f8.png',
      name: '棒球/橄榄球/冰球',
      pname: 'MLB'
    },
  ],
  Cate: (id) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://api.qiecdn.com': '/sszb'
    return api.req.get('/api/v1/live/' + id)
  },

  Play: (id) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://api.qiecdn.com' : '/sszb'
    return api.req.get('/api/v1/room/' + id)
  }
}
