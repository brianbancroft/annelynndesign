import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import meta from '../helpers/meta'

import {
  PortfolioHeader,
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

    let {
      contentfulPortfolioItem: {
        color,
        slug,
        copy,
        headerSectionTextColor,
        headline,
        title,
        colorAndTypographyPane,
        conceptAndIdeasPane,
        requirementsAndProductPane,
        supportingConceptsPane,
        previewImage,
        ogPreviewImage,
      },
    } = this.props.data

    copy = copy ? copy.copy : null

    const multiImageSections = [
      conceptAndIdeasPane,
      colorAndTypographyPane,
      supportingConceptsPane,
    ].map(section => sectionMultiImage({ section, color, handleOpen }))

    const singleImageSections = sectionSingleImage({
      section: requirementsAndProductPane,
      color,
      handleOpen,
    })

    let socialMediaPreview
    if (ogPreviewImage) {
      socialMediaPreview = `https:${ogPreviewImage.file.url}`
    } else if (previewImage) {
      socialMediaPreview = `https:${previewImage.file.url}`
    }

    const portfolioMeta = meta({
      copy,
      title,
      headline,
      slug,
      color,
      ogImage: socialMediaPreview,
    })

    return (
      <>
        <Helmet title={`${title} | Anne-Lynn Design`} meta={portfolioMeta}>
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
          style={{ zIndex: 5, background: 'white', marginBottom: '85px' }}
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
        {/* <AlternateFooterBg backgroundColor={color} /> */}
      </>
    )
  }
}

export default PortfolioItem

export const pageQuery = graphql`
  fragment requirementsAndProducts on ContentfulARequirementsAndProductPane {
    id
    title
    copy {
      copy
    }
    image {
      id
      title
      original: file {
        src: url
      }
      fluid(maxWidth: 700) {
        src
        srcSet
        sizes
        aspectRatio
      }
    }
    imagePosition
  }

  fragment conceptAndIdeas on ContentfulBConceptsAndIdeasPane {
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
      slider: fixed(width: 600, height: 720, resizingBehavior: PAD) {
        src
      }
      fluid(maxWidth: 600) {
        src
        srcSet
        sizes
        aspectRatio
      }
    }
  }

  fragment colorAndTypography on ContentfulCColorAndTypographyPane {
    id
    title
    imagePosition
    copy {
      copy
    }
    images {
      id
      title
      slider: fixed(width: 600, height: 720, resizingBehavior: PAD) {
        src
      }
      original: file {
        src: url
      }
      fluid(maxWidth: 600) {
        src
        srcSet
        sizes
        aspectRatio
      }
    }
  }

  fragment supportingConcepts on ContentfulDSupportingContentPane {
    id
    title
    copy {
      copy
    }
    images {
      id
      title
      slider: fixed(width: 600, height: 720, resizingBehavior: PAD) {
        src
      }
      original: file {
        src: url
      }
      fluid(maxWidth: 600) {
        src
        srcSet
        sizes
        aspectRatio
      }
    }
    imagePosition
  }

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
      ogPreviewImage {
        file {
          url
        }
      }
      previewImage {
        file {
          url
        }
      }
      requirementsAndProductPane {
        ...requirementsAndProducts
      }
      conceptAndIdeasPane {
        ...conceptAndIdeas
      }
      colorAndTypographyPane {
        ...colorAndTypography
      }
      supportingConceptsPane {
        ...supportingConcepts
      }
    }
  }
`
