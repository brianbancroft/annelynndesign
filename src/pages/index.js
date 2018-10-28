import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const HeaderSection = styled('section')`
  height: 100vh;
  padding-bottom: 4vh;
  width: 99vw;
  overflow-y: hidden;
  z-index: -1;
  top: 0;
  position: fixed;

  .title {
    width: 50%;
    min-width: 623px;
    padding: 60px;
    padding-top: 100px;
    z-index: 10;
    transform: scale(1, 1.2);
    text-shadow: white 0.1em 0.1em 0.1em;
    font-size: 90px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    line-height: 100px;
    font-weight: 100;
    color: #1e9dba;
  }
`
const MiddleSection = styled('section')`
  width: 100vw;
  min-height: 100vh;
  margin: 100vh 0;
  padding: 30px 60px;
  color: #f973ff;
  border: 2px solid #333;
  background: white;
`
const FooterSection = styled('section')`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  position: fixed;
`

const PortfolioItemContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  div {
    margin-right: 10px;
  }
`

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
        footerSection.style.display = 'block'
      }
    }
  }

  render() {
    console.log('test test', this.props)

    const porfolioItems = this.props.data.allContentfulPortfolioItem.edges.map(
      i => (
        <Link to={`/portfolio/${i.node.slug}`}>
          {i.node.title}
          <img src="https://loremflickr.com/200/200/brazil,rio,paris,dog,cat" />
        </Link>
      )
    )

    return (
      <main>
        <HeaderSection id="headerSection">
          <div className="title">welcome</div>
          <div className="title">to</div>
          <div className="title">anne-lynn</div>
          <div className="title">design</div>
        </HeaderSection>
        <MiddleSection>
          <p>This is where the content comes from</p>
          <PortfolioItemContainer>{porfolioItems}</PortfolioItemContainer>
        </MiddleSection>
        <FooterSection id="footerSection">
          This is the about section...
        </FooterSection>
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
        }
      }
    }
  }
`
