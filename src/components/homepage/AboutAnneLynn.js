import React from 'react'
import styled from '@emotion/styled'

import headshotPhoto from '../../images/biopic.jpg'
import { LowerHeader } from '../styled'
import { AboutCopy } from '.'

const AboutSection = styled('section')`
  width: 100%;
  min-height: 100vh;
  height: auto;
  z-index: 2;
`

const Header = styled(LowerHeader)`
  z-index: 10;
  padding-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  background: white;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
  }
`

const HeadshotCircle = styled('div')`
  display: block;

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
  padding: 8px 0 0 8px;
  background-color: white;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const Headshot = styled('div')`
  width: 180px;
  height: 180px;
  border-radius: 150px;
  background-image: url(${headshotPhoto});
  background-repeat: no-repeat;
  background-size: contain;
`

const AboutAnneLynn = () => {
  return (
    <AboutSection>
      <Header>about</Header>
      <HeadshotCircle>
        <Headshot />
      </HeadshotCircle>
      <AboutCopy />
    </AboutSection>
  )
}

export default AboutAnneLynn
