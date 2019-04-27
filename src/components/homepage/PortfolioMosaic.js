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
  padding: 0 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-auto-rows: 300px;
  grid-auto-flow: row dense;
  margin-bottom: calc(${props => props.theme.footer.height} + 20px);

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    grid-auto-rows: 190px;
  }
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
