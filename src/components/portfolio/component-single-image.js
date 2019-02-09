import React from 'react'
import styled from '@emotion/styled'

const SingleImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: calc(100vh - 30px);

  display: grid;
  grid-template-columns: 5vw 20vw 20vw 50vw 5vw;
  grid-template-rows: 30px 1fr 100px 170px 25px;
  grid-row-gap: 10px;

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
      : '2 / 4'};
  background: ${props => (props.src ? `url("${props.src}")` : 'red')};
  width: 500px;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  justify-self: center;
  align-self: center;

  .single-image-left {
    grid-column: 2 / 4;
    grid-row: 2 / 5;
  }

  .single-image-right {
    grid-row: 2 / 5;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 2 / 3;
  }
`

const CopyElem = styled('div')`
  grid-column: 4 / 5;
  grid-row: 4 / 5;
  max-width: 500px;
  padding-top: 30px;
  height: 100%;

  color: ${props => props.theme.color.copy};
  font-weight: ${props => props.theme.copy.fontWeight};
  .single-image-left {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
  }

  .single-image-right {
    grid-row: 3 / 4;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 4 / 5;
    padding-top: 0;
  }
`

const Title = styled('div')`
  grid-column: ${props =>
    props.className === 'single-image-left' ? '4 / 5' : '3 / 4'};
  grid-row: ${props =>
    props.className === 'single-image-left' ||
    props.className === 'single-image-right'
      ? '3 / 4'
      : '4 / 5'};
  padding-right: 20px;
  padding-top: ${props =>
    props.className === 'single-image-left' ? '90px' : '30px'};
  text-align: ${props =>
    props.className === 'single-image-left' ? 'left' : 'right'};
  height: 100%;

  font-weight: ${props => props.theme.h4.fontWeight};
  font-size: ${props => props.theme.h4.fontSize};
  font-family: ${props => props.theme.h4.fontFamily};
  color: ${props => (props.color ? props.color : 'inherit')};

  .single-image-right {
    grid-row: 3 / 4;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-column: 2 / 5;
    grid-row: 3 / 4;
    text-align: center;
    padding-top: 0;
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
} = {}) => (
  <SingleImageSection color={color}>
    <ImageContainer className={imagePosition} src={image.fluid.src} />
    <Title className={imagePosition}>{title}</Title>
    <Copy copy={copy} cssClass={imagePosition} />
  </SingleImageSection>
)

export default ComponentSingleImage
