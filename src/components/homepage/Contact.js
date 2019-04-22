import React from 'react'
import styled from '@emotion/styled'

import { LowerHeader, Paragraph } from '../styled'
import { SocialIcons, ContactForm } from '.'

const ContactView = styled('div')`
  display: grid;
  max-height: 100vh;
  overflow: hidden;

  grid-template-columns: 1fr 1fr;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`

const ContactFormContainer = styled('section')`
  padding-top: 20px;
`

const ContactCopyContainer = styled('section')`
  display: block;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const Contact = () => {
  return (
    <ContactView>
      <ContactFormContainer>
        <ContactForm />
      </ContactFormContainer>
      <ContactCopyContainer>
        <section>
          <Paragraph color="primary">
            Hey, I’m a graphic designer specializing in visual communication.
            Anything from posters to signage, packaging design, creating a
            visual experience print or web based, or just helping something make
            sense visually, I can help!
          </Paragraph>
        </section>
        <SocialIcons />
      </ContactCopyContainer>
    </ContactView>
  )
}

export default Contact
