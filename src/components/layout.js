import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <>
    {children}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: 0,
      }}
    />
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
