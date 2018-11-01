import React from 'react'
import styled from 'react-emotion'

const HeaderSection = styled('section')`
  height: 100vh;
  padding-bottom: 4vh;
  width: 99vw;
  overflow-y: hidden;
  z-index: -1;
  top: 0;
  position: fixed;

  .title {
    width: 50%;
    min-width: 623px;
    padding: 60px;
    padding-top: 100px;
    z-index: 10;
    transform: scale(1, 1.2);
    text-shadow: white 0.1em 0.1em 0.1em;
    font-size: 90px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    line-height: 100px;
    font-weight: 100;
    color: #1e9dba;
  }
`

const Header = () => {
  return (
    <HeaderSection id="headerSection">
      <div className="welcome-header">
        <div className="title">welcome</div>
        <div className="title">to</div>
        <div className="title">anne-lynn</div>
        <div className="title">design</div>
      </div>
      <div class="circle circle-one" />
      <div class="circle circle-two" />
      <div class="circle circle-three" />
    </HeaderSection>
  )
}

export default Header
