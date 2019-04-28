import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import './layout.css'
import { theme } from '../helpers'

import { meta, helmetLink } from './layout-meta'
import { Footer } from '.'

const Site = styled('main')``

const Layout = ({ children, location = '/', portfolioHeaderColor } = {}) => (
  <Site>
    <ThemeProvider theme={theme}>
      <Helmet link={helmetLink} meta={meta}>
        <html lang="en" />
      </Helmet>
      {children}
      <Footer portfolioHeaderColor={portfolioHeaderColor} />
    </ThemeProvider>
  </Site>
)

export default Layout
