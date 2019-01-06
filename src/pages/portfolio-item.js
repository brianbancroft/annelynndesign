import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import {
  PortfolioHeader,
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
      return (
        <ColorAndTypography
          colorAndTypography={colorAndTypographyPane}
          color={color}
        />
      )
  }

  const conceptAndIdeas = conceptAndIdeasPane => {
    if (conceptAndIdeasPane) {
      return (
        <ConceptsAndIdeas color={color} conceptAndIdeas={conceptAndIdeasPane} />
      )
    }
  }

  const requirementsAndProducts = requirementsAndProductPane => {
    if (requirementsAndProductPane) {
      return (
        <RequirementsAndProducts
          color={color}
          requirementsAndProducts={requirementsAndProductPane}
        />
      )
    }
  }

  const supportingConcepts = supportingConceptsPane => {
    if (supportingConceptsPane) {
      return (
        <SupportingConcepts
          color={color}
          supportingConcepts={supportingConceptsPane}
        />
      )
    }
  }

  return (
    <>
      <Helmet
        title={`${title} - Anne-Lynn Design`}
        meta={[
          {
            name: 'description',
            content: copy.copy,
          },
          {
            name: 'keywords',
            content: `anne-lynn hanna, annelynn design, anne-lynn design, ${title}`,
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Layout>
        <PortfolioHeader
          headline={headline}
          copy={copy}
          backgroundColor={color}
          headerSectionTextColor={headerSectionTextColor}
        />
        {requirementsAndProducts(requirementsAndProductPane)}
        {conceptAndIdeas(conceptAndIdeasPane)}
        {colorAndTypography(colorAndTypographyPane)}
        {supportingConcepts(supportingConceptsPane)}
      </Layout>
    </>
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
        copy {
          copy
        }
        image {
          id
          sizes {
            src
            srcSet
            sizes
          }
          title
          file {
            details {
              size
            }
            url
          }
          resolutions(width: 1600) {
            width
            height
            src
            srcSet
            aspectRatio
          }
          fluid(maxWidth: 700) {
            src
            srcSet
            sizes
            aspectRatio
          }
          fixed(height: 500) {
            src
            width
            height
            aspectRatio
          }
        }

        cssClasses {
          className
        }
      }
      conceptAndIdeasPane {
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
          fluid: fluid(maxWidth: 400) {
            src
          }
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

          fluid: fluid(maxWidth: 400) {
            src
          }
        }
        cssClasses {
          className
        }
      }
      supportingConceptsPane {
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
          resolutions(width: 1600) {
            width
            height
            src
            srcSet
            aspectRatio
          }
          fluid(maxWidth: 500) {
            src
            srcSet
            sizes
            aspectRatio
          }
          fixed(height: 500) {
            src
            width
            height
            aspectRatio
          }
        }
        cssClasses {
          className
        }
      }
    }
  }
`
