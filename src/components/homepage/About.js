import React from 'react'
import styled from '@emotion/styled'
import { AboutCopy } from '.'

const MobileView = styled('main')`
  display: none;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: block;
    width: 100vw;
  }
`

const DesktopView = styled('main')`
  display: grid;

  grid-template-columns: 600px 1fr;
  @media (max-width: 1201px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const HobbyBlurb = styled('section')`
  display: grid;
  max-width: 600px;
  height: calc(100vh - ${props => props.theme.footer.height});
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: ${props => props.theme.color.light};

  .hobby-image {
    grid-column: 1 / 2;
    margin-left: 15px;
  }

  .hobby-copy {
    grid-row: 2 / 4;
    grid-column: 2 / 3;
    align-self: flex-start;
    padding-top: 20px;
    padding-right: 10px;

    font-weight: 100;
    line-height: 32px;
    font-size: 24px;
    color: ${props => props.theme.color.primary};

    strong {
      font-weight: 500;
    }
  }
`

const ProfileCircle = styled('div')`
  width: 220px;
  height: 220px;
  border-radius: 220px;
  border: 1px solid #aaa;

  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    background: #ddd;
    background-image: ${props => props.imageSrc};
  }
`

const About = () => {
  return (
    <>
      <MobileView>
        <h1>about mobile</h1>
        <AboutCopy />
      </MobileView>
      <DesktopView>
        <HobbyBlurb>
          <div className="hobby-copy">
            In my spare time you’ll find me tending to my{' '}
            <strong>plants</strong> making <strong>flower arrangements</strong>{' '}
            or <strong>making stuff with my hands</strong>. I love learning new
            things and helping others experience it as well is part of the fun!
          </div>
          <ProfileCircle className="hobby-image">
            <div className="image" />
          </ProfileCircle>
          <ProfileCircle className="hobby-image">
            <div className="image" />
          </ProfileCircle>
          <ProfileCircle className="hobby-image">
            <div className="image" />
          </ProfileCircle>
        </HobbyBlurb>
        <section>
          <h1>about desktop</h1>
          <ProfileCircle>
            <div className="image" />
          </ProfileCircle>
          <AboutCopy />
        </section>
      </DesktopView>
    </>
  )
}

export default About
