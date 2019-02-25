import React from 'react'
import styled from '@emotion/styled'

import { LowerHeader } from '../styled'
import { AboutCopy } from '.'

const AboutSection = styled('section')`
  width: 100%;
  min-height: 100vh;
  height: auto;
`

const Header = styled(LowerHeader)`
  z-index: 10;
  padding-top: 30px;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
  }
`

const Circle = styled('div')`
  border-radius: 120vw;
`

const RightDesktopCircle = styled(Circle)`
  position: absolute;
  z-index: -11;
  border-radius: 120vh;
`
const HeadshotCircle = styled(Circle)``
const LowerDesktopCircle = styled(Circle)`
  /* position: relative; */
  border: 2px solid ${props => props.theme.color.primary};
  width: 70px;
  height: 70px;

  /* left: -400px; */

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
    /* border: 1px solid ${props => props.theme.color.primary};
    height: 1000px;
    width: 1000px;
    position: absolute;
    border-radius: 1000px;
    left: -283px;
    top: 88vh; */
  }
`

const AboutAnneLynn = () => {
  return (
    <AboutSection>
      <Header>about</Header>

      <AboutCopy />
    </AboutSection>
  )
}

export default AboutAnneLynn
