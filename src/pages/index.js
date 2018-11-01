import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Header, Portfolio, Footer } from '../components/homepage'

class IndexPage extends Component {
  handleScroll() {
    const body = document.body
    const html = document.documentElement
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
        footerSection.style.display = 'flex'
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
      <main>
        <Header />
        <Portfolio data={this.props.data} />
        <Footer />
      </main>
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
