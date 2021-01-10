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
    "revision": "a2ef596b7cd07b069b7c55e310725ecb"
  },
  {
    "url": "api/book/ZhuishuApi.html",
    "revision": "89068f5ce21c8371ee52fbf9428c0139"
  },
  {
    "url": "api/index.html",
    "revision": "6d6d70885a18602687ba8b28ca3b5350"
  },
  {
    "url": "api/live/Sport.html",
    "revision": "60f9fff768d379fd9a83c052f5e68d11"
  },
  {
    "url": "api/live/Zhibo.html",
    "revision": "3916ab672eaeebc77fd35ba133528b70"
  },
  {
    "url": "api/music/KugouApi.html",
    "revision": "cf8e548b82d42419b8b0c5f488b9c6e6"
  },
  {
    "url": "api/music/KugouApx.html",
    "revision": "b6916a597c0ab07d67df3fa2fe968f14"
  },
  {
    "url": "assets/css/0.styles.c0ca2322.css",
    "revision": "242e91939a28b2577b8c63b2ebf42f22"
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
    "url": "assets/js/10.f08cc50b.js",
    "revision": "2d03c6279db6dfcb509ea3e32a858aea"
  },
  {
    "url": "assets/js/11.bafccb63.js",
    "revision": "12f8f3ecb0a96b9ce6ddcc32b4ae2edf"
  },
  {
    "url": "assets/js/12.2bdf1004.js",
    "revision": "537799bfea5ccf002cc1a6b6ef160cd2"
  },
  {
    "url": "assets/js/13.12ca56e4.js",
    "revision": "f178c65f5458d87a4f4ab306a048f074"
  },
  {
    "url": "assets/js/14.6629a7e8.js",
    "revision": "ac3f6cd86f51c7fcf0fb50aec218e68a"
  },
  {
    "url": "assets/js/15.13cf3237.js",
    "revision": "760b802ac0976273f7b10c95ff12c72a"
  },
  {
    "url": "assets/js/16.095bfdd4.js",
    "revision": "b908279edf27be4799e9cb080526227e"
  },
  {
    "url": "assets/js/17.4f0af934.js",
    "revision": "64f87078587c1e3b8957b07bd1ef063d"
  },
  {
    "url": "assets/js/18.68f57787.js",
    "revision": "145b4443a9ac4a56e6b4410a6607445b"
  },
  {
    "url": "assets/js/19.13885047.js",
    "revision": "45c4ec2876c8850c3a75b6be0dcb4713"
  },
  {
    "url": "assets/js/20.12db47a3.js",
    "revision": "12b1c8faba1bdcb26bf9010ac692b240"
  },
  {
    "url": "assets/js/21.8dcbe5b9.js",
    "revision": "eedbf9557891a85e287f9e37b55b2a63"
  },
  {
    "url": "assets/js/22.eab18364.js",
    "revision": "b8781ea4c5f483c30344497a4436c8a9"
  },
  {
    "url": "assets/js/23.8fb74e9b.js",
    "revision": "c7c66723847b722c91be89c27d16b28e"
  },
  {
    "url": "assets/js/24.36834c0e.js",
    "revision": "78155a21601096db45b8a621d682ac64"
  },
  {
    "url": "assets/js/25.de8ad68a.js",
    "revision": "888a6451d3738f61c5e2fac7f8c885fc"
  },
  {
    "url": "assets/js/26.bd4ba74d.js",
    "revision": "1cbf306b6e464bacde82ea6cec230b76"
  },
  {
    "url": "assets/js/27.fda31422.js",
    "revision": "8c29c326cfaa809c0d06ddfd0016aa10"
  },
  {
    "url": "assets/js/28.5998bc73.js",
    "revision": "51d7960e450181c13fe22cb650a32bf3"
  },
  {
    "url": "assets/js/29.f9bcd0ce.js",
    "revision": "6142bc6d0f926d77b9cb9ff97c78da8c"
  },
  {
    "url": "assets/js/3.34a8f31a.js",
    "revision": "46b346b436eed9709edddedc9277e42c"
  },
  {
    "url": "assets/js/30.d974b8c5.js",
    "revision": "c5de9bc1bd335fbcb65173fdf5c477bb"
  },
  {
    "url": "assets/js/31.2afe9e55.js",
    "revision": "2e409aecf6dfb8ac964df08e721c5424"
  },
  {
    "url": "assets/js/32.c93b5fb9.js",
    "revision": "14fb6cd0b4a67cbe297460e4daf2ec40"
  },
  {
    "url": "assets/js/33.acf6acd6.js",
    "revision": "e7861492766a16fb5b8bf420f9404932"
  },
  {
    "url": "assets/js/34.829c6956.js",
    "revision": "a2e7086335141cae8ae53f9b90fd2835"
  },
  {
    "url": "assets/js/35.8fcfe5db.js",
    "revision": "856db0f627f262874afe2cc118d84116"
  },
  {
    "url": "assets/js/36.c484f958.js",
    "revision": "a672c3e49b836c47127869ef446acc31"
  },
  {
    "url": "assets/js/37.70fa119b.js",
    "revision": "1d02d6aa13922c89a1468b36b21c2184"
  },
  {
    "url": "assets/js/38.62a907de.js",
    "revision": "df1267e1d1a8e7920f6c30a961afae83"
  },
  {
    "url": "assets/js/39.41769f9f.js",
    "revision": "98dcf0e45f32667f4516a30902d4436b"
  },
  {
    "url": "assets/js/4.131f6150.js",
    "revision": "2f6c3645217b4632a4cd1bf9fc9c1e84"
  },
  {
    "url": "assets/js/40.5c2d5356.js",
    "revision": "6d38a621efd9dca44957addab2ab29d5"
  },
  {
    "url": "assets/js/41.080e7208.js",
    "revision": "8e74b47e8dfe30970da763e0ce57edb2"
  },
  {
    "url": "assets/js/42.06b43e13.js",
    "revision": "5d7559819a4a98ba2680094441e52e46"
  },
  {
    "url": "assets/js/43.e40a9ccf.js",
    "revision": "7a93d1d692f16551a728facc47fcb26b"
  },
  {
    "url": "assets/js/44.c85e726c.js",
    "revision": "be8362fd00db22f38495a899778af0c9"
  },
  {
    "url": "assets/js/45.7df8be9d.js",
    "revision": "fca789265de7441acfefc29b4fdfccd1"
  },
  {
    "url": "assets/js/46.de2d1f91.js",
    "revision": "c43f4ede81daf44f9296bb1a9465a59d"
  },
  {
    "url": "assets/js/47.814db355.js",
    "revision": "e3d342adbccdc83ba6f71de5c953e4d3"
  },
  {
    "url": "assets/js/48.d665049f.js",
    "revision": "f6730194c6e284f50711078eb29f8ef8"
  },
  {
    "url": "assets/js/49.b921f7e0.js",
    "revision": "47090a0f13be1975ec12cc92d3519e48"
  },
  {
    "url": "assets/js/5.b8f4b1b6.js",
    "revision": "e5d76d453f1af92150d8ed6241daef85"
  },
  {
    "url": "assets/js/50.b56b5120.js",
    "revision": "5067200bca36b75f1215a3595a65dba4"
  },
  {
    "url": "assets/js/51.a2183220.js",
    "revision": "54bf01ddf70bda3062652de2b32e81fa"
  },
  {
    "url": "assets/js/52.f40523cb.js",
    "revision": "8f88a44353546dde0ef9b27d192e14b2"
  },
  {
    "url": "assets/js/53.7a4db08b.js",
    "revision": "26b381c9023baf15797c26acd07f8f48"
  },
  {
    "url": "assets/js/6.5d9eb5f5.js",
    "revision": "e9434d3fc03e4e88d57150c4016816b3"
  },
  {
    "url": "assets/js/7.2edc27b6.js",
    "revision": "cc742c52208008fa5cd6eb14a09907b0"
  },
  {
    "url": "assets/js/8.599e9a22.js",
    "revision": "a2c40a8d36098a2bbf4c7591b3c81ca6"
  },
  {
    "url": "assets/js/9.8fce4b8d.js",
    "revision": "af056450ec199a2d5753e510c1f8d596"
  },
  {
    "url": "assets/js/app.6bdfde01.js",
    "revision": "64709a7d197d92eef37fd1d954b32bb9"
  },
  {
    "url": "assets/js/vendors~search-page.f5ba2c32.js",
    "revision": "57430f8a2bf865339898f6404e7a4639"
  },
  {
    "url": "guide/About.html",
    "revision": "4fe68ad956958d5a08e742c0061d73e1"
  },
  {
    "url": "guide/Chat.html",
    "revision": "c835fe389c3af0b17cdbae941e3555be"
  },
  {
    "url": "guide/Css.html",
    "revision": "74ddab29f45167541846f5791a67f7f0"
  },
  {
    "url": "guide/Dash.html",
    "revision": "6229384c94ebe4098a0c9c9884f75078"
  },
  {
    "url": "guide/Design.html",
    "revision": "06ce974cd7d07addcc8f9dc880533db7"
  },
  {
    "url": "guide/Git.html",
    "revision": "447a9de15960d2a149bec1f63be6738d"
  },
  {
    "url": "guide/index.html",
    "revision": "5b900bab8732df9a4f71551ff91f5f48"
  },
  {
    "url": "guide/Jsphp.html",
    "revision": "90e659453424aa116d7c1fa1a5aaa56a"
  },
  {
    "url": "guide/Lib.html",
    "revision": "ae043e3bb1ebcd3328e7587d8e04034d"
  },
  {
    "url": "guide/m3u8.html",
    "revision": "889c62a5b439ba120fbb3ceac046c248"
  },
  {
    "url": "guide/Market.html",
    "revision": "c174bd3aa554608d3e9888c0d9460725"
  },
  {
    "url": "guide/Npm.html",
    "revision": "45c7ad824e0f3d18ef1003d814d236d2"
  },
  {
    "url": "guide/quickstart.html",
    "revision": "302e28ae4da3da8a9b6c28ba03771165"
  },
  {
    "url": "guide/Viptv.html",
    "revision": "15716353a8a5500fac43fbdfdfede501"
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
    "revision": "ea87f943e2409a16671f648517cc958a"
  },
  {
    "url": "logo.png",
    "revision": "097ade4e6cfe2c5bd9cceb81b2d0fffd"
  },
  {
    "url": "mirrors/index.html",
    "revision": "ad2880f16d8a8d4daaf2dc5e54900f55"
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
    "url": "source/Byou.html",
    "revision": "3fd36b7ad88311144913dea171129c8d"
  },
  {
    "url": "source/Free.html",
    "revision": "38ac09d18f84c9594a8ddec2429b52be"
  },
  {
    "url": "source/index.html",
    "revision": "b91053bbf835bfca4f9fdcb941df302a"
  },
  {
    "url": "source/Migu.html",
    "revision": "ae0f8b018debfbc1b94acdfa5eb543d4"
  },
  {
    "url": "source/Movie.html",
    "revision": "5728e33562a7404e79f4c937200d3272"
  },
  {
    "url": "source/Org.html",
    "revision": "f7406e906f70cc1f8ad8d80bf6c2da17"
  },
  {
    "url": "source/Qqyun.html",
    "revision": "2c3ea60cfc056fcdca500c0076297e37"
  },
  {
    "url": "source/Tools.html",
    "revision": "2b0372d0ccdf92eecfd161375870d526"
  },
  {
    "url": "source/Ttou.html",
    "revision": "366c568cfe9711ab45e97ff7b3a3bfa3"
  },
  {
    "url": "source/Xxx.html",
    "revision": "130ed7a3086c8bcf6cfa7ea8612d7e83"
  },
  {
    "url": "source/Ygd.html",
    "revision": "7acfcdc94e83045858b06f4a56d4fa26"
  },
  {
    "url": "template/800cms/Base.html",
    "revision": "f76ac0edf8c09625e46175a28349379b"
  },
  {
    "url": "template/index.html",
    "revision": "765b1b7333572f39d4cd8b8ea5f1b6a4"
  },
  {
    "url": "template/maccms/Base.html",
    "revision": "f9941b273f9af54faebb06ba7025d778"
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
