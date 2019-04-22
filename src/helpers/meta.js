module.exports = ({ copy, title, headline, slug, ogImage }) => [
  {
    name: 'description',
    property: 'description',
    content: copy,
  },
  {
    name: 'keywords',
    property: 'keywords',
    content: `anne-lynn hanna, annelynn design, anne-lynn design, ${title}`,
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
    content ogImage,
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
