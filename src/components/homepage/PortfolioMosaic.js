import React from 'react'
import styled from '@emotion/styled'
import { PortfolioItem } from '.'

const MiddleSection = styled('section')`
  width: 100vw;
  min-height: 100vh;
  background: #f5f4f4;

  background: white;

  @supports (display: grid) {
    display: block;
  }
`

const Grid = styled('div')`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-auto-rows: 300px;
  grid-auto-flow: row dense;
`
const PortfolioMosaic = props => {
  const portfolioItems = props.data.allContentfulPortfolioItem.edges.map(
    (i, key) => <PortfolioItem i={i} key={key} />
  )

  return (
    <>
      <MiddleSection>
        <Grid>{portfolioItems}</Grid>
      </MiddleSection>
    </>
  )
}

export default PortfolioMosaic
