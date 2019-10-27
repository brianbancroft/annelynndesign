import React from 'react'
import styled from 'styled-components'
import { PortfolioCaseStudy, PortfolioSample } from '.'

const MiddleSection = styled('section')`
  width: 100vw;
  min-height: 100vh;
  background: #f5f4f4;
`

const Grid = styled('div')`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-auto-rows: 300px;
  grid-auto-flow: row dense;
  margin-bottom: ${props => `calc(${props.theme.footer.height} + 20px)`};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 190px;
  }
`

const Title = styled('section')`
  font-size: 36px;
  font-weight: 200;
  color: ${props => props.theme.color.primary};
  margin: 18px 0 10px 10px;
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin: 8px 0 0 8px;
    font-size: 24px;
  }
`

const PortfolioMosaic = props => {
  const caseStudies = props.data.caseStudies.edges.map((i, key) => (
    <PortfolioCaseStudy i={i} key={key} />
  ))

  const samples = props.data.samples.edges.map((i, key) => (
    <PortfolioSample i={i} key={key} />
  ))

  return (
    <>
      <Title>Anne-Lynn Design</Title>
      <MiddleSection>
        <Grid>
          <>
            {caseStudies}
            {samples}
          </>
        </Grid>
      </MiddleSection>
    </>
  )
}

export default PortfolioMosaic
