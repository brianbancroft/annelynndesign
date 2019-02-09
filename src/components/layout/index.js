import React from 'react'
import Transition from './transition'
import { ThemeProvider } from 'emotion-theming'
import './layout.css'

const theme = {
  mobileBreakpoint: '620px',
  color: {
    primary: '#1e9dba',
    secondary: '#006a77',
    teritary: '#8ec73f',
    circles: {
      primary: '#1e9dba',
      secondary: '#006a77',
      teritary: '#8ec73f',
    },
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
    fontWeight: '500',
    fontSize: '1.2rem',
  },
  label: {},
}

const Layout = ({ children, location } = {}) => {
  if (!location) {
    location = { pathname: '/' }
  }
  return (
    <ThemeProvider theme={theme}>
      <Transition location={location}>{children}</Transition>
    </ThemeProvider>
  )
}

export default Layout
