import React from 'react'
import styled from 'react-emotion'

const ScrollIconLink = styled('a')`
  position: absolute;
  bottom: 20px;
  left: 50%;
  padding-top: 70px;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #1e9dba;
  font: normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }

  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #1e9dba;
    border-bottom: 1px solid #1e9dba;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb05 1.5s infinite;
    animation: sdb05 1.5s infinite;
    box-sizing: border-box;
  }

  @-webkit-keyframes sdb05 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
`

const ScrollIcon = () => {
  return (
    <ScrollIconLink href="#">
      <span />
    </ScrollIconLink>
  )
}

export default ScrollIcon
