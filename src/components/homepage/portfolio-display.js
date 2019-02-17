import React from 'react'
import styled from '@emotion/styled'
import { Contact, PortfolioItem, AboutCopy } from '.'

const MiddleSection = styled('section')`
  width: 100vw;
  min-height: 100vh;
  margin: 105vh 0;
  background: #f5f4f4;

  border-top: 2px solid #0c9a9a;
  border-bottom: 2px solid #0c9a9a;
  background: white;

  @supports (display: grid) {
    display: block;
  }
`

const Grid = styled('div')`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-auto-flow: row dense;
`

const MobileOnlySection = styled('section')`
  display: none;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: block;
    width: 100vw;
    height: 100vh;
    background: white;
  }
`

const ContactMobileSection = styled(MobileOnlySection)``

const AboutMobileSection = styled(MobileOnlySection)`
  border-top: 2px solid ${props => props.theme.color.primary};
  padding: 40px 20px 0 20px;
`

const Portfolio = props => {
  const portfolioItems = props.data.allContentfulPortfolioItem.edges.map(
    (i, key) => <PortfolioItem i={i} key={key} />
  )

  return (
    <>
      <MiddleSection>
        <Grid>{portfolioItems}</Grid>
      </MiddleSection>
      <AboutMobileSection>
        <AboutCopy />
      </AboutMobileSection>
      <ContactMobileSection>
        <Contact />
      </ContactMobileSection>
    </>
  )
}

export default Portfolio
