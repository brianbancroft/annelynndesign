import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import './layout.css'
import { theme } from '../helpers'

import { meta, helmetLink } from './layout-meta'
import { Footer } from '.'

const Layout = ({ children, location = '/', portfolioHeaderColor } = {}) => (
  <ThemeProvider theme={theme}>
    <Helmet link={helmetLink} meta={meta}>
      <html lang="en" />
    </Helmet>
    {children}
    <Footer portfolioHeaderColor={portfolioHeaderColor} />
  </ThemeProvider>
)

export default Layout
