import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import './layout.css'
import { theme } from '../helpers'
import styled from 'styled-components'

import { meta, helmetLink } from './layout-meta'
import { Footer } from '.'

import { compose } from 'ramda'
import { convertCSSToRGB, getValueFromRGB, lightOrDark } from '../helpers'

const MainLayout = styled('main')`
  height: ${props => `calc(100vh - ${props.theme.footer.height})`};
`

const Layout = ({ children, portfolioHeaderColor } = {}) => {
  const iconAltColor =
    portfolioHeaderColor &&
    compose(
      lightOrDark,
      getValueFromRGB,
      convertCSSToRGB
    )({ color: portfolioHeaderColor })

  return (
    <>
      <Helmet link={helmetLink} meta={meta}>
        <html lang="en" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <>
          <MainLayout>{children}</MainLayout>
          <Footer
            portfolioHeaderColor={portfolioHeaderColor}
            iconAltColor={iconAltColor}
          />
        </>
      </ThemeProvider>
    </>
  )
}

export default Layout
