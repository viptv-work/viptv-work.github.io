const resolve = dir => require('path').join(__dirname, dir);
const webpack = require('webpack')
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'
module.exports = {
  lintOnSave: false,
  publicPath:  BASE_URL,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('base', resolve('src/base'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },

    port: "80",
    proxy: {
      '/mga': {
        target: 'http://live.miguvideo.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/mga': ''
        }
      },
      '/mgp': {
        target: 'http://h5.miguvideo.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/mgp': ''
        }
      },
      '/smzb': {
        target: 'http://api.shoumilive.com:83',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/smzb': ''
        }
      },
      '/sszb': {
        target: 'http://api.qiecdn.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/sszb': ''
        }
      },
      '/jx': {
        target: 'http://z1.m1907.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/jx': ''
        }
      },
      '/gtpd': {
        target: 'http://mtime.info',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/gtpd': ''
        }
      },
      '/fun': {
        target: 'http://hbo.epub.fun',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/fun': ''
        }
      },
      '/ippd1': {
        target: 'http://122.194.12.25:13160',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ippd1': ''
        }
      },
      '/gdgd': {
        target: 'http://slave.pyitv.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/gdgd': ''
        }
      },
      '/ippd2': {
        target: 'http://slave.homed.hrtn.net:13160',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ippd2': ''
        }
      },
      '/ippd3': {
        target: 'http://slave.shuliyun.com:13160',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ippd3': ''
        }
      },
      '/ippd4': {
        target: 'http://slave.bfgd.com.cn:13160',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ippd4': ''
        }
      },

      '/jxgd': {
        target: 'http://slave.pyitv.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/jxgd': ''
        }
      },
      '/wlzy': {
        target: 'http://cj.wlzy.tv',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/wlzy': ''
        }
      },
      '/flzy': {
        target: 'http://800zy.co',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/flzy': ''
        }
      },
      '/KugouNewSong': {
        target: 'http://m.kugou.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/KugouNewSong': ''
        }
      }
    }
  },
};
