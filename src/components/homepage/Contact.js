import React from 'react'
import styled, { css } from 'styled-components'

import { Paragraph } from '../styled'
import { SocialIcons, ContactForm, HeaderBar } from '.'

const ContactView = styled('div')`
  display: grid;
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
  padding: 40px 120px 0 60px;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const AboutParagraph = styled(Paragraph)`
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;

  margin: 20px 0 0 8px;
  strong {
    font-weight: 700;
  }
`

const Contact = () => {
  return (
    <>
      <HeaderBar />
      <ContactView>
        <ContactFormContainer>
          <ContactForm />
        </ContactFormContainer>
        <ContactCopyContainer>
          <SocialIcons />
          <section>
            <AboutParagraph>
              I specialize in visual communication. I create company{' '}
              <strong>branding</strong>, <strong>signage</strong>,{' '}
              <strong>store experience</strong>, <strong>flyers</strong>,
              <strong> posters</strong>, <strong>packaging</strong> as well as{' '}
              <strong>website design</strong>. I help your ideas get noticed.
            </AboutParagraph>
          </section>
        </ContactCopyContainer>
      </ContactView>
    </>
  )
}

export default Contact
