import React from 'react'
import Transition from './transition'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import theme from './theme'
import Helmet from 'react-helmet'
import './layout.css'

import { meta, helmetLink } from './meta'
import { Footer } from '..'

const Layout = ({ children, location = '/' } = {}) => (
  <ThemeProvider theme={theme}>
    <Helmet link={helmetLink} meta={meta} />
    <Transition location={location}>{children}</Transition>
    <Footer />
  </ThemeProvider>
)

export default Layout
