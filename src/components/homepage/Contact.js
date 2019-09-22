import React from 'react'
import styled, { css } from 'styled-components'

import { Paragraph } from '../styled'
import { SocialIcons, ContactForm } from '.'

const ContactView = styled('div')`
  display: grid;
  max-height: 100vh;
  grid-template-columns: 1fr 1fr;

  ${() =>
    window.innerHeight < 770 &&
    css`
      margin-bottom: ${() =>
        typeof window === 'object' ? `${770 - window.innerHeight}px` : '770px'};
    `}

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`

const ContactFormContainer = styled('section')`
  padding-top: 20px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-bottom: calc(2 * ${props => props.theme.footer.mobile.height});
  }
`

const ContactCopyContainer = styled('section')`
  display: block;
  padding: 150px 120px 0 60px;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const AboutParagraph = styled(Paragraph)`
  font-weight: 200;
  font-size: 28px;
  line-height: 40px;

  strong {
    font-weight: 500;
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
          <AboutParagraph color="primary">
            Hi, I’m a graphic designer specializing in{' '}
            <strong>visual communication</strong>. Anything from{' '}
            <strong>posters</strong> to <strong>signage</strong>,{' '}
            <strong>packaging</strong> design, creating a{' '}
            <strong>visual experience</strong> print or web based, or just
            helping something make sense visually, I can help!
          </AboutParagraph>
        </section>
        <SocialIcons />
      </ContactCopyContainer>
    </ContactView>
  )
}

export default Contact
