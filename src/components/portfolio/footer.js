import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { BackIcon } from '.'

const FooterSection = styled('section')`
  position: fixed;
  bottom: 0;
  height: 30px;
  width: 100vw;
  background: ${props => (props && props.color ? props.color : '#aaf')};
`

const Footer = ({ color } = {}) => (
  <FooterSection color={color}>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
        }}
      >
        <BackIcon />
      </div>
    </Link>
  </FooterSection>
)

export default Footer
