import React from 'react'
import styled, { css } from 'styled-components'
import { PortfolioCaseStudy, PortfolioSample, HeaderBar } from '.'

const MiddleSection = styled('section')`
  width: 100vw;
  min-height: 100vh;
  padding: 0 0 40px 0;

  hr {
    border-top: 1px solid #e5f1f1;
    width: 95%;
    margin-bottom: 15px;
  }
`

const Grid = styled('div')`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-auto-flow: row dense;


  ${props =>
    props.samples &&
    css`
      justify-items: center;
      align-items: center;
    `}

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 18px;
    grid-column-gap: 0;
    padding: 0px;
    margin-bottom: 40px;
  }
`

const ServicesSummary = styled('section')`
  grid-row: 2 / 3;
  grid-column: 1 / -1;

  font-size: 24px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.color['dark-2']};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 18px;
    line-height: 24px;
    padding: 0 10px;
  }
`

const Title = styled('section')`
  font-size: 45px;
  font-weight: 900;
  color: ${props => props.theme.color.primary};
  margin: 18px 0 20px 10px;
  text-transform: uppercase;
  color: #111;
  width: 100vw;
  text-align: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin: 0 0 10px 8px;
    font-size: 30px;
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
    line-height: 20px;
  }
`

const CaseStudies = ({ caseStudies }) =>
  caseStudies &&
  caseStudies.edges.map((i, key) => <PortfolioCaseStudy i={i} key={key} />)

const Samples = ({ samples }) =>
  samples && samples.edges.map((i, key) => <PortfolioSample i={i} key={key} />)

const PortfolioMosaic = props => (
  <>
    <HeaderBar />
    <Title>Anne-Lynn Design</Title>
    <Tagline>I create brands that speak to both you and your customers</Tagline>
    <MiddleSection>
      <Grid>
        <CaseStudies caseStudies={props.data.caseStudies} />
        <ServicesSummary>
          Branding • Custom logos • Packaging • Signage • Flyers • Photo
          Retouching • Mobile-friendly Websites
        </ServicesSummary>
      </Grid>
      <hr />
      <Grid samples>
        <Samples samples={props.data.samples} />
      </Grid>
    </MiddleSection>
  </>
)

export default PortfolioMosaic
