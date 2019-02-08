import React from 'react'
import Transition from './transition'

import './layout.css'

const Layout = ({ children, location } = {}) => {
  if (!location) {
    location = { pathname: '/' }
  }
  return <Transition location={location}>{children}</Transition>
}

export default Layout
