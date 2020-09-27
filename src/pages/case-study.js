import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Layout } from '../components'
import { PortfolioItem } from '../components/portfolio'
import { sectionSingleImage, sectionMultiImage } from '../components/portfolio'
import CaseStudy from '../components/portfolio/CaseStudy'

function CaseStudyPage(props) {
  const data = props.data.caseStudy

  let socialMediaPreview
  if (data.ogPreviewImage) {
    socialMediaPreview = `https:${data.ogPreviewImage.file.url}`
  } else if (data.previewImage) {
    socialMediaPreview = `https:${data.previewImage.file.url}`
  }

  const meta = [
    {
      name: 'description',
      property: 'description',
      content: data?.headline,
    },
    {
      name: 'keywords',
      property: 'keywords',
      content: `anne-lynn hanna, annelynn design, anne-lynn design`,
    },
    {
      name: 'theme-color',
      property: 'theme-color',
      content: data?.color,
    },
    {
      property: 'og:title',
      content: data?.title,
    },
    {
      property: 'og:description',
      content: data?.headline,
    },

    {
      name: 'og:url',
      content: `https://annelynn.com/${data.slug}`,
    },
    {
      property: 'twitter:url',
      name: 'twitter:url',
      content: `https://annelynn.com/${data.slug}`,
    },
    {
      name: 'og:type',
      content: 'article',
    },
    {
      property: 'og:image:secure_url',
      content: data.socialMediaPreview,
    },
    {
      property: 'og:image',
      content: data.socialMediaPreview,
    },
    {
      property: 'og:image:height',
      content: 630,
    },
    {
      property: 'og:image:width',
      content: 1200,
    },
    {
      name: 'twitter:image:src',
      property: 'twitter:image:src',
      content: data.socialMediaPreview,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: data.title,
    },
    {
      name: 'twitter:description',
      content: data.headline,
    },
    {
      name: 'twitter:image',
      content: data.socialMediaPreview,
    },
  ]

  const {
    title,
    color,
    createdAt,
    headline,
    copy: { text },
    caseStudyExampleOf: exampleOf,
    caseStudyChildContent: childContent,
  } = data

  return (
    <Layout portfolioHeaderColor={data.color}>
      <Helmet title={`${data.title} | Anne-Lynn Design`} meta={meta}>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
        <html lang="en" />
      </Helmet>
      <CaseStudy
        title={title}
        color={color}
        createdAt={createdAt}
        headline={headline}
        text={text}
        exampleOf={exampleOf}
        childContent={childContent}
      />
    </Layout>
  )
}

export default CaseStudyPage

export const pageQuery = graphql`
  fragment singleImageSectionContent on ContentfulSingleImageSection {
    __typename
    id
    title
    description {
      text: description
    }
    imagePosition
    image {
      original: file {
        src: url
      }
      fluid(maxHeight: 700) {
        # 	...GatsbyContentfulFluid_withWebp

        src
        srcSet
        sizes
        aspectRatio
      }
    }
  }

  fragment multiImageSectionContent on ContentfulMultipleImageSection {
    __typename
    id
    title
    description {
      text: description
    }
    images {
      id
      title
      original: file {
        src: url
      }
      slider: fixed(width: 600, height: 720, resizingBehavior: PAD) {
        ...GatsbyContentfulFixed_withWebp
        src
      }
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_withWebp
        src
        srcSet
        sizes
        aspectRatio
      }
    }
  }

  query RetrieveCaseStudyBySlug($slug: String) {
    caseStudy: contentfulDetailedCaseStudy(slug: { eq: $slug }) {
      id
      title
      slug
      color
      createdAt
      headline
      copy {
        text: copy
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
      caseStudyExampleOf {
        ... on ContentfulServiceTypeTag {
          name
        }
      }
      caseStudyChildContent {
        ... on ContentfulMultipleImageSection {
          ...multiImageSectionContent
        }
        ... on ContentfulSingleImageSection {
          ...singleImageSectionContent
        }
      }
    }
  }
`
