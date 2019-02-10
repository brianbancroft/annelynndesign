import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { BackIcon } from '.'

const FooterSection = styled('section')`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: ${props => (props && props.color ? props.color : '#aaf')};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: 60px;
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
      >
        <BackIcon />
      </div>
    </Link>
  </FooterSection>
)

export default Footer
