import React from 'react'
import styled from 'react-emotion'

const ColorTypographySection = styled('section')`
  width: 100vw;
  height: 100vh;
  background: white;
  outline-color: red;
  outline-style: dashed;
`

const imagesLayout = images =>
  images.map(i => <img src={i.file.url} key={i.id} />)

const ColorAndTypography = ({ colorAndTypography } = {}) => {
  console.log('Colour and typography pane', colorAndTypography)

  const sections = colorAndTypography.map(i => (
    <ColorTypographySection key={i.id}>
      {imagesLayout(i.images)}
      <h1>Colors and Typefaces</h1>
      <div>{i.copy.copy}</div>
    </ColorTypographySection>
  ))

  return <>{sections}</>
}

export default ColorAndTypography
