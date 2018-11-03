import React from 'react'
import styled from 'react-emotion'

const HeaderSection = styled('section')`
  background: ${props => props.backgroundColor || '#1402ba'};
  color: ${props => props.headerSectionTextColor || '#efefef'};
  font-family: AvenirNext-UltraLight;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 30vw 40vw 30vw;
  grid-template-rows: 30vh 15vh 25vh 30vh;

  @media (max-width: 620px) {
    grid-template-columns: 10vw 80vw 10vw;
  }

  .header--headline {
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
    padding: 0 20px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`

const Header = ({
  backgroundColor,
  headline,
  copy,
  headerSectionTextColor,
} = {}) => (
  <HeaderSection
    backgroundColor={backgroundColor}
    headerSectionTextColor={headerSectionTextColor}
  >
    <div className="header--headline">{headline}</div>
    <div className="header--copy">{copy.copy}</div>
  </HeaderSection>
)

export default Header
