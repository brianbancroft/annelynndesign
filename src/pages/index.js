import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'react-emotion'
import { Header, Portfolio, Footer } from '../components/homepage'
import indexStyles from './index.module.css'

const Main = styled('main')`
  body {
    margin: 0 !important;
  }
`

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
      <Main>
        <Header />
        <Portfolio data={this.props.data} />
        <Footer />
      </Main>
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
