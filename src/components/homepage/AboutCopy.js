import React from 'react'
import styled from '@emotion/styled'
const Copy = styled('div')`
  font-weight: 400;
  margin: 40px auto 0 auto;
  width: 75%;
  max-width: 450px;

  line-height: ${props => props.theme.copy.lineHeight};
  font-weight: ${props => props.theme.copy.fontWeight};
  font-size: ${props => props.theme.copy.fontSize};
  color: ${props => props.theme.color.primary};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-weight: ${props => props.theme.copy.mobile.fontWeight};
    font-size: ${props => props.theme.copy.mobile.fontSize};
    width: 85vw;
  }

  @media (min-width: 1550px) {
    padding-top: 50px;
  }
`
const AboutCopy = () => (
  <Copy>
    <p>
      I am from the Ottawa River Valley and have been a designer since 2008. I
      have experience with in-house teams, agencies, and contracting roles for
      both print and packaging design. I also work as an independent contractor
      for all types of clients.
    </p>
    <p>
      Outside of design, I also enjoy gardening, floral design, as well as
      making things with my hands. And while I'm a long ways away from Regina, I
      will always be a Roughriders fan.
    </p>
  </Copy>
)

export default AboutCopy
