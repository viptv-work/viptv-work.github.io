/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8a4c6e04b42bf5288db1a8d34445cb15"
  },
  {
    "url": "api/book/ZhuishuApi.html",
    "revision": "07739d9af33eba5107ba5d2a3e4d87e6"
  },
  {
    "url": "api/index.html",
    "revision": "4b1a14adb2f73c232067e225a711dc09"
  },
  {
    "url": "api/live/Sport.html",
    "revision": "1d4d6f675e8ff137b595127b3e8cdb68"
  },
  {
    "url": "api/live/Zhibo.html",
    "revision": "135df578f23fde0066a52606fceb35c8"
  },
  {
    "url": "api/music/KugouApi.html",
    "revision": "275225d760ded3c2580ac67fa1894ff8"
  },
  {
    "url": "api/music/KugouApx.html",
    "revision": "164617453f34b01e4e72b0a9def4eea1"
  },
  {
    "url": "assets/css/0.styles.25932fb8.css",
    "revision": "ed2f33757e2be65d4256f09f35795940"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/VIPTV-LOGO-LONG-FINAL@1x.335196f3.png",
    "revision": "335196f339a769d45405f25e68b8271e"
  },
  {
    "url": "assets/js/10.75cd32e5.js",
    "revision": "8b7fc2a5579d04091cb520b8fe1a1d08"
  },
  {
    "url": "assets/js/11.9678958b.js",
    "revision": "426c4e7648f6b843b0d1c7cac56d62ff"
  },
  {
    "url": "assets/js/12.3ac14bd2.js",
    "revision": "17c4817e6c05411045602aeeeca0f45e"
  },
  {
    "url": "assets/js/13.7ae0fd16.js",
    "revision": "fd9edca21fa4627373b01006e86a569d"
  },
  {
    "url": "assets/js/14.5dc6d4ec.js",
    "revision": "a7739b73da4ee3fd40fc2d26f61f26f3"
  },
  {
    "url": "assets/js/15.87e006d1.js",
    "revision": "cba9f3f050d752aa42394d80f1077d6e"
  },
  {
    "url": "assets/js/16.db1679af.js",
    "revision": "6acadb431145cdce45545cbe37fa9ff1"
  },
  {
    "url": "assets/js/17.c46a3d7e.js",
    "revision": "a91fdf2371c4ef11b388f8884826c3ed"
  },
  {
    "url": "assets/js/18.7cf01f28.js",
    "revision": "15cbd394f7d9494140d6d093611718da"
  },
  {
    "url": "assets/js/19.65ec8a7f.js",
    "revision": "47a44f1cbf00a4fb774eaa2a2f103adc"
  },
  {
    "url": "assets/js/2.4be1bcdd.js",
    "revision": "2bff64616459514f78243798b82216e2"
  },
  {
    "url": "assets/js/20.5a176dbb.js",
    "revision": "cf7648042bdd1a33404853da42702cdd"
  },
  {
    "url": "assets/js/21.6c61dfe9.js",
    "revision": "d7111edd6627d7c3f5b5e2b710d32fb2"
  },
  {
    "url": "assets/js/22.db2e740e.js",
    "revision": "234326f92234d64ea792456640cc141a"
  },
  {
    "url": "assets/js/23.13886d70.js",
    "revision": "52f30194698efe938f1110222aa8b091"
  },
  {
    "url": "assets/js/24.4bf99798.js",
    "revision": "e04891f2001a0755a2d38a7ebe1e163f"
  },
  {
    "url": "assets/js/25.884eb376.js",
    "revision": "ea614c7ea0e9f5cef191929fab987cc7"
  },
  {
    "url": "assets/js/26.105f1909.js",
    "revision": "97a376826f7da16d3077f8d81f4b008a"
  },
  {
    "url": "assets/js/27.0eda0750.js",
    "revision": "5d797d225da6ad766ab3cbe62e271651"
  },
  {
    "url": "assets/js/28.10ca83a0.js",
    "revision": "a52df2240c2bc8e6398ce99c92f37acf"
  },
  {
    "url": "assets/js/29.2cfd5b50.js",
    "revision": "41614ed28709d9715fbe8efdbe177360"
  },
  {
    "url": "assets/js/3.3eb7c139.js",
    "revision": "0b16f5467f54f623985a72467317ea8e"
  },
  {
    "url": "assets/js/30.77a9ed46.js",
    "revision": "f7988c1b4720fac7ab28086d85072305"
  },
  {
    "url": "assets/js/31.78516476.js",
    "revision": "1ad9617e9215c7eeb783c5a1f61380e7"
  },
  {
    "url": "assets/js/32.91a8024d.js",
    "revision": "437fea89ae4ec4c1358f6119bf816f8a"
  },
  {
    "url": "assets/js/33.1c910330.js",
    "revision": "bf12364e4b4fa9e65acb84efed2b377d"
  },
  {
    "url": "assets/js/34.e3ec01d5.js",
    "revision": "754e5cefdd4e76457d8375a841af22c8"
  },
  {
    "url": "assets/js/35.f29f81c6.js",
    "revision": "676e5db690ccae451f2a797019b0f762"
  },
  {
    "url": "assets/js/36.d5e8411f.js",
    "revision": "ecbbff5de9a6d3a020329d436ccda63f"
  },
  {
    "url": "assets/js/37.efea62f3.js",
    "revision": "1a111bf87792043281b65b9d2489b98e"
  },
  {
    "url": "assets/js/38.2a4a7e9b.js",
    "revision": "b8310c8b7b7b27b2469921d26e75af03"
  },
  {
    "url": "assets/js/39.2f5f440d.js",
    "revision": "8b513b005db95255b6189348ff274428"
  },
  {
    "url": "assets/js/4.10168644.js",
    "revision": "88e887b01630bdb234af7c3bf4b2265d"
  },
  {
    "url": "assets/js/40.8dd398d9.js",
    "revision": "d574d30a6e9045b178458d10bbc9e600"
  },
  {
    "url": "assets/js/41.783d92be.js",
    "revision": "c4b699add13e6e3e5e89968650111c31"
  },
  {
    "url": "assets/js/42.69f15da8.js",
    "revision": "682eadcb207da8d17160e9f4090c0173"
  },
  {
    "url": "assets/js/43.d845eaae.js",
    "revision": "27d1d52deed7a3700034cde0279ca334"
  },
  {
    "url": "assets/js/44.91a0f995.js",
    "revision": "720323047bd91a60f9e2408859ea19f2"
  },
  {
    "url": "assets/js/45.b7699a3b.js",
    "revision": "f8b5ae67aeabda540fe50dbf78506de5"
  },
  {
    "url": "assets/js/46.eba2d93f.js",
    "revision": "13188b9f4e362bf0dcc7cd36b5ad2454"
  },
  {
    "url": "assets/js/47.4cfe5ff7.js",
    "revision": "f1f1195131941296fa96072c31ab0bb1"
  },
  {
    "url": "assets/js/48.51e4a154.js",
    "revision": "044802c4ac0dda7e309025c2a928a225"
  },
  {
    "url": "assets/js/5.d8713031.js",
    "revision": "d96f3bdeaada2e420c433682725996cd"
  },
  {
    "url": "assets/js/6.d32fd4b6.js",
    "revision": "09e637eab050fcb8b561f28a31139805"
  },
  {
    "url": "assets/js/7.31dc2176.js",
    "revision": "dbd9957a4ed5907c01f4dbc598b97f8c"
  },
  {
    "url": "assets/js/8.8958e2a8.js",
    "revision": "3d2c1b5ed1c70dc8812058e90cb61123"
  },
  {
    "url": "assets/js/9.f95a97b8.js",
    "revision": "c08a56dff4baad3316d51dc0de22ae0d"
  },
  {
    "url": "assets/js/app.c6f3d1f3.js",
    "revision": "80e6aa7958f7fd3b01ab44311804602c"
  },
  {
    "url": "guide/About.html",
    "revision": "18b11a608c68450351a12703bff285d8"
  },
  {
    "url": "guide/Axios.html",
    "revision": "19622810216f0532f50ff505f9157a25"
  },
  {
    "url": "guide/Chat.html",
    "revision": "bf9d13fcce9bb2872c70ff7976067679"
  },
  {
    "url": "guide/conditional.html",
    "revision": "99e711f948196fbae882cf2b077badf6"
  },
  {
    "url": "guide/Css.html",
    "revision": "4b28cbc5c74af3dc2e0118c04cef297b"
  },
  {
    "url": "guide/Dash.html",
    "revision": "49583ffd3c59369fb5383472be623b40"
  },
  {
    "url": "guide/Design.html",
    "revision": "cddc5aa2821662c28ff6a8a72dcc727e"
  },
  {
    "url": "guide/index.html",
    "revision": "4a31dc8b0d61f463a3958ca5f09839a9"
  },
  {
    "url": "guide/Jiexi.html",
    "revision": "c8073295ff28b03b24311be16ee8040c"
  },
  {
    "url": "guide/Jsphp.html",
    "revision": "50e9a7c427f1bdeb4cbc257a440f80c7"
  },
  {
    "url": "guide/m3u8.html",
    "revision": "29b1bb8ca02d66f65c33c0949041e5b9"
  },
  {
    "url": "guide/Player.html",
    "revision": "56228c6daae09d9d55f2073b36f5d431"
  },
  {
    "url": "images/_media/alipay.jpg",
    "revision": "06e7b7472d2641ff8a2ed45bb2996a12"
  },
  {
    "url": "images/_media/logo.jpg",
    "revision": "baaa798caa8f1352fcb098f643e1e538"
  },
  {
    "url": "images/_media/qqqun.png",
    "revision": "f99bc1634d278c2194189322810f4d29"
  },
  {
    "url": "images/_media/shunfengads.png",
    "revision": "d03c0a3426991d1fe11d976a91fb8adf"
  },
  {
    "url": "images/_media/wxpay.png",
    "revision": "e9ebe3a7089d23d798e6fc78484af305"
  },
  {
    "url": "images/_media/xiaogong.png",
    "revision": "c2a5cc43d620c00c5f060952cf6ee85a"
  },
  {
    "url": "images/icons/bulb.svg",
    "revision": "e3fbc07fc8a4fd64bf3585de3c5868c4"
  },
  {
    "url": "images/icons/danger.svg",
    "revision": "7224901b2f84983efa258490e5a1c03a"
  },
  {
    "url": "images/icons/info.svg",
    "revision": "39d1a12b97555d796d4dcda9bf403429"
  },
  {
    "url": "images/icons/live-sport.png",
    "revision": "38f704903e5bc1f970eb21fadaa0b615"
  },
  {
    "url": "images/icons/stop.svg",
    "revision": "7d577a225ddf7f95f96032b3eefb48b6"
  },
  {
    "url": "images/icons/viptv-180x180.png",
    "revision": "689f31932685e7294f0ab75f395da8e7"
  },
  {
    "url": "images/icons/viptv-192x192.png",
    "revision": "e3c21723bb6eac3e4cb799d7b35cf3f5"
  },
  {
    "url": "images/icons/viptv-270x270.png",
    "revision": "f635924bf6a362d027900ee641311ea7"
  },
  {
    "url": "images/icons/viptv-32x32.png",
    "revision": "0a0546725688b6e75bf08fd1885af350"
  },
  {
    "url": "index.html",
    "revision": "d6a77f8c8f9388685c621a00d208ec4c"
  },
  {
    "url": "logo.png",
    "revision": "097ade4e6cfe2c5bd9cceb81b2d0fffd"
  },
  {
    "url": "mirrors/index.html",
    "revision": "0250d6511de91968f1bb354a3dcb1fe6"
  },
  {
    "url": "QRCode.jpg",
    "revision": "af2bc5b77c7642a7ab47b1c8a1597217"
  },
  {
    "url": "QRCodeTv.jpg",
    "revision": "2d4d156b94eb189eed86a3ddc02cc8c3"
  },
  {
    "url": "search/index.html",
    "revision": "a1e61093f94c03e12c554be85fe3a975"
  },
  {
    "url": "source/Byou.html",
    "revision": "fee6614e117d98b619b156d4bd302fe8"
  },
  {
    "url": "source/Free.html",
    "revision": "9bd3ebc17256062324a05be00feb9fbb"
  },
  {
    "url": "source/index.html",
    "revision": "5f2d065e1b2168fdc7250e986f7a473b"
  },
  {
    "url": "source/Migu.html",
    "revision": "9334896c9511c8faf79e0e156e0d911a"
  },
  {
    "url": "source/Movie.html",
    "revision": "accb33c9bde8f36399fe66e1495506f0"
  },
  {
    "url": "source/Org.html",
    "revision": "4e4719640df43fe29a2cbe196146a466"
  },
  {
    "url": "source/Qqyun.html",
    "revision": "c3789edcf9b7e860a665a44d0b4f411b"
  },
  {
    "url": "source/Tools.html",
    "revision": "97f68c0b2ffc661bebe10b58ab2bae12"
  },
  {
    "url": "source/Ttou.html",
    "revision": "11f63ba7f6af07cc51d9e5ea92264836"
  },
  {
    "url": "source/Xxx.html",
    "revision": "941df6abeb7f262718eb4538c72d9921"
  },
  {
    "url": "source/Ygd.html",
    "revision": "59dd1f52606408ae1342baeb66ebc501"
  },
  {
    "url": "template/800cms/Base.html",
    "revision": "a83b87ef33301aca9bf1fe1bac8c220c"
  },
  {
    "url": "template/index.html",
    "revision": "6cfaaa54755dfa76b90fe7b330ce8746"
  },
  {
    "url": "template/maccms/Base.html",
    "revision": "bdd565991c98a5f940df779fdd40ead1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
