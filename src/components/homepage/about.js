import React from 'react'
import styled from '@emotion/styled'

const AboutSection = styled('section')`
  width: 100%;
  height: 95vw;
`

const Header = styled('div')`
  font-size: 50px;
  color: ${props => props.theme.color.primary};
  line-height: 49px;
  text-shadow: 0 0 0.2em #fff;
  z-index: 10;
  padding-top: 30px;
  margin-bottom: 30px;
  padding-left: 83px;
  margin-left: 80px;
  font-weight: 100;

  @media (max-width: 600px) {
    margin-left: 0;
    padding-left: 0;
    text-align: center;
  }
`

const CopyContainer = styled('div')`
  position: relative;
  right: 5vw;
  @media (max-width: 600px) {
    right: 0;
    width: 90%;
    margin: 0 auto;
  }
`

const Copy = styled('div')`
  text-align: justify;
  font-size: 18px;
  color: ${props => props.theme.color.primary};
  line-height: 17px;
  margin-left: 120px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`

const AboutImage = styled('div')`
  border: 1px solid #8ec73f;
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

  @media (max-width: 600px) {
    display: none;
  }
`

const Circle = styled('div')`
  position: fixed;
  z-index: -11;
  border-radius: 120vh;
`

const BigCircle = styled(Circle)`
  border: 2px solid #006a77;
  height: 120vh;
  width: 120vh;
  left: 48vw;
  bottom: -2vw;

  @media (max-width: 600px) {
    display: none;
  }
`

const BottomCircle = styled(Circle)`
  border: 2px solid ${props => props.theme.color.primary};
  width: 70vw;
  height: 70vw;
  top: 82vh;
  left: 22vw;

  @media (max-width: 600px) {
    display: block;
    height: 1000px;
    width: 1000px;
    position: fixed;
    border-radius: 1000px;
    left: -265px;
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
            I am from the Ottawa River Valley, and have been a designer since
            2007 in in-house, agency and contracting roles for both print and
            packaging design
          </p>
          <p>
            I have been a designer since 2007, and keep constant through
            research, and high-tempo production
          </p>
          <p>
            My personal interests in graphic design include "print", "colour". I
            love seeing my designs, and keep a collection of my favorite
            products which I've helped bring to life.
          </p>
        </Copy>
      </CopyContainer>
    </div>
  </AboutSection>
)

export default About
