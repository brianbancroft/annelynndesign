import React from 'react'
import styled from 'styled-components'
import logo from '../../images/homepage-logo.png'

const Bar = styled('div')`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8fbf9;
  margin-bottom: 40px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-bottom: 25px;
    height: 90px;

    img {
      width: 50px;
    }
  }
`

const HeaderBar = () => {
  return (
    <Bar>
      <img src={logo} alt="anne-lynn design" />
    </Bar>
  )
}

export default HeaderBar
