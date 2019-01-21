import React from 'react'
import styled from 'react-emotion'
import { MobileImageSlider } from '.'

const MultiImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: white;

  display: grid;
  grid-template-rows: 1fr 400px 100px 10vw;
  grid-template-columns: 5vw 20vw 20vw 1fr 5vw;
  grid-row-gap: 20px;

  grid-column-gap: 30px;

  align-items: center;
  color: ${props => (props.color ? props.color : 'inherit')};

  outline-color: red;
  outline-style: double;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;

    .title {
      height: 100px;
    }

    .copy {
    }
  }

  .title {
    grid-column: 3 / 4;
    grid-row: 3 / 4;

    font-size: 1.2rem;
    font-family: 'Raleway Semi-Bold', sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    color: ${props => (props.color ? props.color : 'inherit')};
    padding-right: 20px;
    text-align: right;
    height: 100%;
  }

  .title.no-copy,
  .copy.no-copy {
    display: none;
  }

  .title.image-left {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    text-align: left;
    height: initial;
  }

  /* .title.image-right {
    grid-row: 2 / 3;
  } */

  .copy.image-left {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
  }

  /* .copy.image-right {
    grid-row: 3 / 4;
  } */

  .image.image-left {
    grid-column: 2 / 4;
    grid-row: 2 / 5;
  }

  /* .image.image-right {
    grid-row: 1 / 4;
  } */

  .copy {
    grid-column: 4 / 5;
    height: 100%;
    grid-row: 3 / 4;
    color: #222;
    max-width: 500px;
  }

  .mobile-images-container {
    width: 70vw;
    justify-content: center;
    grid-column: 2 / 6;
    grid-row: 1 / 3;
    background: white;
    min-height: 350px;
    display: none;
    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .mobile-images-container.no-copy {
    grid-row: 1 / 5;
  }

  .desktop-images-container {
    grid-column: 2 / 5;
    grid-row: 1 / 3;
    background: white;
    min-height: 350px;
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
      display: none;
    }

    img {
      max-width: ${props => {
        console.log('Image props -> ', props)
        return props.numImages ? 80 / props.numImages + 'vw' : '80vw'
      }};
      max-height: ${props =>
        props.numImages ? 80 / props.numImages + 'vw' : '80vw'};
      margin-right: 15px;
    }
  }

  .desktop-images-container.no-copy {
    grid-row: 1 / 5;
  }
`

const Copy = ({ copy, classes } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div className={classes}>{inner}</div>
}

const imagesLayout = ({ images, title, handleOpen, imagePosition } = {}) =>
  imagePosition === 'images-center' ? (
    images.map(i => (
      <img
        src={i.fluid.src}
        key={i.id}
        onClick={handleOpen({
          modalImage: i.fluid.src,
          title: title,
        })}
      />
    ))
  ) : (
    <img
      src={images[0].fluid.src}
      key={images[0].id}
      onClick={handleOpen({
        modalImage: images[0].fluid.src,
        title: title,
      })}
    />
  )

const Images = ({ title, handleOpen, images, imagePosition } = {}) => (
  <>
    <div className={`mobile-images-container ${imagePosition}`}>
      <MobileImageSlider
        title={title}
        handleOpen={handleOpen}
        images={images}
      />
    </div>
    <div
      imagePosition={imagePosition}
      className={`desktop-images-container ${imagePosition}`}
    >
      {imagesLayout({ images, title, handleOpen, imagePosition })}
    </div>
  </>
)

const ComponentMultiImage = ({
  color,
  images,
  copy,
  imagePosition,
  title,
  handleOpen,
} = {}) => {
  imagePosition = !(title || copy) ? `${imagePosition} no-copy` : imagePosition

  return (
    <>
      <MultiImageSection color={color} numImages={images.length}>
        <Images
          title={title}
          images={images}
          imagePosition={imagePosition}
          handleOpen={handleOpen}
          className={`images-container ${imagePosition}`}
        />
        <div className={`title ${imagePosition}`}>{title}</div>
        <Copy copy={copy} classes={`copy ${imagePosition}`} />
      </MultiImageSection>
    </>
  )
}

export default ComponentMultiImage
