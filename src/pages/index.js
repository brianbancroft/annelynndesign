import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const TopSection = styled('section')`
  width: 100vw;
  height: 110vh;
  background-color: #cc4851;
`
const MiddleSection = styled('section')`
  width: 100vw;
  height: 110vh;
  background-color: #f973ff;
`
const BottomSection = styled('section')`
  width: 100vw;
  height: 110vh;
  background-color: #dfff7f;
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
        <div>welcome</div>
        <div>to</div>
        <div>anne-lynn</div>
        <div>design</div>
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
