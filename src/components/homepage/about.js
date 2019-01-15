import React from 'react'
import styled from 'react-emotion'

const AboutSection = styled('section')`
  width: 100%;
  height: 100%;

  .about__about-header {
    font-size: 50px;
    color: #1e9dba;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    z-index: 10;
    padding-top: 30px;
    margin-bottom: 30px;
    padding-left: 83px;
    margin-left: 5vw;
  }

  .about__about-copy {
    text-align: justify;
    font-size: 18px;
    color: #1e9dba;
    line-height: 17px;
    padding: 20px 0 0 90px;
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
    margin: 15px;
    background-color: white;
  }

  .about-circle {
    border: 1px solid #006a77;
    position: absolute;
  }

  .about__copy-container {
    position: relative;
    right: 5vw;
  }

  p {
    line-height: 117%;
    margin-bottom: 12px;
  }

  @media (max-width: 500px) {
  }
`

const BigCircle = styled.div`
  border: 2px solid #006a77;
  height: 120vh;
  width: 120vh;
  position: fixed;
  left: 48vw;
  bottom: -2vw;
  border-radius: 120vh;
  z-index: -11;
`

const BottomCircle = styled.div`
  border: 2px solid #1e9dba;
  border-radius: 100vw;
  width: 70vw;
  height: 70vw;
  top: 82vh;
  position: fixed;
  left: 22vw;
`

const About = () => (
  <AboutSection>
    <BigCircle />
    <BottomCircle />
    <div className="container">
      <div className="about__about-header">ABOUT</div>

      <div className="about__copy-container">
        {/* <img
            className="about__about-image"
            src="https://source.unsplash.com/random/512x384"
          /> */}
        <div className="about__about-image" />
        <div className="about__about-copy">
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
        </div>
      </div>
    </div>
  </AboutSection>
)

export default About
