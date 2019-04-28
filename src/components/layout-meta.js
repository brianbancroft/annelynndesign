import favicon from '../images/favicon.ico'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import appleTouchIcon from '../images/apple-touch-icon.png'

export const meta = [
  {
    name: 'author',
    content: 'Anne-Lynn Bancroft',
  },
  {
    name: 'robots',
    content: 'follow',
  },
  {
    property: 'og:site_name',
    content: 'Anne Lynn Design',
  },
  {
    property: 'og:locale',
    content: 'en_US',
  },
  {
    name: 'twitter:creator',
    content: '@al_bancroft',
  },
  {
    name: 'twitter:site',
    content: '@al_bancroft',
  },
]

export const helmetLink = [
  { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: `${favicon32}`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: `${favicon16}`,
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '32x32',
    href: `${appleTouchIcon}`,
  },
]
