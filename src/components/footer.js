import React from 'react'
import styled from 'styled-components'
import { Location } from '@reach/router'

import { Link } from 'gatsby'

import {
  Comment,
  CommentSolid,
  Portfolio,
  PortfolioSolid,
  UserCircle,
  UserCircleSolid,
} from './svg'

const FooterBg = styled('footer')`
  position: fixed;
  bottom: 0;
  z-index: 224;
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
  z-index: 248;
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
  z-index: 300;

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
    background: ${props => {
      return props.islocation === 'true' ? 'rgba(141, 212, 231, 0.4)' : 'none'
    }};
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

const Icon = styled('div')`
  height: 60px;
  width: 60px;
  margin-top: 10px;
  path {
    fill: ${props =>
      /\/portfolio\//.test(props.location)
        ? props.theme.color[props.iconAltColor]
        : props.theme.color.primary};
  }
`

const PackageIcon = styled(Icon)`
  margin-top: 15px;
`

const Footer = ({ portfolioHeaderColor, iconAltColor } = {}) => {
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
                <PackageIcon
                  location={location.pathname}
                  iconAltColor={iconAltColor}
                >
                  {location.pathname === '/' ? (
                    <PortfolioSolid />
                  ) : (
                    <Portfolio />
                  )}
                </PackageIcon>
              </FooterLink>
              <FooterLink to="/about" islocation={isAbout}>
                <Icon location={location.pathname} iconAltColor={iconAltColor}>
                  {location.pathname === '/about' ? (
                    <UserCircleSolid />
                  ) : (
                    <UserCircle />
                  )}
                </Icon>
              </FooterLink>
              <FooterLink to="/contact" islocation={isContact}>
                <Icon location={location.pathname} iconAltColor={iconAltColor}>
                  {location.pathname === '/contact' ? (
                    <CommentSolid />
                  ) : (
                    <Comment />
                  )}
                </Icon>
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
