import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <div
    style={{
      background: '#aaf',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Go Back Home
        </Link>
      </h1>
    </div>
  </div>
)

export default Footer
