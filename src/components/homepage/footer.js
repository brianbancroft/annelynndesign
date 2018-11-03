import React from 'react'
import styled from 'react-emotion'
import { Contact, About } from '.'

const FooterSection = styled('section')`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  position: fixed;

  grid-template-columns: 50vw 50vw;
  grid-template-rows: 100vh;

  @media (max-width: 620px) {
    grid-template-colums: 100vw;
  }

  .contact-desktop {
    display: block;

    @media (max-width: 620px) {
      display: none;
    }
  }
`

const Footer = () => (
  <FooterSection id="footerSection">
    <div className="contact-desktop">
      <Contact className="contact-desktop" />
    </div>

    <About />
  </FooterSection>
)

export default Footer
