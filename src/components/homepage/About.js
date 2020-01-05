import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { AboutCopy, HobbyBlurb, HeaderBar } from '.'
import Img from 'gatsby-image'

import { ProfileCircle, LowerHeader } from '../styled/'

const Header = styled(LowerHeader)`
  z-index: 10;
  padding-top: 50px;
  margin-left: 60px;
  width: 100%;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
  }
`

const MobileView = styled('main')`
  display: none;
  margin-bottom: calc(1.2 * ${props => props.theme.footer.mobile.height});
  @media (max-width: 900px) {
    display: block;
    width: 100vw;
  }

  h2 {
    color: ${props => props.theme.color.copy};
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
    color: ${props => props.theme.color.copy};
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

const PhotoElem = styled(ProfileCircle)`
  z-index: 25;

  .image {
    background-image: ${props => props.imageSrc};
  }
`

const HeadShot = styled(PhotoElem)`
  margin-left: 60px;
  margin-bottom: 10px;
  float: left;
  margin-left: 24px;
  margin-right: 24px;
  shape-outside: inset(1% round 50%);
`

const HeadshotRow = styled('div')`
  shape-outside: none;
  float: none;
  display: flex;
  justify-content: center;
`

const CopyContainer = styled('section')`
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
`

const About = () => {
  const data = useStaticQuery(graphql`
    query GetSingleImage {
      aboutImage: file(relativePath: { eq: "anne-lynn.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const image = data && data.aboutImage && data.aboutImage.childImageSharp

  return (
    <>
      <HeaderBar />
      <MobileView>
        <Header>About</Header>

        <HeadshotRow>
          <PhotoElem>
            {image && (
              <Img
                fixed={image.fixed}
                className="image"
                alt="Anne-Lynn Bancroft"
              />
            )}
          </PhotoElem>
        </HeadshotRow>
        <AboutCopy />
      </MobileView>
      <DesktopView>
        <HobbyBlurb />
        <section>
          <CopyContainer>
            <Header>About</Header>
            <HeadShot>
              {image && (
                <Img
                  fixed={image.fixed}
                  className="image"
                  alt="Anne-Lynn Bancroft"
                />
              )}
            </HeadShot>
            <AboutCopy full={true} />
          </CopyContainer>
        </section>
      </DesktopView>
    </>
  )
}

export default About
