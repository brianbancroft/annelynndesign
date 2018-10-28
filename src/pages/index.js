import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const TopSection = styled('section')`
  width: 100vw;
  height: 100vh;
  color: #cc4851;

  .title {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 5rem;
  }
`
const MiddleSection = styled('section')`
  width: 100vw;
  height: 100vh;
  color: #f973ff;
`
const BottomSection = styled('section')`
  width: 100vw;
  height: 100vh;
  color: #dfff7f;
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

const IndexPage = props => {
  console.log('test test', props)

  const porfolioItems = props.data.allContentfulPortfolioItem.edges.map(i => (
    <Link to={`/portfolio/${i.node.slug}`}>
      {i.node.title}
      <img src="https://loremflickr.com/200/200/brazil,rio,paris,dog,cat" />
    </Link>
  ))

  return (
    <main>
      <TopSection>
        <div className="title">welcome</div>
        <div className="title">to</div>
        <div className="title">anne-lynn</div>
        <div className="title">design</div>
      </TopSection>
      <MiddleSection>
        <p>This is where the content comes from</p>
        <PortfolioItemContainer>{porfolioItems}</PortfolioItemContainer>
      </MiddleSection>
      <BottomSection>This is the about section...</BottomSection>
    </main>
  )
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
