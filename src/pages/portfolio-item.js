import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import {
  Header,
  ColorAndTypography,
  ConceptsAndIdeas,
  RequirementsAndProducts,
  SupportingConcepts,
} from '../components/portfolio'

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
    requirementsAndProductPane,
    supportingConceptsPane,
  } = item

  const colorAndTypography = colorAndTypographyPane => {
    if (colorAndTypographyPane)
      return <ColorAndTypography colorAndTypography={colorAndTypographyPane} />
  }

  const conceptAndIdeas = conceptAndIdeasPane => {
    if (conceptAndIdeasPane) {
      return <ConceptsAndIdeas conceptAndIdeas={conceptAndIdeasPane} />
    }
  }

  const requirementsAndProducts = requirementsAndProductPane => {
    if (requirementsAndProductPane) {
      return (
        <RequirementsAndProducts
          requirementsAndProducts={requirementsAndProductPane}
        />
      )
    }
  }

  const supportingConcepts = supportingConceptsPane => {
    if (supportingConceptsPane) {
      return <SupportingConcepts supportingConcepts={supportingConceptsPane} />
    }
  }

  return (
    <Layout>
      <Header
        headline={headline}
        copy={copy}
        backgroundColor={color}
        headerSectionTextColor={headerSectionTextColor}
      />
      {colorAndTypography(colorAndTypographyPane)}
      {supportingConcepts(supportingConceptsPane)}
      {requirementsAndProducts(requirementsAndProductPane)}
      {conceptAndIdeas(conceptAndIdeasPane)}
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
        copy {
          copy
        }

        images {
          id
          title
          file {
            url
          }
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
