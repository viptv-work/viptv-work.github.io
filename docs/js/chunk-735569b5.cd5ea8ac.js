(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-735569b5"],{"6b0b":function(e,t,n){"use strict";n("9896"),n("a497");var r=n("3f50"),a=n.n(r),i=n("0a5e"),o=n.n(i);n("7e70"),n("0536");t.a=function(e,t){var n;n&&!n.destroyed&&n.destroy(),n=navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)?new o.a({wrapper:"#wrapper",src:e,isLive:t,autoplay:!0,controls:!0,playsInline:!0,preload:"auto",x5VideoPlayerFullscreen:!0,x5VideoOrientation:"landscape|portrait",xWebkitAirplay:!0,muted:!1,disableUA:["Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36"]}):new a.a({wrapper:"#wrapper",src:e,autoplay:!0,isLive:t,controls:!0,plugins:[{name:"chimeeContextmenu",baseMenus:[{text:"VIPTV -【官方网站】",url:"http://viptv.work"}],menus:[]},{name:"chimeeControl",majorColor:"#de698c",hoverColor:"#4c4c4c",barShowByMouse:"move",children:{play:!0,progressTime:!0,progressBar:{layout:"one-line"},volume:!0,screen:!0}}]})}},b258:function(e,t,n){"use strict";n("e663")},e663:function(e,t,n){},f72c:function(e,t,n){"use strict";n.r(t);n("0cc4"),n("9896"),n("239c"),n("a497"),n("2871");var r=n("6b0b"),a={data:function(){return{url:"",drawer:!1,modal:!1,diy:!1}},created:function(){this.$nextTick((function(){Object(r.a)("https://cdn.hkdtmb.com/hls/35/index.m3u8",!0)}))},methods:{handleRender:function(){var e=this;this.$Modal.confirm({render:function(t){return t("Input",{props:{value:e.url,autofocus:!0,placeholder:"请输入播放地址,支持FLV|M3U|MP4格式"},on:{input:function(e){Object(r.a)(e,!1)}}})}})},getUrl:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n&&Object(r.a)(unescape(n[2]),!1),null}}},i=(n("b258"),n("4ac2")),o=Object(i.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"player"},[t("div",{staticClass:"list",on:{click:this.handleRender}},[t("div",{staticClass:"button"},[this._v("【 自定播放地址或播放列表 】")])]),t("section",{staticClass:"dplayer",attrs:{id:"wrapper"}})])}),[],!1,null,null,null);t.default=o.exports}}]);