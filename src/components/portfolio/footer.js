import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const FooterSection = styled('section')`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: ${props => (props && props.color ? props.color : '#aaf')};
  height: 35px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
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
      />
    </Link>
  </FooterSection>
)

export default Footer
