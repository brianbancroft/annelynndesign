import React from 'react'
import { graphql } from 'gatsby'
import {
  HomeHeader,
  PortfolioMosaic,
  AboutContact,
  ServicesSummary,
} from '../components/homepage'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import logo from '../images/logo.png'

const meta = [
  {
    property: 'description',
    name: 'description',
    content: `The Portfolio and Contact Information Anne Lynn Bancroft, a Graphic Designer specializing in packaging and print`,
  },
  {
    property: 'keywords',
    name: 'keywords',
    content: `Anne-Lynn Bancroft, annelynn design, anne-lynn design, print, packaging, design`,
  },

  {
    property: 'theme-color',
    name: 'theme-color',
    content: '#fff',
  },
  {
    property: 'og:title',
    name: 'og:title',
    content: 'Anne-Lynn Design',
  },
  {
    property: 'og:description',
    name: 'og:description',
    content:
      'The Portfolio of Anne-Lynn Bancroft, a Graphic Designer specializing in packaging and print',
  },
  {
    property: 'og:type',
    name: 'og:type',
    content: 'website',
  },

  {
    property: 'og:image',
    name: 'og:image',
    content: `https://annelynn.com/${logo}`,
  },
  {
    property: 'og:image:secure_url',
    name: 'og:image:secure_url',
    content: `https://annelynn.com/${logo}`,
  },
  {
    property: 'og:url',
    name: 'og:url',
    content: `https://annelynn.com`,
  },

  {
    property: 'twitter:url',
    name: 'twitter:url',
    content: 'https://annelynn.com',
  },
  {
    name: 'twitter:image:src',
    property: 'twitter:image:src',
    content: `https://annelynn.com/${logo}`,
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:title',
    content: 'Anne-Lynn Design',
  },
  {
    name: 'twitter:description',
    content:
      'The Portfolio of Anne-Lynn Bancroft, a Graphic Designer specializing in packaging and print',
  },
  {
    name: 'twitter:image',
    content: `https://annelynn.com/${logo}`,
  },
]

const IndexPage = ({ data } = {}) => (
  <Layout>
    <Helmet title={`Anne-Lynn Design`} meta={meta}>
      <html lang="en" />
    </Helmet>
    <>
      <HomeHeader />
      <PortfolioMosaic data={data} />
      <AboutContact />
    </>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPortfolioItem {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMM Do, YYYY")
          previewImage {
            fixed(width: 700, height: 600, resizingBehavior: THUMB) {
              url: src
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
