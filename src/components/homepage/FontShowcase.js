import React from 'react'
import styled from '@emotion/styled'

const FontContainer = styled('section')`
  font-family: ${props => props.theme.fontFamily};
  width: 100vw;
  min-height: 100vh;
  background: white;
  padding: 20px;
`

const FontSample = styled('div')`
  font-size: 40px;
  text-transform: capitalize;
  margin-bottom: 20px;
  padding: 3px;
  border-bottom: 1px solid #444;
  max-width: 560px;
`

const Thin = styled(FontSample)`
  font-weight: 100;
`
const ThinItalic = styled(FontSample)`
  font-weight: 100;
  font-style: italic;
`

const ExtraLight = styled(FontSample)`
  font-weight: 200;
`

const ExtraLightItalic = styled(FontSample)`
  font-weight: 200;
  font-style: italic;
`

const Light = styled(FontSample)`
  font-weight: 300;
`

const LightItalic = styled(FontSample)`
  font-weight: 300;
  font-style: italic;
`

const Regular = styled(FontSample)`
  font-weight: 400;
`

const RegularItalic = styled(FontSample)`
  font-weight: 400;
  font-style: italic;
`

const Medium = styled(FontSample)`
  font-weight: 500;
`

const MediumItalic = styled(FontSample)`
  font-weight: 500;
  font-style: italic;
`

const SemiBold = styled(FontSample)`
  font-weight: 600;
`

const SemiBoldItalic = styled(FontSample)`
  font-weight: 600;
  font-style: italic;
`

const Bold = styled(FontSample)`
  font-weight: 700;
`

const BoldItalic = styled(FontSample)`
  font-weight: 700;
  font-style: italic;
`

const ExtraBold = styled(FontSample)`
  font-weight: 800;
`

const ExtraBoldItalic = styled(FontSample)`
  font-weight: 800;
  font-style: italic;
`

const Black = styled(FontSample)`
  font-weight: 900;
`

const BlackItalic = styled(FontSample)`
  font-weight: 900;
  font-style: italic;
`

const FontShowcase = () => {
  return (
    <FontContainer>
      <Thin>thin</Thin>
      <ThinItalic>thin italic</ThinItalic>
      <ExtraLight>Extra Light</ExtraLight>
      <ExtraLightItalic>Extra light italic</ExtraLightItalic>
      <Light>Light</Light>
      <LightItalic>light italic</LightItalic>
      <Regular>regular</Regular>
      <RegularItalic>regular italic</RegularItalic>
      <Medium>medium</Medium>
      <MediumItalic>medium italic</MediumItalic>
      <SemiBold>semi bold</SemiBold>
      <SemiBoldItalic>semi bold italic</SemiBoldItalic>
      <Bold>bold</Bold>
      <BoldItalic>bold italic</BoldItalic>
      <ExtraBold>extra bold</ExtraBold>
      <ExtraBoldItalic>extra bold italic</ExtraBoldItalic>
      <Black>black</Black>
      <BlackItalic>black italic</BlackItalic>
    </FontContainer>
  )
}

export default FontShowcase
