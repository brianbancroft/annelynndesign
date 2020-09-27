import React from 'react'
import styled from 'styled-components'
import { convertCSSToRGB, getValueFromRGB, lightOrDark } from '../../helpers'
import { compose } from 'ramda'

const HeaderSection = styled('section')`
  background: ${props => props.backgroundColor || '#1402ba'};
  color: ${props => props.textColor || '#efefef'};
  width: 100vw;
  height: calc(100vh - ${props => props.theme.footer.height});
  max-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 800px 1fr;
  grid-template-rows: 0.7fr 50px 1fr;
  grid-row-gap: 20px;

  animation-duration: 2s;
  animation-name: fadein;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: calc(100vh - ${props => props.theme.footer.mobile.height});
    grid-template-columns: 5vw 90vw 5vw;
    grid-template-rows: 15vh 80px 1fr;
  }
`

const Title = styled('div')`
  font-family: ${props => props.theme.h3.fontFamily};
  font-size: ${props => props.theme.h3.fontSize};
  font-weight: ${props => props.theme.h3.fontWeight};
  line-height: ${props => props.theme.h3.lineHeight};
  margin-bottom: 30px;
  text-align: center;
  padding: 0 10px;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  line-height: 45px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: ${props => props.theme.h3.mobile.fontSize} !important;
    line-height: ${props => props.theme.h3.mobile.lineHeight};
    font-weight: ${props => props.theme.h3.mobile.fontWeight};
    align-self: end;
    margin-bottom: 0;
  }
`

const Copy = styled('div')`
  text-align: block;
  padding: 0 160px;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  font-size: ${props => props.theme.copy.fontSize};
  line-height: ${props => props.theme.copy.lineHeight};
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 0 10px;
    font-size: ${props => props.theme.copy.mobile.fontSize};
  }
`

const CaseStudyHeaderIntroduction = ({
  backgroundColor,
  headline,
  copy,
  headerSectionTextColor,
} = {}) => {
  const textColor = compose(
    lightOrDark,
    getValueFromRGB,
    convertCSSToRGB
  )({ color: backgroundColor })

  return (
    <>
      <HeaderSection
        backgroundColor={backgroundColor}
        textColor={textColor}
        headerSectionTextColor={headerSectionTextColor}
      >
        <Title>{headline}</Title>
        <Copy>{copy}</Copy>
      </HeaderSection>
    </>
  )
}

export default CaseStudyHeaderIntroduction
