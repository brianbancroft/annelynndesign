import React from 'react'
import styled from 'react-emotion'

const MultiImageSection = styled('section')`
  width: 100vw;
  height: 80vh;
  background: white;

  display: flex;
  flex-direction: ${props =>
    props && props.imagePosition
      ? props.imagePosition === 'image-left'
        ? 'row'
        : 'row-reverse'
      : 'column'};
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

  .images-container img {
    margin-right: 5px;
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
  images.map(i => <img src={i.fluid.src} key={i.id} />)

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
    <div className="copy-container">
      <div className="copy-container__title">{title}</div>
      <Copy copy={copy} />
    </div>
  </MultiImageSection>
)

export default ComponentMultiImage
