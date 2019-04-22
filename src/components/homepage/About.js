import React from 'react'
import styled from '@emotion/styled'
import { AboutCopy, HobbyBlurb } from '.'
import ProfileCircle from './styled/ProfileCircle'

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
`

const HeadShot = styled(ProfileCircle)`
  margin-left: 60px;
  float: left;
  margin-right: 25px;
  shape-outside: inset(1% round 50%);

  .image {
    background-image: ${props => props.imageSrc};
  }
`

const DecorativeCircle = styled('div')`
  z-index: -1;
  bottom: 15px;
  right: -130px;
  width: 720px;
  height: 720px;
  border-radius: 700px;
  border: 1px solid ${props => props.theme.color.primary};
  position: absolute;
`

const SocialMediaIcons = styled('section')`
  width: 320px;
  height: 100px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  cursor: pointer;

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background: #444;
  }
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
          <h2>About</h2>
          <HeadShot>
            <div className="image" />
          </HeadShot>
          <AboutCopy full={true} />
          <SocialMediaIcons>
            <div className="icon" />
            <div className="icon" />
            <div className="icon" />
          </SocialMediaIcons>
          {/* <DecorativeCircle /> */}
        </section>
      </DesktopView>
    </>
  )
}

export default About
