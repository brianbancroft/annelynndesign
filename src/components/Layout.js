import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { Grommet } from 'grommet'
import styled from 'styled-components'
import { compose } from 'ramda'

import './layout.css'
import { theme } from '../helpers'
import { Footer } from '.'
import { meta, helmetLink } from './layout-meta'
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
    <Grommet theme={theme}>
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
    </Grommet>
  )
}

export default Layout
