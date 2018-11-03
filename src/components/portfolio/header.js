import React from 'react'
import styled from 'react-emotion'

const HeaderSection = styled('section')`
  background: ${props => props.backgroundColor || 'blue'};
  /* color: #1e9dba; */
  font-family: AvenirNext-UltraLight;
  color: white;
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

const Header = props => (
  <HeaderSection backgroundColor={props.backgroundColor}>
    <div className="header--headline">{props.headline}</div>
    <div className="header--copy">
      Ea amet laborum mollit aliqua fugiat occaecat ex consequat occaecat. Nulla
      ad officia nulla ea id Lorem. Irure sint Lorem voluptate aute laborum
      consequat non Lorem amet laborum officia. Ullamco elit ad ad est.
    </div>
  </HeaderSection>
)

export default Header
