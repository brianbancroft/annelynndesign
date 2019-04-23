import React from 'react'
import styled from '@emotion/styled'
import { AboutCopy, HobbyBlurb, SocialIcons } from '.'
import { ProfileCircle } from '../styled/'

const MobileView = styled('main')`
  display: none;
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
  margin-right: 25px;
  shape-outside: inset(1% round 50%);

  .image {
    background-image: ${props => props.imageSrc};
  }

  @media (min-width: 1230px) {
    margin-left: calc(60px + (4%));
  }
`

const DecorativeCircle = styled('div')`
  z-index: -1;
  bottom: 15px;
  left: 48vw;
  width: 900px;
  height: 900px;
  border-radius: 900px;
  border: 1px solid ${props => props.theme.color.primary};
  position: fixed;
`

const CopyContainer = styled('section')`
  max-width: 600px;
  margin: 0 auto;
`

const About = () => {
  return (
    <>
      <MobileView>
        <h2>About</h2>
        <AboutCopy />
      </MobileView>
      <DesktopView>
        <HobbyBlurb />
        <section>
          <CopyContainer>
            <h2>About</h2>
            <HeadShot>
              <div className="image" />
            </HeadShot>
            <AboutCopy full={true} />
          </CopyContainer>
          <SocialIcons />
          <DecorativeCircle />
        </section>
      </DesktopView>
    </>
  )
}

export default About
