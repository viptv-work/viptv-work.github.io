# 各类解析封装

## fengshows.js
```js
import {
  proxy,
  req
} from 'lib/axios'
import md5 from 'js-md5';

export function setUrl(Url) {
  let timestamp = Math.floor(Date.now() / 1000) + 1800;
  let txTime = timestamp.toString(16);
  let uri = Url.substring(Url.indexOf('/', 7), Url.lastIndexOf('.'));
  let txSecret = md5('obb9Lxyv5C' + uri + txTime);
  /*  if (Url.indexOf('?') !== -1) {
    Url = Url.substring(0, Url.indexOf('?')) + '?txSecret=' + txSecret + '&txTime=' + txTime;
  } else {
    Url = Url + '?txSecret=' + txSecret + '&txTime=' + txTime;
  } */
  Url = 'http://hlive.fengshows.cn' + uri + '.flv?txSecret=' +
    txSecret + '&txTime=' + txTime;
  return Url
}

export function fsUrl(id) {
  return new Promise((resolve, reject) => {
    req.get(proxy + 'https://api.fengshows.cn/live', {
      params: {
        live_type: 'tv'
      }
    }).then(res => {
      const doc = {
        name: '凤凰卫视' + res[id].title,
        url: [{
          name: '省流',
          url: setUrl(res[id].live_url_sd)
        }, {
          name: '标清',
          url: setUrl(res[id].live_url_hd)
        }, {
          name: '高清',
          url: setUrl(res[id].live_url_fhd)
        }, {
          name: '音频',
          url: setUrl(res[id].url_audio_sd)
        }]
      }
      resolve(doc)
    }).catch(err => {
      reject(err)
    })
  })

}
```
## xigua.js
```js
import {
  proxy,
  req,
  env
} from 'lib/axios'
import {
  decode
} from 'js-base64';

export function crc32(id) {
  var n = function() {
      for (var t = 0,
          e = new Array(256), n = 0; 256 != n; ++n) t = n,
        t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
        t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
        t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
        t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
        t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
        t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
        t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
        t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
        e[n] = t;
      return "undefined" != typeof Int32Array ? new Int32Array(e) : e
    }(),
    o = function(t) {
      for (var e, o, r = -1,
          i = 0,
          a = t.length; i < a;) e = t.charCodeAt(i++),
        e < 128 ? r = r >>> 8 ^ n[255 & (r ^ e)] : e < 2048 ? (r = r >>> 8 ^ n[255 & (r ^ (192 | e >> 6 & 31))], r =
          r >>>
          8 ^ n[255 & (r ^ (128 | 63 & e))]) : e >= 55296 && e < 57344 ? (e = (1023 & e) + 64, o = 1023 & t.charCodeAt(
            i++), r = r >>> 8 ^ n[255 & (r ^ (240 | e >> 8 & 7))], r = r >>> 8 ^ n[255 & (r ^ (128 | e >> 2 & 63))],
          r =
          r >>> 8 ^ n[255 & (r ^ (128 | o >> 6 & 15 | (3 & e) << 4))], r = r >>> 8 ^ n[255 & (r ^ (128 | 63 & o))]) :
        (
          r = r >>> 8 ^ n[255 & (r ^ (224 | e >> 12 & 15))], r = r >>> 8 ^ n[255 & (r ^ (128 | e >> 6 & 63))], r = r >>>
          8 ^ n[255 & (r ^ (128 | 63 & e))]);
      return r ^ -1
    },
    r = "/video/urls/v/1/toutiao/mp4/" + id + "?r=" + Math.random().toString(10).substring(2);
  "/" != r[0] && (r = "/" + r);
  let i = o(r) >>> 0;
  return (proxy + "https://ib.365yg.com" + r + "&s=" + i)
}
export function xgUrl(id) {
  return new Promise((resolve, reject) => {
    req.get(crc32(id)).then(res => {
      const doc = [{
        name: '标清',
        url: decode(res.data.video_list.video_1.main_url)
      }, {
        name: '高清',
        url: decode(res.data.video_list.video_2.main_url)
      }, {
        name: '超清',
        url: decode(res.data.video_list.video_3.main_url)
      }]
      resolve(doc)
    }).catch(err => {
      reject(err)
    })
  })
}
```