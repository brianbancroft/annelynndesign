import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { MobileImageSlider, ComponentSingleImage } from '.'
import { convertCSSToRGB, getValueFromRGB } from '../../helpers'
import { compose } from 'ramda'

const MultiImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  display: grid;
  min-height: 80vh;
  grid-template-rows: 80px 1fr auto 20px;
  grid-template-columns: 10px 150px 20vw 1fr 10px;
  grid-row-gap: 15px;
  grid-column-gap: 30px;
  align-items: center;

  background: white;
  color: ${props => (props.color ? props.color : 'inherit')};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    flex-direction: column;
    grid-template-rows: 20px 1fr auto 100px 20px;
    min-height: 700px;
  }

  .image.single-image-right {
    grid-row: 1 / 4;
  }

  .desktop-images-container {
    grid-column: 2 / 5;
    grid-row: 2 / 3;
    margin-top: 25px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      display: none;
    }

    .gatsby-image-wrapper {
      cursor: pointer;
      width: ${props =>
        props.numImages ? 70 / props.numImages + 'vw' : '70vw'};
      margin-right: 15px;
    }

    img {
      max-height: 100%;
    }
  }

  .desktop-images-container.no-copy {
    grid-row: 1 / 4;
  }
`

const MobileImagesContainer = styled('div')`
  width: 70vw;
  justify-content: center;
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  background: white;
  min-height: 350px;
  display: none;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: block;
  }

  .mobile-images-container.no-copy {
    grid-row: 1 / 5;
  }

  .ui.button {
    color: #bbb;
    background: white;
  }
  .carousel__dot.carousel__dot--selected.ui.icon.button {
    color: ${props => (props.color ? props.color : 'inherit')};
    background: white;
    opacity: 1;
  }
`

const Title = styled('div')`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  align-self: baseline;
  margin-top: 2px;
  text-align: right;
  justify-self: end;
  max-width: 80%;
  padding-top: 10px;

  font-weight: ${props => props.theme.h4.fontWeight};
  font-size: ${props => props.theme.h4.fontSize};
  font-family: ${props => props.theme.h4.fontFamily};
  line-height: ${props => props.theme.h4.lineHeight};
  color: ${props => (props.color ? props.color : 'inherit')};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 3 / 4;
    text-align: left;
    justify-self: start;
    max-width: 95%;

    line-height: ${props => props.theme.h4.mobile.lineHeight};
  }

  .no-copy {
    display: none;
  }
`

const CopyElem = styled('div')`
  grid-column: 4 / 5;
  grid-row: 3 / 4;
  max-width: 500px;
  padding-top: 10px;

  font-size: ${props => props.theme.copy.fontSize};
  color: ${props => props.theme.color.copy};
  font-weight: ${props => props.theme.copy.fontWeight};

  .no-copy {
    display: none;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 4 / 5;
    align-self: flex-start;
  }
`

const Copy = ({ copy, classes } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <CopyElem className={classes}>{inner}</CopyElem>
}

const imagesLayout = ({ images, title, handleOpen, imagePosition } = {}) =>
  imagePosition === 'single-image-left' ||
  imagePosition === 'single-image-right' ? (
    <Img
      fluid={images[0].fluid}
      key={images[0].id}
      onClick={handleOpen({
        modalImage: images[0].original.src,
        title: title,
      })}
    />
  ) : (
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
  )

const Images = ({ title, handleOpen, images, imagePosition, color } = {}) => {
  return (
    <>
      <MobileImagesContainer className={imagePosition} color={color}>
        <MobileImageSlider
          title={title}
          handleOpen={handleOpen}
          images={images}
        />
      </MobileImagesContainer>
      <div className={`desktop-images-container ${imagePosition}`}>
        {imagesLayout({ images, title, handleOpen, imagePosition })}
      </div>
    </>
  )
}

const ComponentMultiImage = ({
  color,
  images,
  copy,
  imagePosition,
  title,
  handleOpen,
} = {}) => {
  imagePosition = !(title || copy) ? `no-copy` : imagePosition

  color =
    color &&
    compose(
      getValueFromRGB,
      convertCSSToRGB
    )({ color }) > 1
      ? '#222'
      : color

  if (images) {
    return images.length > 1 ? (
      <>
        <MultiImageSection color={color} numImages={images.length}>
          <Images
            title={title}
            images={images}
            color={color}
            imagePosition={imagePosition}
            handleOpen={handleOpen}
            className={`images-container ${imagePosition}`}
          />
          <Title className={imagePosition}>{title}</Title>
          <Copy copy={copy} classes={`copy ${imagePosition}`} />
        </MultiImageSection>
      </>
    ) : (
      <ComponentSingleImage
        imagePosition={imagePosition}
        image={images[0]}
        title={title}
        copy={copy}
        color={color}
        handleOpen={handleOpen}
      />
    )
  } else {
    return (
      <ComponentSingleImage
        imagePosition={imagePosition}
        image={images}
        title={title}
        copy={copy}
        color={color}
        handleOpen={handleOpen}
      />
    )
  }
}

export default ComponentMultiImage
