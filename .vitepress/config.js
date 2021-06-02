module.exports = {
  title: 'VIPTV 工作室',
  lang: 'zh-CN',
  description: '前端-后端-小程序-插件',
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: [{
        text: '学习指引',
        link: '/guide/'
      },
      {
        text: '收集资源',
        link: '/source/'
      },
      {
        text: '关于我们',
        link: '/about/'
      },
      {
        text: '相关链接',
        items: [{
          text: 'VIPTV 社区',
          link: 'https://github.com/viptvx/viptvx.github.io/discussions'
        }]
      },
      {
        text: '切换镜像',
        items: [{
          text: '国际站',
          link: 'https://viptvx.github.io/'
        }]
      }
    ],
    sidebar: {
      'about': 'auto',
      'source': [{
          text: '电视直播',
          children: [{
              text: '北邮直播源',
              link: '/source/Byou'
            },
            {
              text: '咪咕直播源',
              link: '/source/Migu'
            },
            {
              text: '影视资源',
              link: '/source/Movie'
            },
            {
              text: '一锅端系列',
              link: '/source/Ygd'
            },
            {
              text: '全球直播源',
              link: '/source/Org'
            },
            {
              text: '腾讯直播源',
              link: '/source/Qyun'
            }
          ]
        },
        {
          text: '电脑软件',
          children: [{
              text: '广告设计',
              link: '/source/ads'
            },
            {
              text: 'windows',
              link: '/source/windows'
            }
          ]
        },
        {
          text: '手机软件',
          children: [{
            text: '影视直播',
            link: '/source/mlive'
          }]
        },
        {
          text: '电视盒子',
          children: [{
            text: '免费破解',
            link: '/source/tvhezi'
          }]
        }
      ],
      '/': [{
          text: '基础',
          children: [{
              text: '介绍',
              link: '/guide/index'
            },
            {
              text: '安装',
              link: '/guide/install'
            },
            {
              text: '工具',
              link: '/guide/tools'
            }
          ]
        },
        {
          text: '高阶',
          children: [{
              text: '播放组件',
              link: '/guide/plays'
            },
            {
              text: '解析封装',
              link: '/guide/jiexi'
            },
            {
              text: 'PHP代理',
              link: '/guide/phpdl'
            },
            {
              text: 'CSS语法',
              link: '/guide/css'
            }
          ]
        },
        {
          text: '接口',
          children: [{
              text: '电视',
              link: '/guide/tv'
            },
            {
              text: '直播',
              link: '/guide/live'
            },
            {
              text: '影视',
              link: '/guide/movie'
            },
            {
              text: '视频',
              link: '/guide/video'
            },
            {
              text: '音乐',
              link: '/guide/music'
            },
            {
              text: '小说',
              link: '/guide/book'
            }
          ]
        }
      ]
    }
  },
  markdown: {
    anchor: {
      renderPermalink: require('./render-perma-link')
    },
    config: (md) => {
      md.use(require('./markdown-it-custom-anchor'))
    }
  }
}
