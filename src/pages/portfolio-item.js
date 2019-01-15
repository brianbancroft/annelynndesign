import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import {
  PortfolioHeader,
  Footer,
  sectionSingleImage,
  sectionMultiImage,
} from '../components/portfolio'
import './portfolio-item.module.css'

class PortfolioItem extends Component {
  render() {
    const { contentfulPortfolioItem: item } = this.props.data
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

    const multiImageSections = [
      colorAndTypographyPane,
      conceptAndIdeasPane,
      supportingConceptsPane,
    ].map(section => sectionMultiImage({ section, color }))

    const singleImageSections = sectionSingleImage({
      section: requirementsAndProductPane,
      color,
    })

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
            {
              name: 'theme-color',
              content: color,
            },
          ]}
        >
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
          <html lang="en" />
        </Helmet>
        <div
          className="porfolio-item__content"
          style={{ zIndex: 5, background: 'white', marginBottom: '105px' }}
        >
          <PortfolioHeader
            headline={headline}
            copy={copy}
            backgroundColor={color}
            headerSectionTextColor={headerSectionTextColor}
          />
          {singleImageSections}
          {multiImageSections}
        </div>
        <Footer color={color} />
      </>
    )
  }
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
