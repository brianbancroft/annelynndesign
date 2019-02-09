import React from 'react'
import styled from '@emotion/styled'

const ScrollIconLink = styled('a')`
  position: absolute;
  bottom: 20px;
  left: 50%;
  padding-top: 70px;
  z-index: 2;
  display: inline-block;
  cursor: pointer;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: ${props => props.theme.color.primary};
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
    border-left: 1px solid ${props => props.theme.color.primary};
    border-bottom: 1px solid ${props => props.theme.color.primary};
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

// document.getElementsByTagName('button')[0].onclick = function() {
//   scrollTo(document.body, 0, 1250)
// }

// function scrollTo(element, to, duration) {
//   var start = element.scrollTop,
//     change = to - start,
//     currentTime = 0,
//     increment = 20

//   var animateScroll = function() {
//     currentTime += increment
//     var val = Math.easeInOutQuad(currentTime, start, change, duration)
//     element.scrollTop = val
//     if (currentTime < duration) {
//       setTimeout(animateScroll, increment)
//     }
//   }
//   animateScroll()
// }

// t = current time
// b = start value
// c = change in value
// d = duration
Math.easeInOutQuad = function(time, initialTime, deltaTime, elapsedTime) {
  time /= deltaTime / 2
  if (time < 1) return (elapsedTime / 2) * time * time + initialTime
  time--
  return (-elapsedTime / 2) * (time * (time - 2) - 1) + initialTime
}

const ScrollIcon = () => {
  return (
    <ScrollIconLink href="#">
      <span />
    </ScrollIconLink>
  )
}

export default ScrollIcon
