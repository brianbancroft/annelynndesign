import favicon from '../images/favicon.ico'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import appleTouchIcon from '../images/apple-touch-icon.png'

export const layoutMeta = []

export const staticPageMeta = [
  {
    name: 'author',
    content: 'Anne Lynn',
  },
  {
    name: 'robots',
    content: 'follow',
  },
  {
    name: 'generator',
    content: 'gatsby',
  },
  {
    name: 'og:site_name',
    property: 'theme-color',
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

export const portfolioMeta = ({
  copy,
  title,
  headline,
  slug,
  ogImage,
  keywords = null,
  color = '#ffffff',
}) => [
  {
    name: 'description',
    property: 'description',
    content: copy,
  },
  {
    name: 'keywords',
    property: 'keywords',
    content: keywords
      ? `anne-lynn hanna, annelynn design, anne-lynn design, ${keywords.join(
          ', '
        )}`
      : `anne-lynn hanna, annelynn design, anne-lynn design`,
  },
  {
    name: 'theme-color',
    property: 'theme-color',
    content: color,
  },
  {
    property: 'og:title',
    content: headline,
  },
  {
    property: 'og:description',
    content: copy,
  },

  {
    property: 'og:url',
    name: 'og:url',
    content: `${slug}`,
  },
  {
    property: 'twitter:url',
    name: 'twitter:url',
    content: `${slug}`,
  },
  {
    property: 'og:type',
    name: 'og:type',
    content: 'portfolio',
  },
  {
    property: 'og:image:secure_url',
    name: 'og:image:secure_url',
    content: ogImage,
  },
  {
    property: 'og:image',
    name: 'og:image:secure_url',
    content: ogImage,
  },
  {
    name: 'twitter:image:src',
    property: 'twitter:image:src',
    content: ogImage,
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:title',
    content: headline,
  },
  {
    name: 'twitter:description',
    content: copy,
  },
  {
    name: 'twitter:image',
    content: ogImage,
  },
]

export default { portfolioMeta, layoutMeta, staticPageMeta }
