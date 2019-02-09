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
  }
`

const ImageContainer = styled('div')`
  grid-column: 2 / 5;
  grid-row: 2 / 4;
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
    grid-row: 1 / 4;
  }
`

const CopyElem = styled('div')`
  padding-top: 30px;
  color: #222;
  grid-column: 4 / 5;
  grid-row: 4 / 5;
  max-width: 500px;
  height: 100%;

  .single-image-left {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
  }

  .single-image-right {
    grid-row: 3 / 4;
  }
`

const Title = styled('div')`
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  padding-right: 20px;
  padding-top: 30px;
  text-align: right;
  height: 100%;

  font-weight: ${props => props.theme.h4.fontWeight};
  font-size: ${props => props.theme.h4.fontSize};
  font-family: ${props => props.theme.h4.fontFamily};
  color: ${props => (props.color ? props.color : 'inherit')};

  .single-image-left {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    text-align: left;
    padding-top: 90px;
  }

  .single-image-right {
    grid-row: 2 / 3;
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
