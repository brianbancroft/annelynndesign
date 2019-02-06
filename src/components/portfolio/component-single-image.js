import React from 'react'
import styled from '@emotion/styled'

const SingleImage = styled('section')`
  z-index: 10;
  width: 100vw;
  height: calc(100vh - 65px);
  color: ${ props => (props.color ? props.color : 'inherit') };
  background: white;

  display: grid;
  grid-template-columns: 5vw 20vw 20vw 50vw 5vw;
  grid-template-rows: 30px 1fr 100px 200px 100px;
  grid-row-gap: 20px;

  .copy {
    padding-top: 30px;
    color: #222;
    grid-column: 4 / 5;
    grid-row: 4 / 5;
    max-width: 500px;
    height: 100%;
  }

  .title {
    padding-top: 30px;
    font-size: 1.2rem;
    font-family: 'Raleway Semi-Bold', sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    color: ${ props => (props.color ? props.color : 'inherit') };
    grid-column: 3 / 4;
    grid-row: 4 / 5;
    padding-right: 20px;
    text-align: right;
    height: 100%;
  }

  .image {
    grid-column: 2 / 5;
    grid-row: 2 / 4;
    background: ${ props => (props.src ? `url("${ props.src }")` : 'red') };
    width: 500px;
    height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    justify-self: center;
    align-self: center;
  }

  .title.single-image-left {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    text-align: left;
    padding-top: 90px;
  }

  .title.single-image-right {
    grid-row: 2 / 3;
  }

  .copy.single-image-left {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
  }

  .copy.single-image-right {
    grid-row: 3 / 4;
  }

  .image.single-image-left {
    grid-column: 2 / 4;
    grid-row: 2 / 5;
  }

  .image.single-image-right {
    grid-row: 1 / 4;
  }

  @media (max-width: 700px) {
    height: 100vh;
  }
`

const Copy = ({ copy, classes } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div className={classes}>{inner}</div>
}

const ComponentSingleImage = ({
  imagePosition,
  image,
  title,
  copy,
  color,
} = {}) => (
  <SingleImage color={color} src={image.fluid.src}>
    <div className={`image ${ imagePosition }`} />
    <div className={`title ${ imagePosition }`}>{title}</div>
    <Copy copy={copy} classes={`copy ${ imagePosition }`} />
  </SingleImage>
)

export default ComponentSingleImage
