import React from 'react'
import styled from '@emotion/styled'

const HeaderSection = styled('section')`
  @media (max-width: 620px) {
    grid-template-columns: 5vw 90vw 5vw;
    grid-template-rows: 20vh 80px 1fr;

    .header--headline {
      font-size: 1.2rem !important;
    }
  }

  background: ${ props => props.backgroundColor || '#1402ba' };
  color: ${ props => props.headerSectionTextColor || '#efefef' };
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 500px 1fr;
  grid-template-rows: 1fr 80px 1fr;

  .header--headline {
    font-family: 'Raleway Semi-Bold', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
    padding: 0 10px;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    vertical-align: center;
    line-height: 45px;
  }

  .header--copy {
    text-align: center;
    padding: 0 40px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
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
      <div className="header--headline">{headline}</div>
      <div className="header--copy">{copy.copy}</div>
    </HeaderSection>
    {/* <ScrollIcon /> */}
  </>
)

export default PortfolioHeader
