import React from 'react'
import styled from '@emotion/styled'

const SingleImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: calc(100vh - 30px);

  display: grid;
  grid-template-columns: 10px 200px 20vw 1fr 10px;
  grid-template-rows: 80px 1fr 170px 50px 25px;
  grid-row-gap: 25px;
  grid-column-gap: 20px;

  color: ${props => (props.color ? props.color : 'inherit')};

  &.single-image-left,
  &.single-image-right {
    grid-template-rows: 100px 0.2fr 1fr auto 155px;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: 90vh;
    grid-template-rows: 30px 1fr 30px 150px 25px;
    margin-bottom: ${props => props.theme.mobile.sectionDividerMargin};
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

  &.single-image-left {
    grid-column: 2 / 4;
  }

  &.single-image-left,
  &.single-image-right {
    grid-row: 2 / 5;
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
  color: ${props => (props.color ? props.color : 'inherit')};

  &.single-image-left,
  &.single-image-right {
    padding-top: 90px;
    text-align: left;
    align-self: flex-end;
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
