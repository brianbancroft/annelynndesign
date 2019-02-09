import React from 'react'
import styled from '@emotion/styled'

const HeaderSection = styled('section')`
  background: ${props => props.backgroundColor || '#1402ba'};
  color: ${props => props.headerSectionTextColor || '#efefef'};
  width: 100vw;
  height: calc(100vh - 30px);

  display: grid;
  grid-template-columns: 1fr 800px 1fr;
  grid-template-rows: 1fr 80px 1fr;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 5vw 90vw 5vw;
    grid-template-rows: 33vh 80px 1fr;
  }
`

const Header = styled('div')`
  font-family: 'Raleway Semi-Bold', sans-serif;
  font-size: 1.8rem;
  font-weight: 200;
  margin-bottom: 30px;
  text-align: center;
  padding: 0 10px;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  line-height: 45px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 1.2rem !important;
  }
`

const Copy = styled('div')`
  text-align: center;
  padding: 0 160px;
  grid-column: 2 / 3;
  grid-row: 3 / 4;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 0 10px;
  }
`

const PortfolioHeader = ({
  backgroundColor,
  headline,
  copy,
  headerSectionTextColor,
} = {}) => (
  <>
    <HeaderSection
      backgroundColor={backgroundColor}
      headerSectionTextColor={headerSectionTextColor}
    >
      <Header>{headline}</Header>
      <Copy>{copy.copy}</Copy>
    </HeaderSection>
  </>
)

export default PortfolioHeader
