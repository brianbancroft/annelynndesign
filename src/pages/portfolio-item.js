import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Layout } from '../components'
import { PortfolioItem } from '../components/portfolio'
import { sectionSingleImage, sectionMultiImage } from '../components/portfolio'

class PortfolioItemPage extends Component {
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

    const meta = [
      {
        name: 'description',
        property: 'description',
        content: copy,
      },
      {
        name: 'keywords',
        property: 'keywords',
        content: `anne-lynn hanna, annelynn design, anne-lynn design`,
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
        content: slug,
      },
      {
        property: 'twitter:url',
        name: 'twitter:url',
        content: slug,
      },
      {
        property: 'og:type',
        name: 'og:type',
        content: 'portfolio',
      },
      {
        property: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: socialMediaPreview,
      },
      {
        property: 'og:image',
        name: 'og:image:secure_url',
        content: socialMediaPreview,
      },
      {
        name: 'twitter:image:src',
        property: 'twitter:image:src',
        content: socialMediaPreview,
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
        content: socialMediaPreview,
      },
    ]

    return (
      <Layout portfolioHeaderColor={color}>
        <Helmet title={`${title} | Anne-Lynn Design`} meta={meta}>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
          <html lang="en" />
        </Helmet>
        <PortfolioItem
          multiImageSections={multiImageSections}
          singleImageSections={singleImageSections}
          handleClose={handleClose}
          showModal={this.state.showModal}
          modalTitle={this.state.title}
          modalImage={this.state.modalImage}
          headline={headline}
          copy={copy}
          color={color}
          headerSectionTextColor={headerSectionTextColor}
        />
      </Layout>
    )
  }
}

export default PortfolioItemPage

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
