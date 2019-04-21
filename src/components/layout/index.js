import React from 'react'
import { Link } from 'gatsby'
import Transition from './transition'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import theme from './theme'
import Helmet from 'react-helmet'
import './layout.css'
import favicon from '../../images/favicon.ico'
import appleTouchIcon from '../../images/apple-touch-icon.png'
import favicon16 from '../../images/favicon-16x16.png'
import favicon32 from '../../images/favicon-32x32.png'

import {
  aboutBaseIcon,
  aboutHoverIcon,
  aboutWhiteIcon,
  homeBaseIcon,
  homeHoverIcon,
  homeWhiteIcon,
  contactBaseIcon,
  contactHoverIcon,
  contactWhiteIcon,
} from '../../images/footerIcons'

const meta = [
  {
    name: 'author',
    content: 'Anne Lynn',
  },
  {
    name: 'robots',
    content: 'follow',
  },
  {
    name: 'generator',
    content: 'gatsby',
  },
  {
    name: 'og:site_name',
    property: 'theme-color',
    content: 'Anne Lynn Design',
  },
  {
    property: 'og:locale',
    content: 'en_US',
  },
  {
    name: 'twitter:creator',
    content: '@al_bancroft',
  },
  {
    name: 'twitter:site',
    content: '@al_bancroft',
  },
]

const helmetLink = [
  { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: `${favicon32}`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: `${favicon16}`,
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '32x32',
    href: `${appleTouchIcon}`,
  },
]

const Footer = styled('footer')`
  position: fixed;
  bottom: 0;
  z-index: 10;
  height: 120px;
  width: 100vw;
  background-color: white;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;

  img {
    width: 75px;
    height: 75px;
    padding: 0;
    margin-bottom: 0;
  }
`

const FooterLink = styled(Link)`
  border: 1px solid #555;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Location = styled('div')`
  text-align: center;
`

const Layout = ({ children, location = '/' } = {}) => (
  <ThemeProvider theme={theme}>
    <Helmet link={helmetLink} meta={meta} />
    <Transition location={location}>{children}</Transition>
    <Footer>
      <FooterLink to="/">
        <img src={homeBaseIcon} alt="Home" srcset="" />
        <Location>Home</Location>
      </FooterLink>
      <FooterLink to="/about">
        <img src={aboutBaseIcon} alt="About Me" srcset="" />
        <Location>About</Location>
      </FooterLink>
      <FooterLink to="/contact">
        <img src={contactBaseIcon} alt="" srcset="" />
        <Location>Contact</Location>
      </FooterLink>
    </Footer>
  </ThemeProvider>
)

export default Layout
