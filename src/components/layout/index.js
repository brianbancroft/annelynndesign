import React from 'react'
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from 'gatsby'
import Transition from './transition'

import './layout.css'

const Layout = ({ children, location } = {}) => {
  console.log('Layout location -> ', location)
  if (!location) {
    location = { pathname: '/' }
  }
  return <Transition location={location}>{children}</Transition>
}
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
