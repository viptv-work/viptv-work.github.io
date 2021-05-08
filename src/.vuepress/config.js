const sidebar = {
  guide: [{
      title: '基础',
      collapsable: false,
      children: [
        '/guide/Jsphp',
        '/guide/Design',
      ]
    },
    {
      title: '组件',
      collapsable: false,
      children: [
        '/guide/Player',
      ]
    },
    {
      title: '插件',
      collapsable: false,
      children: [
        '/guide/Axios',
        '/guide/Jiexi',
      ]
    },
    {
      title: '代理',
      collapsable: false,
      children: [
        '/guide/Phpdaili',        
      ]
    },
  ],
  deve: [{
      title: '体验',
      collapsable: false,
      children: [
        '/deve/Mirrors',
        '/deve/Code'
      ]
    },
    {
      title: '我们',
      collapsable: false,
      children: [
        '/deve/About',
        '/deve/Dash',
        '/deve/Chat'
      ]
    },
    {
      title: '合作',
      collapsable: false,
      children: []
    }
  ],
  source: [{
      title: '资源',
      collapsable: false,
      children: [
        '/source/Movie',
        '/source/Free',
        '/source/Tools'
      ]
    },
    {
      title: '直播源',
      collapsable: false,
      children: [
        '/source/Org',
        '/source/Migu',
        '/source/Ttou',
        '/source/Byou',
        '/source/Qqyun',
        '/source/Ygd',
        '/source/Xxx'
      ]
    }
  ],
  api: [{
    title: 'api接口 -音乐',
    collapsable: false,
    children: [
      '/api/music/KugouApi',
      '/api/music/KugouApx'
    ]
  }, {
    title: 'api接口 -直播',
    collapsable: false,
    children: [
      '/api/live/Sport',
      '/api/live/Zhibo'
    ]
  }],
  template: [{
    title: '800CMS模板',
    collapsable: false,
    children: ['/template/800cms/Base']
  }, {
    title: 'MACCMS模板',
    collapsable: false,
    children: ['/template/maccms/Base']
  }]
}
module.exports = {
  title: 'VIPTV',
  description: '直播 - 影视 - 音乐 - 小说 - API接口 - 插件模板',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    [
      'link',
      {
        href: 'https://code.bdstatic.com/npm/font-awesome@4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/viptv-192x192.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/viptv-180x180.png'
      }
    ],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [{
        text: '帮助文档',
        ariaLabel: '文档菜单',
        items: [{
            text: '学习教程',
            link: '/guide/'
          },
          {
            text: '资源分享',
            link: '/source/'
          },
          {
            text: '模板主题',
            link: '/template/'
          },
          {
            text: 'API接口',
            link: '/api/'
          },
        ]
      },
      {
        text: '关于我们',
        items: [{
            text: '红包打赏',
            link: '/deve/Dash'
          },
          {
            text: '自我介绍',
            link: '/deve/About'
          },
          {
            text: '加入团队',
            link: '/deve/Chat'
          },
        ]
      },
      {
        text: '切换镜像',
        items: [{
            text: '国内镜像',
            link: 'http://viptv.gitee.io'
          },
          {
            text: '国外镜像',
            link: 'http://viptvx.github.io'
          }
        ]
      }
    ],
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: true,
      '/guide/': sidebar.guide,
      '/deve/': sidebar.deve,
      '/api/': sidebar.api,
      '/template/': sidebar.template,
      '/source/': sidebar.source,
    }
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '新内容可用',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
