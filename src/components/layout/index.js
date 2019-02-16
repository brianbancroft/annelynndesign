import React from 'react'
import Transition from './transition'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import Helmet from 'react-helmet'
import './layout.css'
import favicon from '../../images/favicon.ico'
import appleTouchIcon from '../../images/apple-touch-icon.png'
import favicon16 from '../../images/favicon-16x16.png'
import favicon32 from '../../images/favicon-32x32.png'

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
            name: 'twitter:creator',
            content: '@al_bancroft',
          },
          {
            name: 'twitter:site',
            content: '@al_bancroft',
          },
        ]}
      />
      <Transition location={location}>{children}</Transition>
    </ThemeProvider>
  )
}

export default Layout
