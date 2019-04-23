import React from 'react'
import { graphql } from 'gatsby'
import { PortfolioMosaic } from '../components/homepage'
import Helmet from 'react-helmet'
import logo from '../images/logo.png'
import { Layout } from '../components'

import meta from '../helpers/meta'

// const indexMeta = meta({
//   description: `The Portfolio and Contact Information Anne Lynn Bancroft, a Graphic Designer specializing in packaging and print`,
//   color: '#ffffff',
//   headline: 'Anne-Lynn Design',
//   copy:
//     'The Portfolio of Anne-Lynn Bancroft, a Graphic Designer specializing in packaging and print',
//   ogImage: `https://annelynn.com/${logo}`,
//   slug: 'https://annelynn.com',
// })

const IndexPage = ({ data } = {}) => (
  <Layout>
    <Helmet title={`Portfolio | Anne-Lynn Design`} />
    <PortfolioMosaic data={data} />
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
