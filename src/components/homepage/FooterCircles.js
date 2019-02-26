import React from 'react'
import styled from '@emotion/styled'

const Circle = styled('div')`
  border-radius: 120vw;
`

const RightDesktopCircle = styled(Circle)`
  position: relative;
  border-radius: 120vw;
  width: 100vw;
  height: 100vw;
  top: -116px;
  left: 5vh;
  border: 0.5px solid ${props => props.theme.color.secondary};
`
const LowerDesktopCircle = styled(Circle)`
  border: 0.5px solid ${props => props.theme.color.primary};
  width: 130vw;
  height: 130vw;

  position: relative;
  left: -14vw;
`

const CircleContainer = styled('div')`
  position: absolute;
  overflow: hidden;
`

const MobileCircleContainer = styled(CircleContainer)`
  display: block;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

const LowerDesktopCircleContainer = styled(MobileCircleContainer)`
  height: 24.5vh;
  width: 100vw;
  top: 331vh;
`

const RightDesktopCircleContainer = styled(MobileCircleContainer)`
  height: 100vh;
  width: 40vw;
  left: 46vw;
  outline-color: purple;
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
