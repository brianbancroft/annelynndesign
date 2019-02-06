import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { MobileImageSlider } from '.'

const MultiImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: calc(100vh - 65px);
  background: white;

  display: grid;
  grid-template-rows: 5vh 1fr 100px 10vh;
  grid-template-columns: 5vw 20vw 20vw 1fr 5vw;
  grid-row-gap: 20px;

  grid-column-gap: 30px;

  align-items: center;
  color: ${ props => (props.color ? props.color : 'inherit') };
  /*
  outline-color: red;
  outline-style: double; */

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
    color: ${ props => (props.color ? props.color : 'inherit') };
    padding-right: 20px;
    text-align: right;
    height: 100%;
  }

  .title.no-copy,
  .copy.no-copy {
    display: none;
  }

  .title.single-image-left {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    text-align: left;
    padding-top: 90px;
    height: initial;
  }

  .title.single-image-right {
    grid-row: 2 / 4;
  }

  .copy.single-image-left {
    grid-column: 4 / 5;
    grid-row: 2 / 4;
  }

  .copy.single-image-right {
    grid-row: 2 / 3;
  }

  .desktop-images-container.single-image-left {
    grid-column: 2 / 4;
    grid-row: 2 / 5;
  }

  .image.single-image-right {
    grid-row: 1 / 4;
  }

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
    align-items: baseline;
    @media (max-width: 600px) {
      display: none;
    }

    .gatsby-image-wrapper {
      width: ${ props =>
  // props.numImages ? 70 / props.numImages + 'vw' : '70vw' };
  //   max-height: ${ props =>
    props.numImages ? 70 / props.numImages + 'vw' : '70vw' };
      margin-right: 15px;
    }
  }

  .desktop-images-container.no-copy {
    grid-row: 1 / 5;
  }

  .desktop-images-container.single-image-left {
    .gatsby-image-wrapper {
      width: 38vw;
    }
  }
`

const Copy = ({ copy, classes } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div className={classes}>{inner}</div>
}

const imagesLayout = ({ images, title, handleOpen, imagePosition } = {}) =>
  imagePosition === 'images-center' ? (
    images.map(i => (
      <div
        key={i.id}
        onClick={handleOpen({
          modalImage: i.original.src,
          title: title,
        })}
      >
        <Img fluid={i.fluid} />
      </div>
    ))
  ) : (
    <Img
      fluid={images[0].fluid}
      key={images[0].id}
      onClick={handleOpen({
        modalImage: images[0].original.src,
        title: title,
      })}
    />
  )

const Images = ({ title, handleOpen, images, imagePosition } = {}) => (
  <>
    <div className={`mobile-images-container ${ imagePosition }`}>
      <MobileImageSlider
        title={title}
        handleOpen={handleOpen}
        images={images}
      />
    </div>
    <div className={`desktop-images-container ${ imagePosition }`}>
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
  imagePosition = !(title || copy) ? `${ imagePosition } no-copy` : imagePosition

  return (
    <>
      <MultiImageSection color={color} numImages={images.length}>
        <Images
          title={title}
          images={images}
          imagePosition={imagePosition}
          handleOpen={handleOpen}
          className={`images-container ${ imagePosition }`}
        />
        <div className={`title ${ imagePosition }`}>{title}</div>
        <Copy copy={copy} classes={`copy ${ imagePosition }`} />
      </MultiImageSection>
    </>
  )
}

export default ComponentMultiImage
