import React from 'react'
import styled, { css } from 'styled-components'

import { Paragraph } from '../styled'
import { SocialIcons, ContactForm } from '.'

const ContactView = styled('div')`
  display: grid;
  min-height: calc(100vh - 100px);
  grid-template-columns: 1fr;

  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 1fr 1fr;
    ${() =>
      typeof window === 'object' &&
      window.innerHeight < 770 &&
      css`
        margin-bottom: ${() => `${770 - window.innerHeight}px`};
      `}
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
            I’m a skilled graphic designer specializing in visual communication.
            I create company <strong>branding</strong>, <strong>signage</strong>
            , <strong>store experience</strong>, <strong>flyers</strong>,
            <strong>posters</strong>, <strong>packaging</strong> as well as{' '}
            <strong>website design</strong>. I help your ideas get noticed.
          </AboutParagraph>
        </section>
        <SocialIcons />
      </ContactCopyContainer>
    </ContactView>
  )
}

export default Contact
