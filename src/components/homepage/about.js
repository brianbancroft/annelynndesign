import React from 'react'
import styled from 'react-emotion'
import { Flex, Card, Image, Text } from 'rebass'

const AboutSection = styled('section')`
  width: 100%;
  height: 100%;

  .about__about-header {
    font-family: AvenirNext-UltraLight;
    font-size: 50px;
    color: #1e9dba;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    z-index: 10;
    padding-top: 30px;
    margin-bottom: 30px;
    padding-left: 83px;
  }

  .about__about-copy {
    text-transform: lowercase;
    text-align: justify;
    font-family: AvenirNext-UltraLight;
    font-size: 18px;
    color: #1e9dba;
    line-height: 17px;
    padding: 20px;
  }

  .about__about-image {
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
    margin: 9px;
    background-color: white;
  }

  .about-circle {
    border: 1px solid #006a77;
    position: absolute;
  }

  p {
    line-height: 117%;
    margin-bottom: 5px;
  }
`

const BigCircle = styled.div`
  border: 1px solid #1e9dba;
  height: 120vh;
  width: 120vh;
  position: fixed;
  left: 48vw;
  bottom: -2vw;
  border-radius: 120vh;
  z-index: -11;
`

const About = () => (
  <AboutSection>
    <BigCircle />
    <div className="container">
      <div className="about__about-header">ABOUT</div>

      <div>
        {/* <img
            className="about__about-image"
            src="https://source.unsplash.com/random/512x384"
          /> */}
        <div className="about__about-image" />
        <Text fontFamily="AvenirNext-UltraLight" className="about__about-copy">
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
        </Text>
      </div>
    </div>
  </AboutSection>
)

export default About
