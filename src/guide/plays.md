# JS播放器组件代码

## index.js
```js
import Chimee from './Chimee'
import Chplayer from './Chplayer'
export default (Url, isLive) => {
  if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
    return Chimee.Mob(Url, isLive)
  } else {
    if (Url.indexOf('migu') !== -1 || Url.indexOf('cmvideo') !== -1 || Url.indexOf('qiecdn.com') !== -1) {
      return Chplayer(Url, isLive)
    } else {
      return Chimee.Pc(Url, isLive)
    }
  }
}
```

## Chimee.js
```js
import ChimeePlayer from 'chimee-player';
import 'chimee-player/lib/chimee-player.browser.css'
import ChimeePluginControlbar from 'chimee-plugin-controlbar'
import ChimeeMobilePlayer from 'chimee-mobile-player';
import chimeePluginPopup from 'chimee-plugin-popup';
const CcAd = {
  name: 'ccAD',
  className: 'cc-ad',
  title: '暂停广告',
  body: `
    <em>广告</em>
    <a href="https://360.cn" target="_blank"><img src="http://p8.qhimg.com/t0108854b0010061773.gif"></a>
  `,
  offset: '50% 50%',
  hide: true,
  // 窗口关闭
  closed(e, by) {
    by !== 'by ended' && this.$emit('play');
  },
  events: {
    // 视频播放
    play() {
      this.close();
    },
    // 视频暂停
    pause() {
      // console.log('pause 居中展示的暂停广告');
      this.open();
    },
    ended(e) {
      // 播放结束会先触发pause然后触发ended，主动在播放完毕时关闭当前广告，避免出现两个
      this.close(e, 'by ended');
    }
  }
};
const TimeAd = {
  name: 'time-ad',
  className: 'time-ad',
  title: '特定播放时间区间内展示贴片广告',
  body: '<em>广告</em><a href="https://360.cn" target="_blank"><img src="https://p.ssl.qhimg.com/t018fe4570caeb23e44.png"></a>',
  offset: '10px 20px auto auto',
  hide: true,
  data: {
    staCurrentTime: 10,
    endCurrentTime: 180
  },
  events: {
    timeupdate() {
      // 第10到60秒之间显示当前广告
      if (this.currentTime > this.staCurrentTime && this.currentTime < this.endCurrentTime) {
        this.open();
      } else {
        this.close();
      }
    }
  }
};
const AdPlaybefore = {
  name: 'ad_playbefore',
  className: 'cc-ad playbefore-ad',
  title: '广告',
  body: '<a href="https://viptv.gitee.io"><img class="playImg" src="http://viptv.gitee.io/logo.png"></a>',
  offset: '0 0 0 0',
  hide: false,
  data: {
    // 广告时长（秒）
    delaySecond: 30
  },
  create() {
    this.$head = this.$domWrap.find('cm-pp-head')
      .on('click', () => {
        this.clearTimer();
        this.close();
      }).text(`广告倒计时 ${this.delaySecond} 秒 (点击跳过)`);

    // 盖住所有元素
    this.$bumpToTop();

    // 广告倒计时
    this.countDown();
  },
  // 窗口关闭后自动播放视频
  closed() {
    this.$emit('play');
  },
  destroy() {
    this.clearTimer();
  },
  methods: {
    clearTimer() {
      this._timerId && clearInterval(this._timerId);
    },
    countDown() {
      let _count = this.delaySecond;
      this._timerId = setInterval(() => {
        _count--;
        this.updateHeadText(`广告倒计时 ${_count} 秒 (点击跳过)`);
        if (_count === 0) {
          this.clearTimer();
          this.close();
        }
      }, 1000);
    },
    updateHeadText(text) {
      this.$head.text(text);
    }
  },
  events: {
    // 视频终止处理
    ended() {
      this.updateHeadText('视频播放结束，点击重播');
      this.$domWrap.find('img').attr('src', 'http://p1.qhimg.com/t0126de2c9757a95c5d.png');
      this.open();
    }
  }
};
ChimeePlayer.install(chimeePluginPopup(AdPlaybefore, TimeAd, CcAd));
export default {
  Pc: (Url, isLive) => {
    new ChimeePlayer({
      wrapper: '#wrapper',
      src: Url,
      autoplay: true,
      type: isLive,
      isLive: isLive,
      controls: true,
      box: Url.indexOf('.flv') !== -1 ? 'flv' : Url.indexOf('.m3u') !== -1 ? 'hls' : 'native',
      plugin: ['AdPlaybefore', {
        name: ChimeePluginControlbar.name,
        majorColor: '#f00',
        hoverColor: '#fff',
        hideBarTime: 1000,
        barShowByMouse: 'move', // 控制条显示由， move 还是 enter/leave 来控制显示／隐藏
        children: {
          play: true,
          progressTime: true,
          progressBar: {
            layout: 'twoline'
          },
          volume: true,
          clarity: {
            list: [{
              name: '高清',
              src: Url
            }]
          },
          screen: true
        }
      }]
    })
  },
  Mob: (Url, isLive) => {
    new ChimeeMobilePlayer({
      wrapper: '#wrapper',
      src: Url,
      isLive: isLive,
      autoplay: true,
      controls: true,
      playsInline: true,
      preload: 'auto',
      x5VideoPlayerFullscreen: true,
      x5VideoOrientation: 'landscape|portrait',
      xWebkitAirplay: true,
      muted: true,
      box: 'native',
      disableUA: [
        'Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36'
      ],      
      removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState']
    });
  },
}
```
## Chplayer.js
```js
const Config = (Url, isLive) => {
  return {
    container: '#wrapper',
    variable: 'player',
    autoplay: true, //自动播放		
    flashplayer: true, //是否需要强制使用flashplayer
    live: isLive,
    html5m3u8: true,
    video: Url
  }
}
export default (Url, isLive) => {
  if (window.chplayer !== undefined) {
    new chplayer(Config(Url, isLive));
  } else {
    let playerScriptTag = document.getElementById('bPlayerScriptTag');
    if (playerScriptTag === null) {
      playerScriptTag = document.createElement('script');
      playerScriptTag.src = 'https://viptv.gitee.io/cdn/chplayer/chplayer.js';
      playerScriptTag.id = 'chPlayerScriptTag';
      let s = document.getElementsByTagName('body')[0];
      s.appendChild(playerScriptTag);
    }
  }
}
```
## Dplayer.js 
```js
import DPlayer from 'dplayer';
window.Hls = require('hls.js')
window.Flv = require('flv.js')
export default {
  Pc: (Url, isLive) => {
    new DPlayer({
      container: document.getElementById('wrapper'),
      autoplay: true,
      preload: 'none',
      theme: '#FADFA3',
      loop: true,
      live: isLive,
      lang: 'zh-cn',
      screenshot: true,
      hotkey: true,
      volume: '1.0',
      mutex: true,
      preload: 'auto',
      video: {
        url: Url
      }
    });
  },
  Mse: (url) => {
    new APlayer({
      container: document.getElementById('mse'),
      lrcType: 1,
      autoplay: true,
      listMaxHeight: 90,
      audio: [{
        name: url.name,
        artist: url.namer,
        url: url.url,
        cover: url.img,
        lrc: url.lrc
      }]
    });
  }
}
```
## Tcplayer.js
```js
const Config = (Url, isLive) => {
  return {
    hlsUrl: 'https://lib.baomitu.com/hls.js/0.8.9/hls.min.js',
    m3u8: Url,
    autoplay: true,
    live: isLive,
    width: '100%',
    height: '100%'
  }
}
export default (Url, isLive) => {
  if (window.TcPlayer !== undefined) {
    new TcPlayer('wrapper', Config(Url, isLive));
  } else {
    let playerScriptTag = document.getElementById('tcPlayerScriptTag');
    if (playerScriptTag === null) {
      playerScriptTag = document.createElement('script');
      playerScriptTag.src = '//imgcache.qq.com/open/qcloud/video/vcplayer/TcPlayer-2.3.2.js';
      playerScriptTag.id = 'tcPlayerScriptTag';
      let s = document.getElementsByTagName('body')[0];
      s.appendChild(playerScriptTag);
    }
  }
}
```
## Xgplayer.js
```js
import Player from 'xgplayer';
import HlsJsPlayer from 'xgplayer-hls.js'
import FlvJsPlayer from 'xgplayer-flv.js'
const Config = (url, islive) => {
  return {
    id: 'wrapper',
    isLive: islive,
    autoplay: true,
    url: url,
    lang: 'zh-cn',
    width: '100%',
    height: '93%',
    videoInit: true,
    screenShot: true,
    keyShortcut: 'off',
    crossOrigin: true,
    cssFullscreen: true,
    defaultPlaybackRate: 1,
    playbackRate: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 3, 4, 5],
    playPrev: true,
    playNextOne: true,
    videoStop: true,
    showList: true,
    showHistory: true,
    quitMiniMode: true,
    videoTitle: true,
    airplay: true,
    closeVideoTouch: true,
    ignores: ['cssFullscreen', 'replay', 'error'], // 为了切换播放器类型时避免显示错误刷新，暂时忽略错误
    preloadTime: 300
  };
}
export default (url, islive) => {
  if (url.indexOf('m3u8') !== -1) {
    new HlsJsPlayer(Config(url, islive));
  } else if (url.indexOf('flv') !== -1) {
    new FlvJsPlayer(Config(url, islive));
  } else {
    new Player(Config(url, islive))
  }
}
```