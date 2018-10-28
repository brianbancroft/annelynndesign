import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const PortfolioItem = props => {
  const { contentfulPortfolioItem: item } = props.data
  console.log('test test', item)
  return (
    <Layout>
      <h1>{item.title}</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default PortfolioItem

export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      slug
      color
      createdAt
      headline

      requirementsAndProductPane {
        id
        title

        image {
          id
          title
        }
        cssClasses {
          className
        }
      }
      conceptAndIdeasPane {
        id
        title

        images {
          id
          title
        }
      }
      colorAndTypographyPane {
        id
        title

        images {
          id
          title
        }
        cssClasses {
          className
        }
      }
      supportingConceptsPane {
        id
        title

        images {
          id
          title
        }
        cssClasses {
          className
        }
      }
    }
  }
`
