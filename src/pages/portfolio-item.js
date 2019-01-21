import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import {
  PortfolioHeader,
  Footer,
  sectionSingleImage,
  sectionMultiImage,
  ImageModal,
} from '../components/portfolio'
import './portfolio-item.module.css'

class PortfolioItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      modalImage: undefined,
      modalTitle: undefined,
    }
  }

  render() {
    const handleOpen = ({ modalImage, title } = {}) => () =>
      this.setState({ showModal: true, modalImage, title })
    const handleClose = () => this.setState({ showModal: false })

    const {
      contentfulPortfolioItem: {
        color,
        copy,
        headerSectionTextColor,
        headline,
        title,
        colorAndTypographyPane,
        conceptAndIdeasPane,
        requirementsAndProductPane,
        supportingConceptsPane,
      },
    } = this.props.data

    const multiImageSections = [
      colorAndTypographyPane,
      conceptAndIdeasPane,
      supportingConceptsPane,
    ].map(section => sectionMultiImage({ section, color, handleOpen }))

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
        <ImageModal
          id="imageModal"
          display={this.state.showModal}
          modalTitle={this.state.title}
          modalImage={this.state.modalImage}
          handleClose={handleClose}
        />
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

        imagePosition
      }
      conceptAndIdeasPane {
        id
        title
        imagePosition
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
        imagePosition
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
        imagePosition
      }
    }
  }
`
