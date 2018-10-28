import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = props => {
  console.log('test test', props)

  const porfolioItems = props.data.allContentfulPortfolioItem.edges.map(i => (
    <li>
      <Link to={`/portfolio/${i.node.slug}`}>{i.node.title}</Link>
    </li>
  ))

  return (
    <main>
      <section>
        <h1>Welcome To Anne-Lynn Design</h1>
      </section>
      <section>
        <p>This is where the content comes from</p>
        <ol>{porfolioItems}</ol>
      </section>
      <section>This is the about section...</section>
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
