import React from 'react'
import styled from '@emotion/styled'

const ScrollIconLink = styled('div')`
  bottom: 20px;
  left: 50%;
  padding-top: 70px;
  z-index: 2;
  display: inline-block;
  cursor: pointer;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: white;
  font: normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;

  span {
    position: absolute;
    top: 44px;
    left: 80px;
    width: 12px;
    height: 12px;
    margin-left: -12px;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: goleft 4s infinite;
    animation: goleft 4s infinite;
    box-sizing: border-box;
  }

  @-webkit-keyframes goleft {
    0% {
      -webkit-transform: rotate(45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(45deg) translate(-80px, 80px);
      opacity: 0;
    }
  }
  @keyframes goleft {
    0% {
      transform: rotate(45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translate(-80px, 80px);
      opacity: 0;
    }
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    span {
      left: 40vw;
    }
  }
`

const ScrollIcon = () => {
  return (
    <ScrollIconLink>
      <span />
    </ScrollIconLink>
  )
}

export default ScrollIcon
