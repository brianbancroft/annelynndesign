import React from 'react'
import styled from '@emotion/styled'

const SingleImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: calc(100vh - 30px);

  display: grid;
  grid-template-columns: 10px 200px 20vw 1fr 10px;
  grid-template-rows: ${props =>
    props.className === 'single-image-left' ||
    props.className === 'single-image-right'
      ? '30px 0.2fr 1fr 100px 225px'
      : '30px 1fr 170px 50px 25px'};
  grid-row-gap: 25px;
  grid-column-gap: 20px;

  color: ${props => (props.color ? props.color : 'inherit')};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: 100vh;
    grid-template-rows: 30px 1fr 30px 150px 25px;
    margin-bottom: 120px;
  }
`

const ImageContainer = styled('div')`
  grid-column: ${props =>
    props.className === 'single-image-left' ? '2 / 4' : '2 / 5'};
  grid-row: ${props =>
    props.className === 'single-image-left' ||
    props.className === 'single-image-right'
      ? '2 / 5'
      : '2 / 3'};
  background: ${props => (props.src ? `url("${props.src}")` : 'red')};
  width: 500px;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  justify-self: center;
  align-self: end;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 2 / 3;
    margin-bottom: 5px;
    width: 100%;
    height: 100%;
  }
`

const CopyElem = styled('div')`
  grid-column: 4 / 5;
  grid-row: ${props =>
    props.className === 'single-image-left' ||
    props.className === 'single-image-right'
      ? '4 / 5'
      : '3 / 4'};
  max-width: 500px;
  align-self: ${props =>
    props.className === 'single-image-left' ? 'flex-end' : 'flex-start'};

  color: ${props => props.theme.color.copy};
  font-weight: ${props => props.theme.copy.fontWeight};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 4 / 5;
    padding-top: 0;
  }
`

const Title = styled('div')`
  grid-column: ${props =>
    props.className === 'single-image-left' ? '4 / 5' : '3 / 4'};
  grid-row: 3 / 4;
  padding-top: ${props =>
    props.className === 'single-image-left' ||
    props.className === 'single-image-right'
      ? '90px'
      : '0'};
  text-align: ${props =>
    props.className === 'single-image-left' ||
    props.className === 'single-image-right'
      ? 'left'
      : 'right'};

  font-weight: ${props => props.theme.h4.fontWeight};
  font-size: ${props => props.theme.h4.fontSize};
  font-family: ${props => props.theme.h4.fontFamily};
  color: ${props => (props.color ? props.color : 'inherit')};
  align-self: ${props =>
    props.className === 'single-image-left' ||
    props.className === 'single-image-right'
      ? 'flex-end'
      : 'inherit'};

  .single-image-right {
    grid-row: 3 / 4;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 3 / 4;
    text-align: left;
  }
`

const Copy = ({ copy, cssClass } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <CopyElem className={cssClass}>{inner}</CopyElem>
}

const ComponentSingleImage = ({
  imagePosition,
  image,
  title,
  copy,
  color,
  handleOpen,
} = {}) => (
  <SingleImageSection color={color} className={imagePosition}>
    <ImageContainer
      className={imagePosition}
      src={image.fluid.src}
      onClick={handleOpen({
        modalImage: image.original.src,
        title: title,
      })}
    />
    <Title className={imagePosition}>{title}</Title>
    <Copy copy={copy} cssClass={imagePosition} />
  </SingleImageSection>
)

export default ComponentSingleImage
