import React from 'react'
import styled from '@emotion/styled'

import { AboutAnneLynn, ContactForm } from '.'

const FooterSection = styled('section')`
  width: 100vw;
  height: 100vh;
  background: white;

  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: auto;
    flex-direction: column-reverse;
  }
`

const AboutContact = () => {
  return (
    <FooterSection>
      <ContactForm />
      <AboutAnneLynn />
    </FooterSection>
  )
}

export default AboutContact
