import React from 'react'
import styled from '@emotion/styled'
import { Location } from '@reach/router'

import { Link } from 'gatsby'

import {
  aboutBaseIcon,
  // aboutHoverIcon,
  // aboutWhiteIcon,
  homeBaseIcon,
  // homeHoverIcon,
  // homeWhiteIcon,
  contactBaseIcon,
  // contactHoverIcon,
  // contactWhiteIcon,
} from '../images/footerIcons'

const FooterBg = styled('footer')`
  position: fixed;
  bottom: 0;
  z-index: 4;
  height: ${props => props.theme.footer.height};
  width: 100vw;
  background-color: ${props => props.portfolioHeaderColor || 'white'};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: ${props => props.theme.footer.mobile.height};
  }
`
const FooterElement = styled('footer')`
  position: fixed;
  bottom: 0;
  z-index: 8;
  height: ${props => props.theme.footer.height};
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: ${props => props.theme.footer.mobile.height};
  }
`

const FooterLink = styled(Link)`
  /* border-top: 2px solid ${props => props.theme.color.primary}; */
  display: flex;
  padding-top: ${props => props.theme.footer.paddingTop};
  flex-direction: column;
  align-items: center;
  z-index: 100;

  img {
    width: 75px;
    height: 75px;
    padding: 0;
    margin-bottom: 0;

  }
  &:before {
    background: ${props =>
      props.islocation === 'true' ? 'rgba(141, 212, 231, 0.4)' : 'none'};
  display: block;
  content: '';
  position: relative;
  width: 100%;

  height: 2px;
  animation: pulse-loader ease-out 0.2s;
}
@keyframes pulse-loader {
  0% {
    opacity: 0;
    transform: scale(0.5)
  }
  60% {
    opacity: 1
  }
`

const Footer = ({ portfolioHeaderColor } = {}) => {
  return (
    <Location>
      {({ location }) => {
        const isHome = (location.pathname === '/').toString()
        const isAbout = (location.pathname === '/about').toString()
        const isContact = (location.pathname === '/contact').toString()

        return (
          <>
            <FooterElement id="siteFooter">
              <FooterLink to="/" islocation={isHome}>
                <img src={homeBaseIcon} alt="Home" />
              </FooterLink>
              <FooterLink to="/about" islocation={isAbout}>
                <img src={aboutBaseIcon} alt="About Me" />
              </FooterLink>
              <FooterLink to="/contact" islocation={isContact}>
                <img src={contactBaseIcon} alt="" />
              </FooterLink>
            </FooterElement>
            <FooterBg portfolioHeaderColor={portfolioHeaderColor} />
          </>
        )
      }}
    </Location>
  )
}

export default Footer
