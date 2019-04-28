import React from 'react'
import styled from '@emotion/styled'

const Copy = styled('article')`
  line-height: ${props => props.theme.copy.lineHeight};
  font-weight: ${props => props.theme.copy.fontWeight};
  font-size: 13px;
  color: ${props => props.theme.color.primary};
  max-width: 450px;
  width: 75%;
`

const MobileCopy = styled(Copy)`
  margin: 40px auto 0 auto;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-weight: ${props => props.theme.copy.mobile.fontWeight};
    font-size: ${props => props.theme.copy.mobile.fontSize};
    width: 85vw;
  }

  @media (min-width: 1550px) {
    padding-top: 50px;
  }
`

const DesktopCopy = styled(Copy)`
  margin: 50px auto 0 auto;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-weight: ${props => props.theme.copy.fontWeight};
    font-size: ${props => props.theme.copy.fontSize};
    width: 85vw;
  }
`
const AboutCopy = ({ full = false } = {}) =>
  full ? (
    <DesktopCopy>
      <p>
        I am from the Ottawa River Valley and have been a designer since 2008. I
        have experience with in-house teams, agencies, and contracting roles for
        both print and packaging design. I also work as an independent
        contractor for all types of clients.
      </p>

      <p>
        I keep constant through research, and high-tempo production, and my
        works stands out especially because my interest and knowledge in the
        printing process, plus my need to maintain strong relationships with the
        printers which I work with. Not only can I build new concepts, but my
        experience in production art helps me move fast. I keep current by
        branching out: As this site shows, I also design for the modern web in
        an agile environment.
      </p>

      <p>
        Outside of design, I also enjoy gardening, floral design, as well as
        making things with my hands. And while I'm a long ways away from Regina,
        I will always be a Roughriders fan.
      </p>
    </DesktopCopy>
  ) : (
    <MobileCopy>
      <p>
        I am from the Ottawa River Valley and have been a designer since 2008. I
        have experience with in-house teams, agencies, and contracting roles for
        both print and packaging design. I also work as an independent
        contractor for all types of clients.
      </p>

      <p>
        Outside of design, I also enjoy gardening, floral design, as well as
        making things with my hands. And while I'm a long ways away from Regina,
        I will always be a Roughriders fan.
      </p>
    </MobileCopy>
  )

export default AboutCopy
