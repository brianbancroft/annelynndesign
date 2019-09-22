import React from 'react'
import styled from 'styled-components'
import { AboutCopy, HobbyBlurb, SocialIcons } from '.'
import { ProfileCircle, LowerHeader } from '../styled/'

import profilePhoto from '../../images/profile-photo.jpg'

const Header = styled(LowerHeader)`
  z-index: 10;
  padding-top: 50px;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
  }
`

const MobileView = styled('main')`
  display: none;
  margin-bottom: calc(2 * ${props => props.theme.footer.mobile.height});
  @media (max-width: 900px) {
    display: block;
    width: 100vw;
  }

  h2 {
    color: ${props => props.theme.color.primary};
    font-family: ${props => props.theme.h2.fontFamily};
    letter-spacing: ${props => props.theme.h2.letterSpacing};
    transform: ${props => props.theme.h2.transform};
    font-weight: ${props => props.theme.h2.fontWeight};
    text-shadow: ${props => props.theme.h2.textShadow};
    font-size: ${props => props.theme.h2.fontSize};
    line-height: ${props => props.theme.h2.lineHeight};

    margin-top: 25px;
    margin-left: 30px;
  }
`

const DesktopView = styled('main')`
  display: grid;
  grid-template-columns: 600px 1fr;
  @media (max-width: 1201px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 900px) {
    display: none;
  }

  h2 {
    color: ${props => props.theme.color.primary};
    font-family: ${props => props.theme.h2.fontFamily};
    letter-spacing: ${props => props.theme.h2.letterSpacing};
    transform: ${props => props.theme.h2.transform};
    font-weight: ${props => props.theme.h2.fontWeight};
    text-shadow: ${props => props.theme.h2.textShadow};
    font-size: ${props => props.theme.h2.fontSize};
    line-height: ${props => props.theme.h2.lineHeight};

    margin-top: 30px;
    margin-left: 60px;
  }

  @media (min-width: 1230px) {
    .about-copy {
      margin-top: 2vw;
    }
  }
`

const HeadShot = styled(ProfileCircle)`
  margin-left: 60px;
  margin-bottom: 10px;
  float: left;
  margin-left: 24px;
  margin-right: 24px;
  shape-outside: inset(1% round 50%);
  z-index: 25;

  .image {
    background-image: ${props => props.imageSrc};
  }
`

const DecorativeCircleContainer = styled('div')`
  height: ${() => `${window.innerHeight - 100}px`};
  position: absolute;
  overflow-y: hidden;
  left: 644px;
  top: calc(10px - 1px);
  z-index: -1;

  div {
    width: 900px;
    height: 900px;
    border-radius: 900px;
    border: 1px solid ${props => props.theme.color.primary};
  }

  @media (max-width: 1290px) {
  }
`

const CopyContainer = styled('section')`
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
`

const AboutSection = styled('section')`
  max-height: 678px;
  overflow-y: hidden;
`

const About = () => {
  return (
    <>
      <MobileView>
        <Header>About</Header>
        <AboutCopy />
      </MobileView>
      <DesktopView>
        <HobbyBlurb />
        <AboutSection>
          <CopyContainer>
            <Header>About</Header>
            <HeadShot>
              <img src={profilePhoto} className="image" alt="Me in the snow" />
            </HeadShot>
            <AboutCopy full={true} />
          </CopyContainer>
          <SocialIcons />
          <DecorativeCircleContainer>
            <div />
          </DecorativeCircleContainer>
        </AboutSection>
      </DesktopView>
    </>
  )
}

export default About
