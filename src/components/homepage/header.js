import React from 'react'
import styled from '@emotion/styled'
import { ScrollIcon } from '..'

const HeaderSection = styled('section')`
  height: 100vh;
  padding-bottom: 4vh;
  width: 99vw;
  overflow: hidden;
  z-index: -1;
  top: 0;
  position: fixed;
  font-family: 'Raleway', sans-serif;
`

const TitleElement = styled('div')`
  user-select: none;
  padding: 0 40px;
  padding-top: calc(100vh / 14);
  z-index: 10;
  transform: scale(1, 1.2);
  text-shadow: white 0.1em 0.1em 0.1em;
  font-size: 90px;
  text-transform: uppercase;
  line-height: 90px;
  font-weight: 100;
  color: #1e9dba;

  @media (max-width: 620px) {
    text-transform: uppercase;
    font-size: 14vw;
    color: #1e9dba;
    padding-top: 15px;
    padding-left: 10px;
    letter-spacing: -0.39px;
    line-height: 70px;
    text-shadow: 0 0 0.2em #fff;
    z-index: 10;
  }
`

const Circle = styled('div')`
  border-radius: 50%;
  z-index: -11;
  position: absolute;
`

const CircleOne = styled(Circle)`
  border: 1px solid #1e9dba;
  height: 650px;
  width: 650px;
  right: 30px;
  top: 420px;

  @media (max-width: 620px) {
    border: 1px solid #1e9dba;
    height: 70vw;
    width: 70vw;
    left: -40px;
    top: 400px;
  }
`

const CircleTwo = styled(Circle)`
  border: 1px solid #006a77;
  height: 300px;
  width: 300px;
  right: 40px;
  top: 50px;

  @media (max-width: 620px) {
    border: 1px solid #006a77;
    height: 40vw;
    width: 40vw;
    left: 220px;
    top: 400px;
  }
`

const CircleThree = styled(Circle)`
  border: 1px solid #8ec73f;
  height: 200px;
  width: 200px;
  right: 40px;
  top: 330px;

  @media (max-width: 620px) {
    border: 1px solid #8ec73f;
    height: 65vw;
    width: 55vw;
    left: 220px;
    top: 560px;
  }
`

class Header extends React.Component {
  render() {
    return (
      <HeaderSection id="headerSection">
        <div>
          <TitleElement>welcome</TitleElement>
          <TitleElement>to</TitleElement>
          <TitleElement>anne-lynn</TitleElement>
          <TitleElement>design</TitleElement>
        </div>
        <CircleOne />
        <CircleTwo />
        <CircleThree />
        <ScrollIcon />
      </HeaderSection>
    )
  }
}

export default Header
