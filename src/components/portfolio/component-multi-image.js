import React from 'react'
import styled from 'react-emotion'

const MultiImageSection = styled('section')`
  width: 100vw;
  height: 80vh;
  background: white;
  outline-style: double;
  outline-color: red;
/*
  display: flex;
  flex-direction: ${props =>
    props && props.imagePosition
      ? props.imagePosition === 'image-left'
        ? 'row'
        : 'row-reverse'
      : 'column'};
  justify-content: space-around; */

  display: grid;
  grid-template-rows: 1fr 100px;
  grid-template-columns: 50px 250px 600px 50px;
  grid-row-gap: 10px;
  grid-column-gap: 30px;

  align-items: center;
  margin: 10vw 0;
  color: ${props => (props.color ? props.color : 'inherit')};
  font-family: AvenirNext-UltraLight;

  .images-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }

  .title {
    grid-row: 2 / 3;
    grid-column: 2 / 3;

    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => (props.color ? props.color : 'inherit')};
  }

  .copy {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    color: #222;
  }
`
const ImageContainer = styled('div')`
  background: ${props => (props.src ? `url("${props.src}")` : 'red')};
  width: 800px;
  height: 400px;
  max-height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 5px;
`

const imagesLayout = images =>
  images.map(i => <ImageContainer src={i.fluid.src} key={i.id} />)

const Copy = ({ copy } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div>{inner}</div>
}

const ComponentMultiImage = ({
  color,
  images,
  copy,
  cssClasses,
  title,
} = {}) => (
  <MultiImageSection color={color}>
    <div className="images-container">{imagesLayout(images)}</div>
    <div className="title">{title}</div>
    <div className="copy">
      <Copy copy={copy} />
    </div>
  </MultiImageSection>
)

export default ComponentMultiImage
