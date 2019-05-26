import React from 'react'
import styled from '@emotion/styled'
import { Location } from '@reach/router'

import { Link } from 'gatsby'

import {
  aboutBaseIcon,
  // aboutHoverIcon,
  aboutWhiteIcon,
  homeBaseIcon,
  // homeHoverIcon,
  homeWhiteIcon,
  contactBaseIcon,
  // contactHoverIcon,
  contactWhiteIcon,
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
    width: 70px;
    height: 70px;
    padding: 8px;
    margin-bottom: 0;
    margin-top: 2px;
    /* border-radius: 55px; */

    /* border: 1px solid; */
    /* border-color: rgba(141, 212, 231, 0); */
    /* animation: icon-pulse ease-out 2s; */

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
}

@keyframes icon-pulse {
  20% {
    border-color: rgba(141, 212, 231, 0.2);
    /* padding: 9px; */
  }
  25% {
    border-color: rgba(141, 212, 231, 0.4);
    /* padding: 10px; */
  }
  30% {
    border-color: rgba(141, 212, 231, 0.3);
    /* padding: 11px; */
  }
  60% {
    border-color: rgba(141, 212, 231, 0.5);
    /* padding: 12px; */
  }
  80% {
    border-color: rgba(141, 212, 231, 0.2);
    /* padding: 13px; */
  }
  90% {
    border-color: rgba(141, 212, 231, 0);
  }
}

`

// ATTEMPT: PULSING

// .pulse {
//   margin:100px;
//   display: block;
//   width: 22px;
//   height: 22px;
//   border-radius: 50%;
//   background: #cca92c;
//   cursor: pointer;
//   box-shadow: 0 0 0 rgba(204,169,44, 0.4);
//   animation: pulse 2s infinite;
// }
// .pulse:hover {
//   animation: none;
// }

// @-webkit-keyframes pulse {
//   0% {
//     -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
//   }
//   70% {
//       -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
//   }
//   100% {
//       -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
//   }
// }
// @keyframes pulse {
//   0% {
//     -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
//     box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
//   }
//   70% {
//       -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
//       box-shadow: 0 0 0 10px rgba(204,169,44, 0);
//   }
//   100% {
//       -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
//       box-shadow: 0 0 0 0 rgba(204,169,44, 0);
//   }
// }

const Footer = ({ portfolioHeaderColor } = {}) => {
  const homeIcon = portfolioHeaderColor ? homeWhiteIcon : homeBaseIcon
  const aboutIcon = portfolioHeaderColor ? aboutWhiteIcon : aboutBaseIcon
  const contactIcon = portfolioHeaderColor ? contactWhiteIcon : contactBaseIcon

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
                <img src={homeIcon} alt="Home" />
              </FooterLink>
              <FooterLink to="/about" islocation={isAbout}>
                <img src={aboutIcon} alt="About Me" />
              </FooterLink>
              <FooterLink to="/contact" islocation={isContact}>
                <img src={contactIcon} alt="" />
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
