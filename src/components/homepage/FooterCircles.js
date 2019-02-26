import React from 'react'
import styled from '@emotion/styled'

const Circle = styled('div')`
  border-radius: 120vw;
`

const CircleContainer = styled('div')`
  position: absolute;
  overflow: hidden;
  outline-style: none;
`
const MobileCircleContainer = styled(CircleContainer)`
  display: block;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const RightDesktopCircleContainer = styled(MobileCircleContainer)`
  height: 100vh;
  width: 40vw;
  left: 46vw;

  @media (max-width: 1050px) {
    height: 100vh;
    width: 40vw;
    left: 46vw;
  }
  /* outline-color: purple; */
`

const RightDesktopCircle = styled(Circle)`
  position: relative;
  border-radius: 120vw;
  width: 100vw;
  height: 100vw;
  top: -116px;
  left: 5vh;
  border: 0.5px solid ${props => props.theme.color.secondary};

  @media (max-width: 1050px) {
    width: 90vw;
    height: 90vw;
    left: 1vh;
    top: 4.8vh;
  }
`
const LowerDesktopCircleContainer = styled(MobileCircleContainer)`
  width: 100vw;
  height: 24.5vh;
  top: 330vh;

  @media (max-width: 1050px) {
    height: 10.5vh;
    top: 340vh;
  }
  /* outline-color: blue; */
`

const LowerDesktopCircle = styled(Circle)`
  border: 0.5px solid ${props => props.theme.color.primary};
  width: 170vw;
  height: 170vw;

  position: relative;
  left: -35vw;

  @media (max-width: 1050px) {
    width: 180vw;
    height: 180vw;
    left: -38vw;
  }
`

const FooterCircles = () => (
  <>
    <LowerDesktopCircleContainer>
      <LowerDesktopCircle />
    </LowerDesktopCircleContainer>
    <RightDesktopCircleContainer>
      <RightDesktopCircle />
    </RightDesktopCircleContainer>
  </>
)

export default FooterCircles
