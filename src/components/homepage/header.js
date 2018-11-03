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
    padding: 0 40px;
    padding-top: 100px;
    z-index: 10;
    transform: scale(1, 1.2);
    text-shadow: white 0.1em 0.1em 0.1em;
    font-size: 90px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    line-height: 90px;
    font-weight: 100;
    color: #1e9dba;
  }

  .circle {
    border-radius: 50%;
    z-index: -11;
  }

  .circle-one {
    border: 1px solid #1e9dba;
    height: 650px;
    width: 650px;
    position: absolute;
    right: 30px;
    top: 420px;
  }

  .circle-two {
    border: 1px solid #006a77;
    height: 300px;
    width: 300px;
    position: absolute;
    right: 40px;
    top: 50px;
  }

  .circle-three {
    border: 1px solid #8ec73f;
    height: 200px;
    width: 200px;
    position: absolute;
    right: 40px;
    top: 330px;
  }

  @media (max-width: 620px) {
    .title {
      text-transform: uppercase;
      font-family: AvenirNext-UltraLight;
      font-size: 14vw;
      color: #1e9dba;
      padding-top: 20px;
      padding-left: 10px;
      letter-spacing: -0.39px;
      line-height: 70px;
      text-shadow: 0 0 0.2em #fff;
      z-index: 10;
    }

    .circle-one {
      border: 1px solid #1e9dba;
      height: 70vw;
      width: 70vw;
      position: absolute;
      left: -40px;
      top: 400px;
    }

    .circle-two {
      border: 1px solid #006a77;
      height: 40vw;
      width: 40vw;
      position: absolute;
      left: 220px;
      top: 400px;
    }

    .circle-three {
      border: 1px solid #8ec73f;
      height: 65vw;
      width: 55vw;
      position: absolute;
      left: 220px;
      top: 560px;
    }
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
