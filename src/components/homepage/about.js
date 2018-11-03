import React from 'react'
import styled from 'react-emotion'
import { Flex, Card, Image, Text } from 'rebass'

const AboutSection = styled('section')`
  width: 100%;
  height: 100%;

  .about__image-copy {
    display: flex;
    flex-direction: row;
  }

  .about__about-header {
    font-family: AvenirNext-UltraLight;
    font-size: 40px;
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
    font-family: AvenirNext-UltraLight;
    font-size: 14px;
    color: #1e9dba;
    line-height: 17px;
    padding: 20px;
  }

  .about__about-image {
    border: 1px solid #8ec73f;
    height: 150px;
    width: 150px;
    border-radius: 600px;
    overflow: hidden;
    float: left;
    z-index: 1;
  }

  .about-circle {
    border: 1px solid #006a77;
    position: absolute;
  }

  .about-circle__circle-one {
    border: 1px solid #1e9dba;
    height: 700px;
    width: 700px;
    position: absolute;
    left: 600px;
    top: 1350px;
    border-radius: 50%;
    z-index: -1;
  }
`

const About = () => (
  <AboutSection>
    <div className="about__about-header">ABOUT</div>

    <Flex>
      <Card width={[256, 520]} mx="auto" p={2} variant="basic">
        <Image
          src="https://source.unsplash.com/random/512x384"
          borderRadius={2}
        />
        <Text fontFamily="AvenirNext-UltraLight">
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
      </Card>
    </Flex>
    <div className="about-circle__circle-one" />
  </AboutSection>
)

export default About
