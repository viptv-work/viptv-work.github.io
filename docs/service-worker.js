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
    "revision": "be4dacaae97d26cdfc2501b13bce9a30"
  },
  {
    "url": "assets/css/0.styles.0bd82295.css",
    "revision": "5b2159a47a7f58345954dcc1c875e004"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.586cd073.js",
    "revision": "afd9b9af2f59240c89caaeaefb359ced"
  },
  {
    "url": "assets/js/10.e3e2f078.js",
    "revision": "64bff4695df8d05e7eb734bc817b6c3e"
  },
  {
    "url": "assets/js/11.40099641.js",
    "revision": "5318c925ab97e8692c78f05857ae307f"
  },
  {
    "url": "assets/js/12.6872f794.js",
    "revision": "c9e95e3ecb123d1f9875c2efeed191d3"
  },
  {
    "url": "assets/js/13.505d5f9a.js",
    "revision": "cab7a95c18c50daaaeb6f1743addfa18"
  },
  {
    "url": "assets/js/14.8d440e31.js",
    "revision": "f18473048c94d8aee28745be7ea9b1af"
  },
  {
    "url": "assets/js/15.9401abc5.js",
    "revision": "ca2753c07a773ebea32408af202219b0"
  },
  {
    "url": "assets/js/16.da53c7d0.js",
    "revision": "508feb53ca8d8e536e4a2194be48ea18"
  },
  {
    "url": "assets/js/17.002de79b.js",
    "revision": "f124407c34bb58c441bd808aa7e2dda3"
  },
  {
    "url": "assets/js/18.8b839dd9.js",
    "revision": "d406636694d6ea248d91f2e7609e55a8"
  },
  {
    "url": "assets/js/19.3be10ad3.js",
    "revision": "543c26fd41b9d293feda1efbc5b3eccd"
  },
  {
    "url": "assets/js/2.595fa0a7.js",
    "revision": "aa4482333152a7442419c83c8b7b6792"
  },
  {
    "url": "assets/js/20.1f6a93bf.js",
    "revision": "d20ad26dfcbf255ed01a3e244c3e54b8"
  },
  {
    "url": "assets/js/21.691822bf.js",
    "revision": "c816dae3ffd55e164699e93689733ccf"
  },
  {
    "url": "assets/js/22.89b0dc1e.js",
    "revision": "112e04b649f02ed440e976a716c64516"
  },
  {
    "url": "assets/js/23.240ba4c7.js",
    "revision": "4ab26f82f2649b6093a17b1ec5847f9a"
  },
  {
    "url": "assets/js/24.b855fbc8.js",
    "revision": "cf313f8686ab1d7dbded75da48a2f63e"
  },
  {
    "url": "assets/js/25.383be82c.js",
    "revision": "ff678d8771c86686c2d54efbad407ee9"
  },
  {
    "url": "assets/js/26.ceb369b1.js",
    "revision": "403420bd7432e0d060d3b5a3e01f72ca"
  },
  {
    "url": "assets/js/27.e831c1ee.js",
    "revision": "ef9a4fd7278a77b0085fcbf80eed7776"
  },
  {
    "url": "assets/js/28.71096a05.js",
    "revision": "d7b0f64303d8e5707d366e54d3b7fbb8"
  },
  {
    "url": "assets/js/29.173c7dd4.js",
    "revision": "8a4e8dd70f8b29ad556fb503cb1a384a"
  },
  {
    "url": "assets/js/3.f30c8ba4.js",
    "revision": "3a146293f22744fbefb0a4eb6397e2d3"
  },
  {
    "url": "assets/js/30.1b03a37f.js",
    "revision": "3e38534c8fb929e5dfc89f6853f379b1"
  },
  {
    "url": "assets/js/31.0432f2c5.js",
    "revision": "8292f3bd1f7dec23f67f584904f0040c"
  },
  {
    "url": "assets/js/32.d74bb4f6.js",
    "revision": "d395215438e4f0af229007ac880d1bd2"
  },
  {
    "url": "assets/js/33.9efa86f7.js",
    "revision": "b16c032b79e7a73e682e1d6683b6f79b"
  },
  {
    "url": "assets/js/34.4cd8535d.js",
    "revision": "40f3ae5fccbda8e2623558199c8c27fa"
  },
  {
    "url": "assets/js/35.26884c6c.js",
    "revision": "a39c11dceac2a910fb3eabb3c88a45c5"
  },
  {
    "url": "assets/js/36.62982cd0.js",
    "revision": "c4760d320c9072b748bdd02fe3c12052"
  },
  {
    "url": "assets/js/37.76f6dd53.js",
    "revision": "6771c528ce7541589188d00efe4dfe9d"
  },
  {
    "url": "assets/js/38.b61b4cb4.js",
    "revision": "3c473fb70da2a84f78da5c3599e69c98"
  },
  {
    "url": "assets/js/39.70c97c44.js",
    "revision": "3c3dd267fd7738836cf79d077a4b3150"
  },
  {
    "url": "assets/js/4.e99a3521.js",
    "revision": "0e2ccfad3fa49baf764e793da1f3120a"
  },
  {
    "url": "assets/js/40.f3fd8b6f.js",
    "revision": "ec3f330d2428a2831f52b8743d6133cc"
  },
  {
    "url": "assets/js/41.0d106b06.js",
    "revision": "3ccdff665442317a1071b162b059c8d0"
  },
  {
    "url": "assets/js/42.9cbdda60.js",
    "revision": "b75f6e329d6b9ee798b60fcd7cde4bdc"
  },
  {
    "url": "assets/js/43.73582bbc.js",
    "revision": "59be0d47cf16300d58bf834c0dff4704"
  },
  {
    "url": "assets/js/44.97159ce1.js",
    "revision": "2e52e556b449a862cf03667594841913"
  },
  {
    "url": "assets/js/45.f885c36c.js",
    "revision": "218e84a3c3102c91d54992f1aedd37f9"
  },
  {
    "url": "assets/js/46.79d50263.js",
    "revision": "44a8c1940d9625f465a3bf370021594a"
  },
  {
    "url": "assets/js/47.6cef4c25.js",
    "revision": "3eaaa5bd65e1f64c96c0f85856d81bee"
  },
  {
    "url": "assets/js/48.898d321b.js",
    "revision": "adc90055db41976622e3609d1377c3f2"
  },
  {
    "url": "assets/js/49.ab5366fa.js",
    "revision": "28b3b25ad7a6ce99bc3329680667d6de"
  },
  {
    "url": "assets/js/5.7c610401.js",
    "revision": "0d0339a1d3ad90b9c16b4a325b4a30ca"
  },
  {
    "url": "assets/js/50.2309846e.js",
    "revision": "5be4609c7a9b46e408fe94c7f745d41f"
  },
  {
    "url": "assets/js/51.4063ea24.js",
    "revision": "2d7f10a969baa2da2783b3117ebc3828"
  },
  {
    "url": "assets/js/52.695d8963.js",
    "revision": "32d3407b3e871781a17492f77bd7e089"
  },
  {
    "url": "assets/js/53.a6e9beca.js",
    "revision": "b6ecc4e7c606ce2a97936efe40e79c96"
  },
  {
    "url": "assets/js/54.ef8a7547.js",
    "revision": "1b1a0c21fe5401e00d3986b9d0b88421"
  },
  {
    "url": "assets/js/55.789692c0.js",
    "revision": "8040e991d18a50eeeca2da5ff03c3faf"
  },
  {
    "url": "assets/js/56.92bdf6c3.js",
    "revision": "477373f3c3cb19b84f72be386b29b3ac"
  },
  {
    "url": "assets/js/57.4dc8da78.js",
    "revision": "469aa0c69e7464f1bf2ab94fb706ee8b"
  },
  {
    "url": "assets/js/58.d50ef152.js",
    "revision": "a36cbad8861ece67099bbd00bb406b7c"
  },
  {
    "url": "assets/js/59.d9f933af.js",
    "revision": "21a87a28bbb1f47eab23750efd86cec2"
  },
  {
    "url": "assets/js/6.5d2ae00f.js",
    "revision": "3e33d1ad3cea0cf224ea1b2b62741815"
  },
  {
    "url": "assets/js/60.2e9ce529.js",
    "revision": "166e4ccc1f862265df5e9b8c3b48a05b"
  },
  {
    "url": "assets/js/61.9ba8ff46.js",
    "revision": "0590c76b1fe27eea877a655e112b863f"
  },
  {
    "url": "assets/js/62.67a8ca9b.js",
    "revision": "13d3e4955fcd3712d59dfc228eb4c88f"
  },
  {
    "url": "assets/js/63.1194eb57.js",
    "revision": "08cdbbd76abffc4e1a36325a9e16bc81"
  },
  {
    "url": "assets/js/64.7967706d.js",
    "revision": "9fe900734b399a911793250c104fd361"
  },
  {
    "url": "assets/js/65.195ca08b.js",
    "revision": "9264e6a5d579479428ff12b3d080042e"
  },
  {
    "url": "assets/js/66.cca2d474.js",
    "revision": "0ef7610e1472a087c76d9cc88dbe09a0"
  },
  {
    "url": "assets/js/67.3d2bf791.js",
    "revision": "1640107d75fad012baef6438c4bde1a5"
  },
  {
    "url": "assets/js/68.1caf4ed8.js",
    "revision": "3a52ac03c8073932c33853e058861931"
  },
  {
    "url": "assets/js/69.5b9c7ef8.js",
    "revision": "8cce1ed520ef507a955beee2f8f232da"
  },
  {
    "url": "assets/js/70.4f552f46.js",
    "revision": "fe73201be597ca8b866dad48a4b07ad0"
  },
  {
    "url": "assets/js/71.17217ee8.js",
    "revision": "a7eb1510e7c1f17b6576b6f2773609be"
  },
  {
    "url": "assets/js/72.4460cb94.js",
    "revision": "336828540667e556c0b3c3427ceed6ce"
  },
  {
    "url": "assets/js/73.1a991a7d.js",
    "revision": "b11ea6a8d590327f7eedbbf42fa7eafa"
  },
  {
    "url": "assets/js/74.dc7eba06.js",
    "revision": "2867eb614e5fd00c7a22c58b2775e85a"
  },
  {
    "url": "assets/js/9.265af838.js",
    "revision": "3e4fc457a7407edaff3b9fd27f46261b"
  },
  {
    "url": "assets/js/app.7786b0ad.js",
    "revision": "d1a5ebee75a8819aff559663b149708f"
  },
  {
    "url": "assets/js/vendors~search-page.c7cdcc91.js",
    "revision": "0b358385a91014738c32277ed4d5958b"
  },
  {
    "url": "guide/axios.html",
    "revision": "1a0f89227cc1eb0281dbed45ff78b1ce"
  },
  {
    "url": "guide/book.html",
    "revision": "9ca5383639ae75a9f03ccbb34c7a56dc"
  },
  {
    "url": "guide/css.html",
    "revision": "4e112897aaf5fc9ffc2aab5bc938a580"
  },
  {
    "url": "guide/index.html",
    "revision": "742c99e2b9e98550d5d9b7378c0910fe"
  },
  {
    "url": "guide/install.html",
    "revision": "c638c8b037f4c0f0f76bbafbf615d7f1"
  },
  {
    "url": "guide/jiexi.html",
    "revision": "0b211ded1f97936a9bab926e4ede6539"
  },
  {
    "url": "guide/kugou.html",
    "revision": "3fe3bcca72aa840fee2a83ac9941cdb8"
  },
  {
    "url": "guide/live.html",
    "revision": "eaf600e970f91d72a7bb11a0dc76d85a"
  },
  {
    "url": "guide/movie.html",
    "revision": "2e156caf9f34bb7ceacc5bc03f63a4f9"
  },
  {
    "url": "guide/music.html",
    "revision": "b52ca9be887d66f414678d0baa67101a"
  },
  {
    "url": "guide/phpdl.html",
    "revision": "27b6d1e8a53a31413f4db3dd15daeecd"
  },
  {
    "url": "guide/plays.html",
    "revision": "dbedbef220ee77a5aad82e5548bfeadf"
  },
  {
    "url": "guide/read.html",
    "revision": "6dbc9627807d6282a8613897801afa24"
  },
  {
    "url": "guide/tools.html",
    "revision": "c4255cf2a673e8f5b1cd331d372b6678"
  },
  {
    "url": "guide/tv.html",
    "revision": "631de9bbe2fbf70d8c9144f4a7e4163f"
  },
  {
    "url": "guide/video.html",
    "revision": "1dfe4324bacf97076b9ff50c1a959380"
  },
  {
    "url": "images/AccessibilityChromeDeveloperTools.png",
    "revision": "25c2a61b52ea8753aa4693a16abaa43f"
  },
  {
    "url": "images/AccessibleARIAdescribedby.png",
    "revision": "d2b26eb9ae0006509801691c289a86d3"
  },
  {
    "url": "images/AccessibleARIAlabelDevTools.png",
    "revision": "05cb34b380cef9627d5c9a3c0ba64dca"
  },
  {
    "url": "images/AccessibleARIAlabelledbyDevTools.png",
    "revision": "1554e00985256ca1042caffbf59709cc"
  },
  {
    "url": "images/AccessibleLabelChromeDevTools.png",
    "revision": "5b9d491c368093887624f4dfacdb6431"
  },
  {
    "url": "images/ads.png",
    "revision": "4c287da71f0d24c6cafd44de4b51fcd6"
  },
  {
    "url": "images/alipay.png",
    "revision": "4f26a1b666a9a5bf98466cb97623b720"
  },
  {
    "url": "images/background1.jpg",
    "revision": "fc242cdea0ebd7fd399e86b34d229a6e"
  },
  {
    "url": "images/bank.png",
    "revision": "335196f339a769d45405f25e68b8271e"
  },
  {
    "url": "images/breakpoint_hit.png",
    "revision": "114924925a4ec0f23236012bc3dc8422"
  },
  {
    "url": "images/breakpoint_set.png",
    "revision": "6439856732303cfeb3806d52dd681191"
  },
  {
    "url": "images/btn_1.png",
    "revision": "007eb76666d2bf16caea647ff6ec6d47"
  },
  {
    "url": "images/btn_2.png",
    "revision": "e357c8a3bc95e2b13e29cd53c191c41f"
  },
  {
    "url": "images/btn_3.png",
    "revision": "fdcd538fcc4f19d9f1a5701267c8defa"
  },
  {
    "url": "images/btn_4.png",
    "revision": "54058f69e737a4a28ff9b8c2a0fa3c45"
  },
  {
    "url": "images/btn_5.png",
    "revision": "ee37b151e82091273a0e881768a9a68a"
  },
  {
    "url": "images/btn_6.png",
    "revision": "89c3fae23df6d4691e5feed98cd24507"
  },
  {
    "url": "images/btn_7.png",
    "revision": "5b34d31b7f385ffbc0e23f560e220349"
  },
  {
    "url": "images/coin-bch.png",
    "revision": "ddfab54149483e02f3cd540a47e2782b"
  },
  {
    "url": "images/coin-btc.png",
    "revision": "d90559bb202766dd6ddabf71dd1680be"
  },
  {
    "url": "images/coin-eth.png",
    "revision": "70ae70292937880fe9e77c2c7dc38f86"
  },
  {
    "url": "images/coin-ltc.png",
    "revision": "9e756bd611ac7355515153cecbc20d36"
  },
  {
    "url": "images/components_provide.png",
    "revision": "f7110a1bae2d0744997012ca656d8fa1"
  },
  {
    "url": "images/components.png",
    "revision": "b5c08269dfc26ae6d7db3801e9efd296"
  },
  {
    "url": "images/config_add.png",
    "revision": "353cd8b2a1bdf9fc4c74a80c5f38090a"
  },
  {
    "url": "images/css-vs-js-ease.svg",
    "revision": "d326f3556b9001865ed2fd91faebf620"
  },
  {
    "url": "images/dash.png",
    "revision": "e7ff30a9b5456e4f1e881acea7186af8"
  },
  {
    "url": "images/devtools-timetravel.gif",
    "revision": "fca84f3fb8a8d10274eb2fc7ed9b65f9"
  },
  {
    "url": "images/dom-tree.png",
    "revision": "f70b86bfbbfe1962dc5d6125105f1122"
  },
  {
    "url": "images/editable-svg-icons-sizes.png",
    "revision": "43fe12e12ab70fbc0f4bc608fa68a4fd"
  },
  {
    "url": "images/editable-svg-icons.jpg",
    "revision": "0ffbaae28a3a71279e89c4e515f3519b"
  },
  {
    "url": "images/icons/android-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/android-icon-192x192.png",
    "revision": "5d10eaab941eb596ee59ffc53652d035"
  },
  {
    "url": "images/icons/android-icon-36x36.png",
    "revision": "bb757d234def1a6b53d793dbf4879578"
  },
  {
    "url": "images/icons/android-icon-48x48.png",
    "revision": "0d33c4fc51e2bb020bf8dd7cd05db875"
  },
  {
    "url": "images/icons/android-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/android-icon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/apple-icon-114x114.png",
    "revision": "f4fd30f3a26b932843b8c5cef9f2186e"
  },
  {
    "url": "images/icons/apple-icon-120x120.png",
    "revision": "b6a574d63d52ef9c89189b67bcac5cbd"
  },
  {
    "url": "images/icons/apple-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/apple-icon-152x152.png",
    "revision": "f53787bf41febf2b044931a305ccaf2a"
  },
  {
    "url": "images/icons/apple-icon-180x180.png",
    "revision": "9f6b1e3b92b2c5bd5b7d79501bb6e612"
  },
  {
    "url": "images/icons/apple-icon-57x57.png",
    "revision": "83f622ba0994866abc56ace068b6551c"
  },
  {
    "url": "images/icons/apple-icon-60x60.png",
    "revision": "643f761bc39f86c70f17cd1fed3b8e08"
  },
  {
    "url": "images/icons/apple-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/apple-icon-76x76.png",
    "revision": "94d9af047b86d99657b5efb88a0d1c7b"
  },
  {
    "url": "images/icons/apple-icon-precomposed.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/apple-icon.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/bacancy_technology.png",
    "revision": "5810bb8253b1e35ba437373ff83f82d3"
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
    "url": "images/icons/favicon-16x16.png",
    "revision": "a5a9da66870189b0539223c38c8a7749"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "3d60db0d77303b2414ddd50cf2472bf7"
  },
  {
    "url": "images/icons/favicon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/info.svg",
    "revision": "39d1a12b97555d796d4dcda9bf403429"
  },
  {
    "url": "images/icons/ms-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/ms-icon-150x150.png",
    "revision": "e8cdf492981122a2548bc247c7b4067d"
  },
  {
    "url": "images/icons/ms-icon-310x310.png",
    "revision": "1721f8303ec2349002b5980a01f27cef"
  },
  {
    "url": "images/icons/ms-icon-70x70.png",
    "revision": "a110cf0132b00b23a8605ca72a8874ba"
  },
  {
    "url": "images/icons/stop.svg",
    "revision": "7d577a225ddf7f95f96032b3eefb48b6"
  },
  {
    "url": "images/imooc-ad3.png",
    "revision": "a8b8084e0bb616cef5637f589d0c3a49"
  },
  {
    "url": "images/lifecycle.svg",
    "revision": "647c49f5e77ed510ca62c6522248dd99"
  },
  {
    "url": "images/logo.jpg",
    "revision": "baaa798caa8f1352fcb098f643e1e538"
  },
  {
    "url": "images/logo.png",
    "revision": "d4d6f00ef56ad387bc412112565a6f52"
  },
  {
    "url": "images/nopic.png",
    "revision": "11b3d729f5775a8bfd46a0a926cfe64d"
  },
  {
    "url": "images/options-api.png",
    "revision": "f268f15922a54dc18716ea6df8274691"
  },
  {
    "url": "images/oxford-comma.jpg",
    "revision": "8a220093d78172e4eb9d98529f9fba05"
  },
  {
    "url": "images/partners/monterail.png",
    "revision": "db165491374f80cc4f3190a0ebd918ad"
  },
  {
    "url": "images/partners/vehikl.png",
    "revision": "65f4ae56972001f689053fba43129433"
  },
  {
    "url": "images/paypal.png",
    "revision": "067bd556ce9e4c76538a8057adb6d596"
  },
  {
    "url": "images/play.png",
    "revision": "962a469ab60335411bfa222cae2916e1"
  },
  {
    "url": "images/qqpay.png",
    "revision": "211c6f99629015a87e300f501e0c5ae8"
  },
  {
    "url": "images/qqqun.png",
    "revision": "40611fe246973180c361070b1a228a38"
  },
  {
    "url": "images/resizeApi.png",
    "revision": "3b10524eb11fd194f743cb4fd8377c51"
  },
  {
    "url": "images/scoped-slot.png",
    "revision": "c6ef14ba02eac288245c5c5009d966cc"
  },
  {
    "url": "images/sfc-with-preprocessors.png",
    "revision": "2e57ecfafeac2237d5a003ad9a0ef7bc"
  },
  {
    "url": "images/sfc.png",
    "revision": "e333ce3bf8119bef381ac7c7b2bbd4ba"
  },
  {
    "url": "images/shunfengads.png",
    "revision": "d03c0a3426991d1fe11d976a91fb8adf"
  },
  {
    "url": "images/skin-default-b.jpg",
    "revision": "79f06236445ac34f948d7429d8d7f22e"
  },
  {
    "url": "images/skin-default-m.jpg",
    "revision": "35905b0ba7e207e112c6ac04614138df"
  },
  {
    "url": "images/skin-default-t.jpg",
    "revision": "ece62008d6c620bedddfbbe4b94f5943"
  },
  {
    "url": "images/slot.png",
    "revision": "00cf6bd787014eb22b2821d72b80212a"
  },
  {
    "url": "images/sponsors/autocode.svg",
    "revision": "e1c1c17d96d289b20b2d91819a4c9e4d"
  },
  {
    "url": "images/sponsors/bacancy_technology.png",
    "revision": "9a0590eb4ce29289b454240415611162"
  },
  {
    "url": "images/sponsors/bestvpn_co.png",
    "revision": "afbe252b6b59bc3cdac2e7dec69eac39"
  },
  {
    "url": "images/sponsors/bit.png",
    "revision": "9638a3f44bf471876effb80ea0659f73"
  },
  {
    "url": "images/sponsors/chaitin.png",
    "revision": "549e43997790dc624c477424acbfe228"
  },
  {
    "url": "images/sponsors/cloudstudio.png",
    "revision": "fc480cf4c2b06591f58e7e91666226af"
  },
  {
    "url": "images/sponsors/dcloud.gif",
    "revision": "ade7c64e66506b6cff10292efea16ee8"
  },
  {
    "url": "images/sponsors/devexpress.png",
    "revision": "a6d9c786a373088c8d238ca643293c17"
  },
  {
    "url": "images/sponsors/devsquad.png",
    "revision": "e639ea4fd0d7053fc0928d4ff9fefb2a"
  },
  {
    "url": "images/sponsors/fastcoding_inc.png",
    "revision": "08a0a7652db79fa3395c0ef28d49f0cd"
  },
  {
    "url": "images/sponsors/fastcoding_inc.svg",
    "revision": "9d33d7905c4fb224aba61de096505794"
  },
  {
    "url": "images/sponsors/firestick_tricks.png",
    "revision": "1ee05223a5b12fe910cb8428d57223d8"
  },
  {
    "url": "images/sponsors/flatlogic_templates.svg",
    "revision": "4442dca91b270a32353ee5aca44ebc33"
  },
  {
    "url": "images/sponsors/foo.png",
    "revision": "1c9cde53bb9c98a316edc93d57684e4d"
  },
  {
    "url": "images/sponsors/frontend_love.png",
    "revision": "b514babc53a0f3ddc854b0b14a54a489"
  },
  {
    "url": "images/sponsors/frontendlove.png",
    "revision": "b514babc53a0f3ddc854b0b14a54a489"
  },
  {
    "url": "images/sponsors/gridsome.png",
    "revision": "e82a2f872ec319bbb5d0a804288cd9b7"
  },
  {
    "url": "images/sponsors/happy_programmer_llc.png",
    "revision": "3f3303d42a57ff9edf36373f59d376af"
  },
  {
    "url": "images/sponsors/html_burger.png",
    "revision": "c7ce1344d001e7a236a89694ed59d988"
  },
  {
    "url": "images/sponsors/icons_8.png",
    "revision": "ffcdd01817ecdb32b92bd2f1e4d75e84"
  },
  {
    "url": "images/sponsors/icons.png",
    "revision": "ad6ee8c400066e15712cdef4342023da"
  },
  {
    "url": "images/sponsors/imooc-sponsor.png",
    "revision": "7ddc7f938fbbc08f816a888225786a4c"
  },
  {
    "url": "images/sponsors/imooc-sponsor2.png",
    "revision": "ce9575f62520e0ac8b7d93ada2c6b274"
  },
  {
    "url": "images/sponsors/inkoop.png",
    "revision": "1cff77d2c927657d3aceeba2c12db892"
  },
  {
    "url": "images/sponsors/intygrate.png",
    "revision": "fdd390b44a4aeed763f53f4e8f6529e4"
  },
  {
    "url": "images/sponsors/isolutions_uk_limited.png",
    "revision": "0f76512940c38b72fcf48337b4d64692"
  },
  {
    "url": "images/sponsors/laravel.png",
    "revision": "26ece85fc10e3d137564a414a0168b7b"
  },
  {
    "url": "images/sponsors/modus.png",
    "revision": "6498c04fee5b8542449b350e77180379"
  },
  {
    "url": "images/sponsors/Monterail.png",
    "revision": "bf1ec94a0ca48f0e6be0c97fa60a42c0"
  },
  {
    "url": "images/sponsors/moovweb.png",
    "revision": "8183954731fdeb0f136fac1485198184"
  },
  {
    "url": "images/sponsors/neds.png",
    "revision": "1f1a2a46c2575019ae07a90205f60b65"
  },
  {
    "url": "images/sponsors/onsen_ui.png",
    "revision": "e41569bcb10fbca3f361d818b29ed7fd"
  },
  {
    "url": "images/sponsors/passionate_people.png",
    "revision": "03e59e28347e1dcd165e4e1525afb545"
  },
  {
    "url": "images/sponsors/primevue copy.png",
    "revision": "60f2e8fb0dce3e9045fc3a2a8039fa82"
  },
  {
    "url": "images/sponsors/primevue.png",
    "revision": "60f2e8fb0dce3e9045fc3a2a8039fa82"
  },
  {
    "url": "images/sponsors/programmers_io.png",
    "revision": "02cb415eb9a8e9ce6579c7aff03759dd"
  },
  {
    "url": "images/sponsors/pullrequest.svg",
    "revision": "50847513b306736d33234d50b11c5e1d"
  },
  {
    "url": "images/sponsors/retool.png",
    "revision": "aaad6a749deb625da5771750dcb51920"
  },
  {
    "url": "images/sponsors/roadster.png",
    "revision": "080fb711e736d686f182358a582d7c6b"
  },
  {
    "url": "images/sponsors/shopware_ag.png",
    "revision": "e2ded483c0660bd629938e37f388d9fb"
  },
  {
    "url": "images/sponsors/storekit.png",
    "revision": "cacf47116e5efe9fc2dcd60ebc197707"
  },
  {
    "url": "images/sponsors/storyblok.png",
    "revision": "64ec1772109b769e91138b58526484ad"
  },
  {
    "url": "images/sponsors/tidelift.png",
    "revision": "831935bd53d7d2d4eea9427c5f874816"
  },
  {
    "url": "images/sponsors/tighten_co.png",
    "revision": "003364e7044150e2979cbfe03d640cec"
  },
  {
    "url": "images/sponsors/tooltwist.png",
    "revision": "b81bfd5ae608e965d03aaa5a4164373e"
  },
  {
    "url": "images/sponsors/unicorn.png",
    "revision": "e0c072bd78f366471a393b9c366c9b74"
  },
  {
    "url": "images/sponsors/usave.png",
    "revision": "5cffd5053b1d75ae49c9b6eb176e0ccf"
  },
  {
    "url": "images/sponsors/valuecoders.png",
    "revision": "818ca42a745e018ace0c55c36a7ae3dd"
  },
  {
    "url": "images/sponsors/vehikl.png",
    "revision": "3bd1b88aa9d242d308e838f2342d7660"
  },
  {
    "url": "images/sponsors/vpnranks.png",
    "revision": "35d7392e773d487e13358d8b5f7fb646"
  },
  {
    "url": "images/sponsors/vuejobs.png",
    "revision": "77ed618e17571d1a2d77ad7bc53e8fc4"
  },
  {
    "url": "images/sponsors/vuemastery.png",
    "revision": "6f09ce143467fba22039bde3f2070c19"
  },
  {
    "url": "images/sponsors/vueschool.png",
    "revision": "3d92b4f1a8fcbe3be0d0e89950a1a705"
  },
  {
    "url": "images/sponsors/vuetify.png",
    "revision": "c7cfff77abb10162cb0b7c2ed3b6ac51"
  },
  {
    "url": "images/sponsors/watchcartoononline.png",
    "revision": "f7cf1082b14003908496f02f9eb2ae00"
  },
  {
    "url": "images/sponsors/webdock.png",
    "revision": "6b8d3d271ba4d05daf83ad75d21221d1"
  },
  {
    "url": "images/sponsors/webucator.png",
    "revision": "3c87885f4c36bc1b07f8c2b547e84b6f"
  },
  {
    "url": "images/sponsors/wilderminds.png",
    "revision": "cd98b69653b51369da2e765097f13d6f"
  },
  {
    "url": "images/sponsors/writers_per_hour.jpg",
    "revision": "2033e6d7e88969e97e78e38d8d030eb9"
  },
  {
    "url": "images/sponsors/x_team.png",
    "revision": "a6cfaebb0c0dc17d348bc9c6fd5758ef"
  },
  {
    "url": "images/sponsors/y8.png",
    "revision": "3cdd8826d3419751f40a8aa7f90cd539"
  },
  {
    "url": "images/sponsors/yakaz.png",
    "revision": "f1918919114e35d6091e67370450e8bd"
  },
  {
    "url": "images/sponsors/youku.png",
    "revision": "1cce2782971aed63d38b17e28614d512"
  },
  {
    "url": "images/state.png",
    "revision": "6a05b01942c7d2cff4ea0033ded59ebb"
  },
  {
    "url": "images/transition.png",
    "revision": "5990c1dff7dc7a8fb3b34b4462bd0105"
  },
  {
    "url": "images/transitions.svg",
    "revision": "f0002fdb27ed433579d15f67c3b06153"
  },
  {
    "url": "images/v-bind-instead-of-sync.png",
    "revision": "cb59705b61fd5a75b1903f6a0b497cb1"
  },
  {
    "url": "images/VIP-TV-LOGO-FINAL-360x360.png",
    "revision": "a0a0de49222399491fc223def100c6ab"
  },
  {
    "url": "images/VIP-TV-LOGO-FINAL-600x600.png",
    "revision": "e00049d4824b4080f73e7a3ffaa74a1d"
  },
  {
    "url": "images/vip.png",
    "revision": "521de00cbc283d906e105bea8769d276"
  },
  {
    "url": "images/VIPTV-12MONTHS-768x768.png",
    "revision": "cdccb24ecde3b1674f72913204b02139"
  },
  {
    "url": "images/VIPTV-6MONTHS-768x768.png",
    "revision": "6138637cedf4f081abe233c27c4a00b0"
  },
  {
    "url": "images/VIPTV-LOGO-LONG-FINAL@1x-360x105.png",
    "revision": "485839bf72410fe71001c8d5aa3a2442"
  },
  {
    "url": "images/VIPTV-LOGO-LONG-FINAL@1x-600x175.png",
    "revision": "40d793daa76c84a13fbe80b5724d1618"
  },
  {
    "url": "images/VIPTV-LOGO-LONG@1x.png",
    "revision": "99674e44f30a8ac6cc6a6619c63fbdb7"
  },
  {
    "url": "images/vod.jpg",
    "revision": "f91d765d2c37e1de7cbd261f072c0c5e"
  },
  {
    "url": "images/wxpay.png",
    "revision": "1d0c4600af777bf5ed21efd038c9ccf9"
  },
  {
    "url": "images/xiaogong.png",
    "revision": "c2a5cc43d620c00c5f060952cf6ee85a"
  },
  {
    "url": "index.html",
    "revision": "19de62b845e8b2427062b80672c8255c"
  },
  {
    "url": "logo.png",
    "revision": "a0a0de49222399491fc223def100c6ab"
  },
  {
    "url": "plugins/index.html",
    "revision": "12a59dc95f74a6ad2151c3e83f54a2f8"
  },
  {
    "url": "source/ads.html",
    "revision": "568899bfdeeb542b69d9616d14920c38"
  },
  {
    "url": "source/byou.html",
    "revision": "21876a65e18fc3c7d1054f96d8ff4b58"
  },
  {
    "url": "source/free.html",
    "revision": "ae81f0e637d34d40c6eb29ffcc85b8a4"
  },
  {
    "url": "source/index.html",
    "revision": "4fdff84f8c67086bed85103af4286da2"
  },
  {
    "url": "source/migu.html",
    "revision": "85cf7d6dfee7cb448f641fd458c92a7c"
  },
  {
    "url": "source/mlive.html",
    "revision": "2980f8e530422168a98be2d59e7dc7f5"
  },
  {
    "url": "source/movie.html",
    "revision": "0e55e866690e7e3ed412f10b57ebc4e8"
  },
  {
    "url": "source/org.html",
    "revision": "25e9c572a48fce6f13b91efca2188724"
  },
  {
    "url": "source/qyun.html",
    "revision": "503a0fc8d856bfae4d2039293486ff76"
  },
  {
    "url": "source/ttou.html",
    "revision": "95f47a3ec70b7fe95311e10869fddcf1"
  },
  {
    "url": "source/tvhezi.html",
    "revision": "595f5723385d899dac358d2dd91506f6"
  },
  {
    "url": "source/windows.html",
    "revision": "ec719b6002d79f42efa15bede41fced5"
  },
  {
    "url": "source/xxx.html",
    "revision": "1ab8ab0cf960b6e359ce1885b8689528"
  },
  {
    "url": "source/ygd.html",
    "revision": "c91e3b0f4e951df4eb548f6f9a0fd8f4"
  },
  {
    "url": "template/800cms/Base.html",
    "revision": "a65bd4ac143210bad1edb19655d41bef"
  },
  {
    "url": "template/index.html",
    "revision": "d82eceed20af0f720f13d7c3e8af8754"
  },
  {
    "url": "template/maccms/Base.html",
    "revision": "652b6a20d856d6ebeb2779fc06daf154"
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
