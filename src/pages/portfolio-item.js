import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Header } from '../components/portfolio'

const PortfolioItem = props => {
  const { contentfulPortfolioItem: item } = props.data
  const {
    color,
    copy,
    headerSectionTextColor,
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
      <Header
        headline={headline}
        copy={copy}
        backgroundColor={color}
        headerSectionTextColor={headerSectionTextColor}
      />
    </Layout>
  )
}

export default PortfolioItem

export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      slug
      color
      headerSectionTextColor
      createdAt
      headline
      copy {
        copy
      }

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
