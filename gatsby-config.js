require('dotenv').config({
  path: `.env`,
})

const moduleExports = {
  siteMetadata: {
    title: 'Anne-Lynn Design',
  },
  plugins: [
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.DELIVERY_TOKEN,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Anne-Lynn Design',
        short_name: 'Anne-Lynn Bancroft',
        start_url: '/',
        // display: '',
        // icon: '', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:100, 300, 400, 500'],
        },
      },
    },
  ],
}

if (process.env.PREVIEW_MODE === 'true') {
  moduleExports.plugins[1].options['host'] = 'preview.contentful.com'
}

module.exports = moduleExports
