import React from 'react'
import styled from 'react-emotion'

const SingleImage = styled('section')`
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

  .copy-container {
    display: grid;
    width: 100%;
    grid-template-rows: 80px;
    grid-template-columns: 10px 250px 1fr 10px;
    grid-column-gap: 30px;
    color: #222;
  }

  .copy-container__title {
    font-size: 1.2rem;
    font-family: 'Raleway Semi-Bold', sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    color: ${props => (props.color ? props.color : 'inherit')};
    grid-column: 2 / 3;
  }

  .images-container__image {
    max-width: 500px;
  }

  @media (max-width: 700px) {
    height: 100vh;
  }
`

const ImageContainer = styled('div')`
  background: ${props => (props.src ? `url("${props.src}")` : 'red')};
  width: 500px;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

const Copy = ({ copy } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div>{inner}</div>
}

const ComponentSingleImage = ({
  cssClasses,
  image,
  title,
  copy,
  color,
  imagePosition,
} = {}) => {
  return (
    <SingleImage color={color} imagePosition={imagePosition}>
      <ImageContainer src={image.fluid.src} />
      <div className="copy-container">
        <div className="copy-container__title">{title}</div>
        <Copy copy={copy} />
      </div>
    </SingleImage>
  )
}

export default ComponentSingleImage
