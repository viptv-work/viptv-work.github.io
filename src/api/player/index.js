import DPlayer from 'dplayer';
import 'dplayer/dist/DPlayer.min.css';
window.Hls = require('hls.js')
window.Flv = require('flv.js')
/* import Chimee from 'chimee';
import flv from 'chimee-kernel-flv';
import hls from 'chimee-kernel-hls'; */

export default {
  dp: (url) => {
    new DPlayer({
      container: document.getElementById('video'),
      autoplay: true,
      preload: 'none',
      logo: 'https://viptv.gitee.io/api/_media/logo.jpg',
      theme: '#FADFA3',
      loop: true,
      live: true,
      lang: 'zh-cn',
      screenshot: true,
      hotkey: true,
      volume: 0.7,
      mutex: true,
      preload: 'auto',
      isLive: true,
      video: {
        url: url,
        pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
        thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg',
        type: 'auto'
      }
    });
  },
  dpv: (url) => {
    new DPlayer({
      container: document.getElementById('video'),
      autoplay: true,
      theme: '#FADFA3',
      loop: true,
      live: false,
      lang: 'zh-cn',
      screenshot: true,
      hotkey: true,
      volume: 0.7,
      mutex: true,
      preload: 'auto',
      isLive: true,
      video: {
        url: url
      }
    });
  },
  /* chi: (url) => {
    const chimee = new Chimee({
      wrapper: '#video',
      src: url,
      controls: true,
      autoplay: true,
      isLive: true,
      kernels: {
        flv,
        hls
      },
      box: 'hls'
    });
    chimee.play();
  }, */
  chp: (url) => {
    new chplayer({
      container: '#video',
      variable: 'player',
      live: true,
      video: url
    });
  }
}
