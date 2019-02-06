import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Header, Portfolio, Footer } from '../components/homepage'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

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
              name: 'description',
              content: `The Portfolio and Contact Information Anne-Lynn Bancroft, a Graphic Designer specializing in packaging and print`,
            },
            {
              name: 'keywords',
              content: `Anne-Lynn Bancroft, annelynn design, anne-lynn design, print, packaging, design`,
            },

            {
              name: 'theme-color',
              content: '#fff',
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
          gridDisplayType
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
