import React from 'react'
import Transition from './transition'
import { ThemeProvider } from 'emotion-theming'
import './layout.css'

const theme = {
  color: {
    primary: '#1e9dba',
  },
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
