import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { MobileImageSlider, ComponentSingleImage } from '.'

const MultiImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: calc(100vh - 30px);

  display: grid;
  grid-template-rows: 80px 1fr 100px 0.4fr 20px;
  grid-template-columns: 5vw 20vw 20vw 1fr 5vw;
  grid-row-gap: 25px;
  grid-column-gap: 10px;
  align-items: center;

  background: white;
  color: ${props => (props.color ? props.color : 'inherit')};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    flex-direction: column;
    grid-template-rows: 20px 1fr 20px 100px 20px;
    height: 110vh;
    margin-bottom: ${props => props.theme.mobile.sectionDividerMargin};
  }

  .image.single-image-right {
    grid-row: 1 / 4;
  }

  .desktop-images-container {
    grid-column: 2 / 5;
    grid-row: 1 / 3;
    background: white;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    align-self: flex-end;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      display: none;
    }

    .gatsby-image-wrapper {
      cursor: pointer;
      width: ${props =>
        // props.numImages ? 70 / props.numImages + 'vw' : '70vw' };
        //   max-height: ${ props =>
        props.numImages ? 70 / props.numImages + 'vw' : '70vw'};
      margin-right: 15px;
    }
  }

  .desktop-images-container.no-copy {
    grid-row: 1 / 4;
  }

  .desktop-images-container.single-image-left {
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    align-self: end;

    .gatsby-image-wrapper {
      width: 38vw;
    }
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

const TitleElem = styled('div')`
  grid-column: 3 / 4;
  grid-row: 3 / 4;

  padding-right: 20px;
  text-align: right;
  height: 100%;

  font-weight: ${props => props.theme.h4.fontWeight};
  font-size: ${props => props.theme.h4.fontSize};
  font-family: ${props => props.theme.h4.fontFamily};
  color: ${props => (props.color ? props.color : 'inherit')};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 3 / 4;
    text-align: left;
  }

  .no-copy {
    display: none;
  }

  .single-image-left {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    text-align: left;
    padding-top: 90px;
    height: initial;
    align-self: end;
  }

  .single-image-right {
    grid-row: 2 / 4;
  }
`

const CopyElem = styled('div')`
  grid-column: 4 / 5;
  height: 100%;
  grid-row: 3 / 4;
  max-width: 500px;

  font-size: ${props => props.theme.copy.fontSize};
  color: ${props => props.theme.color.copy};
  font-weight: ${props => props.theme.copy.fontWeight};

  .single-image-left {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
  }

  .single-image-right {
    grid-row: 2 / 3;
  }

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

const Images = ({ title, handleOpen, images, imagePosition, color } = {}) => (
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

const ComponentMultiImage = ({
  color,
  images,
  copy,
  imagePosition,
  title,
  handleOpen,
} = {}) => {
  imagePosition = !(title || copy) ? `no-copy` : imagePosition

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
          <TitleElem className={imagePosition}>{title}</TitleElem>
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
