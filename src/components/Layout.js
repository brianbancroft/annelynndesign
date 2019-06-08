import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import './layout.css'
import { theme } from '../helpers'

import { meta, helmetLink } from './layout-meta'
import { Footer } from '.'

import { compose } from 'ramda'
import { convertCSSToRGB, getValueFromRGB, lightOrDark } from '../helpers'

const Layout = ({ children, portfolioHeaderColor } = {}) => {
  console.log('Portfolio Header Color -> ', portfolioHeaderColor)
  const iconAltColor =
    portfolioHeaderColor &&
    compose(
      lightOrDark,
      getValueFromRGB,
      convertCSSToRGB
    )({ color: portfolioHeaderColor })

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Helmet link={helmetLink} meta={meta}>
          <html lang="en" />
        </Helmet>
        {children}
        <Footer
          portfolioHeaderColor={portfolioHeaderColor}
          iconAltColor={iconAltColor}
        />
      </ThemeProvider>
    </main>
  )
}

export default Layout
