import React from 'react'
import styled from '@emotion/styled'
import { Contact, About } from '.'

const FooterSection = styled('section')`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  position: fixed;
  display: none;

  grid-template-columns: 50vw 50vw;
  grid-template-rows: 100vh;

  @media (max-width: 620px) {
    grid-template-columns: 100vw;
  }

  .contact-desktop {
    display: block;

    @media (max-width: 620px) {
      display: none;
    }
  }
  .container {
    width: 100%;
    margin: 0 auto;
    @media (min-width: 1400px) {
      width: 700px;
    }
  }
`

const Footer = () => (
  <FooterSection id="footerSection">
    <div className="container contact-desktop">
      <Contact className="contact-desktop" />
    </div>
    <div className="container">
      <About />
    </div>
  </FooterSection>
)

export default Footer
