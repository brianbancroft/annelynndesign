import React from 'react'
import Transition from './transition'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import './layout.css'
import favicon from '../../images/favicon.ico'
import appleTouchIcon from '../../images/apple-touch-icon.png'
import favicon16 from '../../images/favicon-16x16.png'
import favicon32 from '../../images/favicon-32x32.png'

const theme = {
  mobileBreakpoint: '620px',
  color: {
    primary: '#1e9dba',
    secondary: '#006a77',
    tertiary: '#8ec73f',
    copy: '#222',
    formBackground: 'rgba(30, 157, 186, 0.1)',
    formSubmitBackground: 'rgba(30, 157, 186, 0.25)',
  },
  h1: {
    fontFamily: `'Raleway', sans-serif`,
    textTransform: 'uppercase',
    transform: 'scale(1, 1.2)',
    fontWeight: '100',
    textShadow: 'white 0.1em 0.1em 0.1em',
    fontSize: '90px',
    lineHeight: '90px',
    mobile: {
      fontSize: '14vw',
      letterSpacing: '-0.39px',
      textShadow: '0 0 0.2em #fff',
    },
  },
  h2: {
    fontFamily: `'Raleway', sans-serif`,
    textTransform: 'uppercase',
    fontWeight: '100',
    fontSize: '50px',
    letterSpacing: '-0.39px',
    lineHeight: '49px',
    textShadow: '0 0 0.2em #fff',
    textAlign: 'center',
  },
  h3: {},
  h4: {
    fontFamily: `'Raleway', sans-serif`,
    fontWeight: '600',
    fontSize: '1.2rem',
  },
  copy: {
    fontWeight: '500',
    fontSize: '1rem',
  },
  label: {},
}

const Layout = ({ children, location } = {}) => {
  if (!location) {
    location = { pathname: '/' }
  }
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        link={[
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
        ]}
        meta={[
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
            property: 'twitter:creator',
            name: 'twitter:creator',
            content: '@al_bancroft',
          },
          {
            property: 'twitter:site',
            name: 'twitter:site',
            content: '@al_bancroft',
          },
          {
            property: 'twitter:card',
            name: 'twitter:card',
            content: 'summary',
          },
        ]}
      />
      <Transition location={location}>{children}</Transition>
    </ThemeProvider>
  )
}

export default Layout
