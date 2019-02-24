import React from 'react'
import styled from '@emotion/styled'
import { LowerHeader } from '../styled'
import { AboutCopy, MobileAbout } from '.'

const AboutSection = styled('section')`
  width: 100%;
  height: 95vw;
`

const DesktopContaner = styled('div')`
  display: block;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const MobileContainer = styled('div')`
  display: none;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: block;
  }
`

const Header = styled(LowerHeader)`
  z-index: 10;
  padding-top: 30px;
  margin-bottom: 30px;
  margin-left: 80px;
`

const CopyContainer = styled('div')`
  position: relative;
  right: 5vw;
`

const AboutImage = styled('div')`
  border: 2px solid ${props => props.theme.color.tertiary};
  height: 14vw;
  min-height: 200px;
  width: 14vw;
  min-width: 200px;
  border-radius: 600px;
  overflow: hidden;
  float: left;
  z-index: 1;
  shape-outside: inset(1% round 50%);
  margin: 15px;
  background-color: white;
`

const Circle = styled('div')`
  position: fixed;
  z-index: -11;
  border-radius: 120vh;
`

const BigCircle = styled(Circle)`
  border: 2px solid ${props => props.theme.color.secondary};
  height: 120vh;
  width: 120vh;
  left: 48vw;
  bottom: -2vw;
`

const BottomCircle = styled(Circle)`
  border: 2px solid ${props => props.theme.color.primary};
  width: 70vw;
  height: 70vw;
  top: 82vh;
  left: 22vw;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    border: 1px solid ${props => props.theme.color.primary};
    height: 1000px;
    width: 1000px;
    position: absolute;
    border-radius: 1000px;
    left: -283px;
    top: 88vh;
  }
`

const About = () => (
  <AboutSection>
    <DesktopContaner>
      <BigCircle />
      <BottomCircle />

      <Header>ABOUT</Header>
      <CopyContainer>
        <AboutImage />
        <AboutCopy />
      </CopyContainer>
    </DesktopContaner>
    <MobileContainer>
      <MobileAbout />
    </MobileContainer>
  </AboutSection>
)

export default About
