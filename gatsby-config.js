require('dotenv').config({
  path: `.env`,
})

const moduleExports = {
  siteMetadata: {
    author: 'Brian Bancroft (hello@brianbancroft.ca)',
    title: 'Anne-Lynn Design',
    description:
      'Portfolio site for graphic design. Uses gatsby, netlify and contentful',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.DELIVERY_TOKEN,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Anne-Lynn Design',
    //     short_name: 'Anne-Lynn Bancroft',
    //     start_url: '/',
    //     // display: '',
    //     // icon: '', // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-119666699-9',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    `gatsby-plugin-netlify`, // ! Ensure this is the last line of the config array
  ],
}

if (process.env.PREVIEW_MODE === 'true') {
  moduleExports.plugins[0].options['host'] = 'preview.contentful.com'
}

module.exports = moduleExports
