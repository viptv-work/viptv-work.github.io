---
home: true
heroImage: /bank.png
actionText: 极致体验
actionLink: http://viptvx.github.io/dev/
actiontarget: _blank  
altActionText: 了解更多
altActionLink: /guide/
features:
  - title: 💡 极速启动
    details: 使用原生 ESM 文件，无需打包!
  - title: ⚡️ 轻量快速
    details: 无论应用程序大小如何，都始终极快的模块热重载（HMR）
  - title: 🛠️ 功能丰富
    details: 对 TypeScript、JSX、CSS 等支持开箱即用。
  - title: 📦 优化构建
    details: 可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
  - title: 🔩 通用插件
    details: js,html,php,(微信,支付宝,百度)小程序,(原生,android, ios,SDK,HBuilderX)插件组件,页面模板,项目模板,后台模板综合开发。
  - title: 🔑 API接口
    details: 开发者经常为了各种功能而四处寻找是否有相应的API,帮助开发者更方便的调用第三方的提供的各类API接口及服务,从而更好的构建开发者生态
footer: |
  遵循 MIT 开源协议
  Copyright © 2019-2021 viptv.work
---

<div class="frontpage sponsors">
  <h2>合作伙伴</h2>
  <a v-for="{ href, src, name } of sponsors" :href="href" target="_blank" rel="noopener" aria-label="sponsor-img">
    <img :src="src" :alt="name">
  </a>
  <br>
  <a href="https://github.com/viptvx/viptvx.github.io/" target="_blank" rel="noopener">在 Gitee 上关注我们</a>
</div>

<script setup>
import sponsors from './.vitepress/theme/sponsors.json'
</script>
