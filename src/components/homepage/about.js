import React from 'react'
import styled from '@emotion/styled'
import { LowerHeader } from '../styled'

const AboutSection = styled('section')`
  width: 100%;
  height: 95vw;
`

const Header = styled(LowerHeader)`
  z-index: 10;
  padding-top: 30px;
  margin-bottom: 30px;
  padding-left: 83px;
  margin-left: 80px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-left: 0;
    padding-left: 0;
    text-align: center;
  }
`

const CopyContainer = styled('div')`
  position: relative;
  right: 5vw;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    right: 0;
    width: 90%;
    margin: 0 auto;
  }
`

const Copy = styled('div')`
  text-align: justify;
  font-size: 18px;
  color: ${props => props.theme.color.circles.primary};
  line-height: 22px;
  margin-left: 120px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-left: 0;
  }
`

const AboutImage = styled('div')`
  border: 1px solid ${props => props.theme.color.circles.tertiary};
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

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const Circle = styled('div')`
  position: fixed;
  z-index: -11;
  border-radius: 120vh;
`

const BigCircle = styled(Circle)`
  border: 2px solid ${props => props.theme.color.circles.secondary};
  height: 120vh;
  width: 120vh;
  left: 48vw;
  bottom: -2vw;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const BottomCircle = styled(Circle)`
  border: 2px solid ${props => props.theme.color.circles.primary};
  width: 70vw;
  height: 70vw;
  top: 82vh;
  left: 22vw;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: block;
    height: 1000px;
    width: 1000px;
    position: fixed;
    border-radius: 1000px;
    left: -283px;
    top: 88vh;
  }
`

const About = () => (
  <AboutSection>
    <BigCircle />
    <BottomCircle />
    <div className="container">
      <Header>ABOUT</Header>
      <CopyContainer>
        <AboutImage />
        <Copy>
          <p>
            I am from the Ottawa River Valley and have been a designer since
            2008. I have experience with in-house teams, agencies, and
            contracting roles for both print and packaging design. I also work
            as an independent contractor for all types of clients.
          </p>

          <p>
            I keep constant through research, and high-tempo production, and my
            works stands out especially because my interest and knowledge in the
            printing process, plus my need to maintain strong relationships with
            the printers which I work with. Not only can I build new concepts,
            but my experience in production art helps me move fast. I keep
            current by branching out: As this site shows, I also design for the
            modern web in an agile environment.
          </p>

          <p>
            Outside of design, I also enjoy gardening, floral design, as well as
            arts and crafts. And while I'm a long ways away from Regina, I will
            always be a Roughriders fan
          </p>
        </Copy>
      </CopyContainer>
    </div>
  </AboutSection>
)

export default About
