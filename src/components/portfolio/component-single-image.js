import React from 'react'
import styled from 'styled-components'

const SingleImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  min-height: 80vh;
  margin-bottom: 50px;
  display: grid;
  grid-template-rows: 80px 1fr 170px 50px 25px;
  grid-template-columns: 10px 200px 20vw 1fr 10px;
  grid-row-gap: 15px;
  grid-column-gap: 20px;

  color: ${props => (props.color ? props.color : 'inherit')};

  &.single-image-left,
  &.single-image-right {
    grid-template-rows: 100px 0.2fr 1fr auto 155px;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      grid-template-rows: 30px 1fr auto 150px 25px !important;
    }
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    min-height: 700px;
    grid-template-rows: 30px 1fr auto 150px 25px;
    margin-bottom: 100px;
  }

  &:before {
    background: ${props =>
      props.color ? props.color : props.theme.color.primary};
    display: block;
    content: '';
    position: relative;
    width: 86vw;
    left: 7vw;
    margin-top: 10px;
    height: 1px;
  }
`

const ImageContainer = styled('div')`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  background: ${props => (props.src ? `url("${props.src}")` : 'red')};
  width: 500px;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  justify-self: center;
  align-self: end;

  &.no-copy {
    grid-row: 2 / 5;
  }

  &.single-image-left {
    grid-column: 2 / 4;
  }

  &.single-image-left,
  &.single-image-right {
    grid-row: 2 / 5;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      grid-column: 2 / 5 !important;
      grid-row: 2 / 3 !important;
      margin-bottom: 5px !important;
      width: 100% !important;
      height: 100% !important;
    }
  }

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
  grid-row: 3 / 4;
  max-width: 500px;
  align-self: flex-start;

  color: ${props => props.theme.color.copy};
  font-weight: ${props => props.theme.copy.fontWeight};
  font-size: ${props => props.theme.copy.fontSize};

  &.single-image-left {
    align-self: flex-end;
  }

  &.single-image-left,
  &.single-image-right {
    grid-row: 4 / 5;

    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      grid-column: 2 / 5 !important;
      grid-row: 4 / 5 !important;
      padding-top: 0 !important;
      align-self: flex-start !important;
    }
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 4 / 5;
    padding-top: 0;
    align-self: flex-start;
  }
`

const Title = styled('div')`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  padding-top: 0;
  justify-self: end;
  text-align: right;
  align-self: inherit;
  max-width: 80%;

  font-weight: ${props => props.theme.h4.fontWeight};
  font-size: ${props => props.theme.h4.fontSize};
  font-family: ${props => props.theme.h4.fontFamily};
  line-height: ${props => props.theme.h4.lineHeight};
  color: ${props => (props.color ? props.color : 'inherit')};

  &.single-image-left,
  &.single-image-right {
    padding-top: 90px;
    justify-self: baseline;
    text-align: left;
    align-self: flex-end;

    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      padding-top: 0;
      grid-column: 2 / 5 !important;
      grid-row: 3 / 4 !important;
      justify-self: start;
      text-align: left;
    }
  }

  &.single-image-right {
    grid-row: 3 / 4;
  }

  &.single-image-left {
    grid-column: 4 / 5;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 3 / 4;
    justify-self: start;
    text-align: left;
    line-height: ${props => props.theme.h4.mobile.lineHeight};
    max-width: 95%;
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
} = {}) => {
  const imageSrc = image ? image.fluid.src : 'https://placehold.it/400/400'
  const modalImageSrc = image
    ? image.original.src
    : 'https://placehold.it/400/400'

  return (
    <SingleImageSection color={color} className={imagePosition}>
      <ImageContainer
        className={imagePosition}
        src={imageSrc}
        onClick={handleOpen({
          modalImage: modalImageSrc,
          title: title,
        })}
      />
      <Title className={imagePosition}>{title}</Title>
      <Copy copy={copy} cssClass={imagePosition} />
    </SingleImageSection>
  )
}

export default ComponentSingleImage
