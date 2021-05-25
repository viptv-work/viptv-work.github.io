import Theme from 'vitepress/theme'
import { h } from 'vue'
import sponsors from './sponsors.json'
import './sponsors.css'
import './custom.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'sidebar-bottom': () =>
        h('div', { class: 'sponsors' }, [
          h(
            'a',
            {
              href: 'http://viptv.gitee.io/dev',
              target: '_blank',
              rel: 'VIPTV -云视听【国内镜像站】'
            },
            [h('span', 'VIPTV -云视听【国内镜像站】')]
          ),         
          ...sponsors.map(({ href, src, name }) =>
            h(
              'a',
              {
                href,
                target: '_blank',
                rel: 'noopener',
                'aria-label': 'sponsor-img'
              },
              [h('img', { src, alt: name })]
            )
          )
        ])
    })
  }
}
