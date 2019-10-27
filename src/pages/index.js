import React from 'react'
import { graphql } from 'gatsby'
import { PortfolioMosaic } from '../components/homepage'
import Helmet from 'react-helmet'
import logo from '../images/logo.png'
import { Layout } from '../components'

const meta = [
  {
    name: 'description',
    property: 'description',
    content: `Compelling graphic design, signage and branding from Vancouver Island`,
  },
  {
    name: 'keywords',
    property: 'keywords',
    content: `anne-lynn hanna, annelynn design, anne-lynn design`,
  },
  {
    name: 'theme-color',
    property: 'theme-color',
    content: '#1e9dba',
  },
  {
    property: 'og:title',
    content: 'Portfolio | Anne-Lynn Design',
  },
  {
    property: 'og:description',
    content: `Compelling graphic design, signage and branding from Vancouver Island`,
  },

  {
    property: 'og:url',
    name: 'og:url',
    content: 'https://annelynn.com',
  },
  {
    property: 'twitter:url',
    name: 'twitter:url',
    content: 'https://annelynn.com',
  },

  {
    property: 'og:image:secure_url',
    name: 'og:image:secure_url',
    content: `https://annelynn.com/${logo}`,
  },
  {
    property: 'og:image',
    name: 'og:image:secure_url',
    content: `https://annelynn.com/${logo}`,
  },
  {
    name: 'twitter:image:src',
    property: 'twitter:image:src',
    content: `https://annelynn.com/${logo}`,
  },
  {
    property: 'og:image:height',
    content: 630,
  },
  {
    property: 'og:image:width',
    content: 1200,
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:title',
    content: 'Portfolio | Anne-Lynn Design',
  },
  {
    name: 'twitter:description',
    content: `Compelling graphic design, signage and branding from Vancouver Island`,
  },
  {
    name: 'twitter:image',
    content: `https://annelynn.com/${logo}`,
  },
]

const IndexPage = ({ data } = {}) => (
  <Layout>
    <Helmet title={`Portfolio | Anne-Lynn Design`} meta={meta} />
    <PortfolioMosaic data={data} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulCaseStudy {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMM Do, YYYY")
          previewImage {
            fixed(width: 305, height: 300, resizingBehavior: THUMB) {
              url: src
              ...GatsbyContentfulFixed_withWebp
            }
            fluid(maxHeight: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
            id
            description
            file {
              url
              contentType
            }
          }
        }
      }
    }
  }
`
