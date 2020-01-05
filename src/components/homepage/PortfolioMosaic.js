import React from 'react'
import styled from 'styled-components'
import { PortfolioCaseStudy, PortfolioSample, HeaderBar } from '.'

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

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 190px;
    padding: 0px;
    margin-bottom: calc(1.2 * ${props => props.theme.footer.mobile.height});
  }
`

const Title = styled('section')`
  font-size: 45px;
  font-weight: 900;
  color: ${props => props.theme.color.primary};
  margin: 18px 0 30px 10px;
  text-transform: uppercase;
  color: #111;
  width: 100vw;
  text-align: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin: 0 0 10px 8px;
    font-size: 24px;
  }
`

const Tagline = styled('section')`
  color: #111;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
  width: 90vw;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin: 0px auto 20px auto;
    font-size: 14px;
  }
`

const CaseStudies = ({ caseStudies }) =>
  caseStudies.edges.map((i, key) => <PortfolioCaseStudy i={i} key={key} />)

const Samples = ({ samples }) =>
  samples.edges.map((i, key) => <PortfolioSample i={i} key={key} />)

const PortfolioMosaic = props => (
  <>
    <HeaderBar />
    <Title>Anne-Lynn Design</Title>
    <Tagline>I create brands that speak to both you and your customers</Tagline>
    <MiddleSection>
      <Grid>
        <>
          <CaseStudies caseStudies={props.data.caseStudies} />
          <Samples samples={props.data.samples} />
        </>
      </Grid>
    </MiddleSection>
  </>
)

export default PortfolioMosaic
