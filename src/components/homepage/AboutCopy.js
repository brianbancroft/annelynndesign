import React from 'react'
import styled from 'styled-components'

const Copy = styled('article')`
  line-height: ${props => props.theme.copy.lineHeight};
  font-weight: ${props => props.theme.copy.fontWeight};
  font-size: 13px;
  color: ${props => props.theme.color.primary};
  max-width: 450px;
  width: 75%;
  margin-bottom: 100px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-bottom: 0;
  }
`

const MobileCopy = styled(Copy)`
  margin: 10px auto 0 auto;

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
        Anne-Lynn Bancroft has been a designer since 2008 and is originally from
        Saskatchewan, but grew up in the Ottawa River Valley. She has experience
        working with in-house agencies for both big and small companies and has
        worked in contract roles for print and packaging design. She currently
        works as an independent contractor for all types of clientele.
      </p>

      <p>
        She is the kind of designer that will not only give you a final product
        that looks amazing, but thinks about every aspect of the project like
        how it will function on the web, or how will it get printed or even how
        will it be used by the public. She keeps constant through research and
        high-tempo production, and is always striving to try out something new
        and keep up with the industry trends.
      </p>

      <p>
        Outside of design you'll usually find Anne-Lynn strolling in the forest,
        or experimenting in the garden. Creating things is what she does best
        weather it be a new logo design or getting her orchid to blossom again.
      </p>
    </DesktopCopy>
  ) : (
    <MobileCopy>
      <p>
        Anne-Lynn Bancroft has been a designer since 2008 and is originally from
        Saskatchewan, but grew up in the Ottawa River Valley. She has experience
        working with in-house agencies for both big and small companies and has
        worked in contract roles for print and packaging design. She currently
        works as an independent contractor for all types of clientele.
      </p>

      <p>
        She is the kind of designer that will not only give you a final product
        that looks amazing, but thinks about every aspect of the project like
        how it will function on the web, or how will it get printed or even how
        will it be used by the public. She keeps constant through research and
        high-tempo production, and is always striving to try out something new
        and keep up with the industry trends.
      </p>

      <p>
        Outside of design you'll usually find Anne-Lynn strolling in the forest,
        or experimenting in the garden. Creating things is what she does best
        weather it be a new logo design or getting her orchid to blossom again.
      </p>
    </MobileCopy>
  )

export default AboutCopy
