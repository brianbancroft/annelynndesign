import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Header, Portfolio, Footer } from '../components/homepage'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import logo from '../images/logo.png'

class IndexPage extends Component {
  handleScroll() {
    const { body } = document
    const { documentElement: html } = document
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    const offset = window.pageYOffset

    const headerSection = document.getElementById('headerSection')
    const footerSection = document.getElementById('footerSection')

    if (headerSection || footerSection) {
      if (height / offset > 2.9763313609467454) {
        headerSection.style.display = 'block'
        footerSection.style.display = 'none'
      } else {
        headerSection.style.display = 'none'
        footerSection.style.display = 'grid'
      }
    }
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Layout>
        <Helmet
          title={`Anne-Lynn Design`}
          meta={[
            {
              property: 'description',
              name: 'description',
              content: `The Portfolio and Contact Information Anne Lynn Bancroft, a Graphic Designer specializing in packaging and print`,
            },
            {
              property: 'keywords',
              name: 'keywords',
              content: `Anne-Lynn Bancroft, annelynn design, anne-lynn design, print, packaging, design`,
            },

            {
              property: 'theme-color',
              name: 'theme-color',
              content: '#fff',
            },
            {
              property: 'og:title',
              name: 'og:title',
              content: 'Anne-Lynn Design',
            },
            {
              property: 'og:description',
              name: 'og:description',
              content:
                'The Portfolio of Anne-Lynn Bancroft, a Graphic Designer specializing in packaging and print',
            },
            {
              property: 'og:type',
              name: 'og:type',
              content: 'website',
            },

            {
              property: 'og:image',
              name: 'og:image',
              content: `${logo}`,
            },
            {
              property: 'og:image:secure_url',
              name: 'og:image:secure_url',
              content: `${logo}`,
            },
            {
              property: 'og:url',
              name: 'og:url',
              content: `https://staging.annelynn.com`,
            },

            {
              property: 'twitter:url',
              name: 'twitter:url',
              content: 'https://staging.annelynn.com',
            },
            {
              name: 'twitter:image:src',
              property: 'twitter:image:src',
              content: `${logo}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <>
          <Header />
          <Portfolio data={this.props.data} />
          <Footer />
        </>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPortfolioItem {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMM Do, YYYY")
          previewImage {
            id
            description
            file {
              url
              contentType
            }
          }
        }
      }
    }
  }
`
