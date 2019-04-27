import React from 'react'
import styled from '@emotion/styled'
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
`

const FooterLink = styled(Link)`
  border-top: 2px solid ${props => props.theme.color.primary};
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
`

const Location = styled('div')`
  text-align: center;
`

const Footer = ({ portfolioHeaderColor } = {}) => {
  return (
    <>
      <FooterElement id="siteFooter">
        <FooterLink to="/">
          <img src={homeBaseIcon} alt="Home" />
        </FooterLink>
        <FooterLink to="/about">
          <img src={aboutBaseIcon} alt="About Me" />
        </FooterLink>
        <FooterLink to="/contact">
          <img src={contactBaseIcon} alt="" />
        </FooterLink>
      </FooterElement>
      <FooterBg portfolioHeaderColor={portfolioHeaderColor} />
    </>
  )
}

export default Footer
