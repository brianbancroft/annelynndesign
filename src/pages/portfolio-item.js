import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import {
  PortfolioHeader,
  Footer,
  sectionSingleImage,
  sectionMultiImage,
  ImageModal,
} from '../components/portfolio'

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
    const handleOpen = ({ modalImage, title } = {}) => () => {
      this.setState({ showModal: true, modalImage, title })
    }
    const handleClose = () => this.setState({ showModal: false })

    const {
      contentfulPortfolioItem: {
        color,
        slug,
        copy: { copy },
        headerSectionTextColor,
        headline,
        title,
        colorAndTypographyPane,
        conceptAndIdeasPane,
        requirementsAndProductPane,
        supportingConceptsPane,
        previewImage: {
          file: { url: previewImage },
        },
      },
    } = this.props.data

    const multiImageSections = [
      conceptAndIdeasPane,
      colorAndTypographyPane,
      supportingConceptsPane,
    ].map(section => sectionMultiImage({ section, color, handleOpen }))

    const singleImageSections = sectionSingleImage({
      section: requirementsAndProductPane,
      color,
    })

    return (
      <Layout>
        <Helmet
          title={`${title} - Anne-Lynn Design`}
          meta={[
            {
              name: 'description',
              property: 'description',
              content: copy,
            },
            {
              name: 'keywords',
              property: 'keywords',
              content: `anne-lynn hanna, annelynn design, anne-lynn design, ${title}`,
            },
            {
              name: 'theme-color',
              property: 'theme-color',
              content: color,
            },
            {
              property: 'og:title',
              content: headline,
            },
            {
              property: 'og:description',
              content: copy,
            },

            {
              property: 'og:url',
              name: 'og:url',
              content: `${slug}`,
            },
            {
              property: 'twitter:url',
              name: 'twitter:url',
              content: `${slug}`,
            },
            {
              property: 'og:type',
              name: 'og:type',
              content: 'portfolio',
            },

            {
              property: 'og:image:secure_url',
              name: 'og:image:secure_url',
              content: `https:${previewImage}`,
            },

            {
              property: 'og:image',
              name: 'og:image:secure_url',
              content: `http:${previewImage}`,
            },
            {
              name: 'twitter:image:src',
              property: 'twitter:image:src',
              content: `https:${previewImage}`,
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:title',
              content: headline,
            },
            {
              name: 'twitter:description',
              content: copy,
            },
            {
              name: 'twitter:image',
              content: `https:${previewImage}`,
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
          style={{ zIndex: 5, background: 'white', marginBottom: '65px' }}
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
      </Layout>
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
      previewImage {
        file {
          url
        }
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
          original: file {
            src: url
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

          fixed(width: 650) {
            src
            srcSet
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
          original: file {
            src: url
          }
          fluid(maxWidth: 600) {
            src
            srcSet
            sizes
            aspectRatio
          }
          fixed(width: 650) {
            src
            srcSet
            width
            height
            aspectRatio
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
          original: file {
            src: url
          }

          fluid(maxWidth: 600) {
            src
            srcSet
            sizes
            aspectRatio
          }
          fixed(width: 650) {
            src
            srcSet
            width
            height
            aspectRatio
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
          original: file {
            src: url
          }
          resolutions(width: 1600) {
            width
            height
            src
            srcSet
            aspectRatio
          }
          fluid(maxWidth: 600) {
            src
            srcSet
            sizes
            aspectRatio
          }
          fixed(width: 650) {
            src
            srcSet
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
