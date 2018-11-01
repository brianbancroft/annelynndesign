import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const PortfolioItem = props => {
  const { contentfulPortfolioItem: item } = props.data
  const {
    color,
    headline,
    title,
    colorAndTypographyPane,
    conceptAndIdeasPane,
    requirementsAndProductsPane,
    supportingConceptsPane,
  } = item

  console.log('page color -> ', color)
  console.log('title -> ', title)
  console.log('Headline -> ', headline)
  console.log('colorAndTypographyPane', '-> ', colorAndTypographyPane)
  console.log(`conceptsAndIdeasPane -> `, conceptAndIdeasPane)
  console.log('requirementsAndProductsPane -> ', requirementsAndProductsPane)
  console.log('Supporting concepts pane -> ', supportingConceptsPane)

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{headline}</p>
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
