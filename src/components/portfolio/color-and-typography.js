import React from 'react'
import styled from 'react-emotion'

const ColorTypographySection = styled('section')`
  width: 100vw;
  height: 80vh;
  background: white;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10vw 0;
  color: ${props => (props.color ? props.color : 'inherit')};
  font-family: AvenirNext-UltraLight;

  .images-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .copy-container {
    display: grid;
    grid-template-rows: 80px;
    grid-template-columns: 250px 600px;
    grid-column-gap: 30px;
    color: #222;
  }

  .copy-container__title {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => (props.color ? props.color : 'inherit')};
  }
`

const imagesLayout = images =>
  images.map(i => <img src={i.file.url} key={i.id} />)

const Copy = ({ copy } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div>{inner}</div>
}

const ColorAndTypography = ({ colorAndTypography, color } = {}) => {
  console.log('Colour and typography pane', colorAndTypography)

  const sections = colorAndTypography.map(i => (
    <ColorTypographySection key={i.id} color={color}>
      <div className="images-container">{imagesLayout(i.images)}</div>
      <div className="copy-container">
        <div className="copy-container__title">Colors and Typefaces</div>
        <Copy copy={i.copy} />
      </div>
    </ColorTypographySection>
  ))

  return <>{sections}</>
}

export default ColorAndTypography