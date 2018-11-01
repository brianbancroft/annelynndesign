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

  .circle {
    border-radius: 50%;
    z-index: -11;
  }

  .circle-one {
    border: 1px solid #1e9dba;
    height: 500px;
    width: 500px;
    position: absolute;
    left: 540px;
    top: 420px;
  }

  .circle-two {
    border: 1px solid #006a77;
    height: 300px;
    width: 300px;
    position: absolute;
    left: 750px;
    right: 300px;
    top: 50px;
  }

  .circle-three {
    border: 1px solid #8ec73f;
    height: 200px;
    width: 200px;
    position: absolute;
    left: 860px;
    top: 330px;
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
      <div className="circle circle-one" />
      <div className="circle circle-two" />
      <div className="circle circle-three" />
    </HeaderSection>
  )
}

export default Header
