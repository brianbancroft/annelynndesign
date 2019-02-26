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
  transform: ${props => props.theme.h1.transform};
  text-shadow: ${props => props.theme.h1.textShadow};
  font-size: ${props => props.theme.h1.fontSize};
  text-transform: ${props => props.theme.h1.textTransform};
  line-height: ${props => props.theme.h1.lineHeight};
  font-weight: ${props => props.theme.h1.fontWeight};
  color: ${props => props.theme.color.primary};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding-top: 15px;
    padding-left: 10px;
    line-height: 70px;
    z-index: 10;
    letter-spacing: ${props => props.theme.h1.mobile.letterSpacing};
    text-shadow: ${props => props.theme.h1.mobile.textShadow};
    font-size: ${props => props.theme.h1.mobile.fontSize};
  }
`

const Circle = styled('div')`
  border-radius: 50%;
  z-index: -11;
  position: absolute;
`

const CircleOne = styled(Circle)`
  border: 1px solid ${props => props.theme.color.primary};
  height: 650px;
  width: 650px;
  right: 30px;
  top: 420px;

  /* keep the lower circle to the right of the title  */
  @media (max-width: 1200px) {
    right: -50px;
  }

  @media (max-width: 1070px) {
    right: -150px;
  }

  @media (max-width: 980px) {
    right: -250px;
  }

  @media (max-width: 860px) {
    right: -300px;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    border: 1px solid ${props => props.theme.color.primary};
    height: 70vw;
    width: 70vw;
    left: -40px;
    top: 400px;
  }
`

const CircleTwo = styled(Circle)`
  border: 1px solid ${props => props.theme.color.secondary};
  height: 300px;
  width: 300px;
  right: 40px;
  top: 50px;

  @media (max-width: 980px) {
    right: -55px;
  }
  @media (max-width: 860px) {
    right: -125px;
  }
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: 40vw;
    width: 40vw;
    left: 220px;
    top: 400px;
  }
`

const CircleThree = styled(Circle)`
  border: 1px solid ${props => props.theme.color.tertiary};
  height: 200px;
  width: 200px;
  right: 40px;
  top: 330px;

  @media (max-width: 980px) {
    right: -65px;
  }
  @media (max-width: 860px) {
    right: -125px;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    border: 1px solid ${props => props.theme.color.tertiary};
    height: 65vw;
    width: 55vw;
    left: 220px;
    top: 560px;
  }
`

class HomeHeader extends React.Component {
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

export default HomeHeader
