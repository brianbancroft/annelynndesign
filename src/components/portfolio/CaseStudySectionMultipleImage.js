import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { convertCSSToRGB, getValueFromRGB, lightOrDark } from '../../helpers'
import { compose } from 'ramda'

const MockSection = styled.section`
  width: 100vw;
  height: 100vh;
  outline-style: dashed;
  outline-color: salmon;
`

// Each section should be the size of the screen
const ImageMosaicContainer = styled.section`
  width: 100vw;
  ${'' /* min-height: 100vh; */}
  background-color: ${({ color, evenElement }) =>
    evenElement ? 'white' : color};

  display: grid;
  grid-template-rows: 1fr 180px;
  grid-row-gap: 10px;

  .images-row-container {
    padding: 10px;
  }
  .images-row {
    display: grid;
    
    background-color: white;

    ${props =>
      props.numberImages <= 3
        ? css`
            grid-template-columns: repeat(${props.numberImages}, 1fr);
          `
        : css`
            grid-template-rows: repeat(
              ${Math.round(props.numberImages / 2)},
              300px
            );
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            height: 100%;
          `}

    flex-direction: row;
  }

  .image {
    ${'' /* min-width: 300px;
    min-height: 300px; */}
  }

  .copy-container {
    padding-left: 130px;

    color: ${({ color, altColor, evenElement }) =>
      evenElement ? color : altColor};

    h3 {
      font-weight: 900;
      font-size: 1.2em;
      margin-bottom: 0.4em;
      text-transform: uppercase;
    }
  }
`

function CaseStudySectionMultipleImage(props) {
  const { element, color, evenElement } = props

  const {
    title,
    description: { text },
    images,
  } = element

  const altColor =
    color && compose(lightOrDark, getValueFromRGB, convertCSSToRGB)({ color })

  return (
    <ImageMosaicContainer
      color={color}
      altColor={altColor}
      evenElement={evenElement}
      numberImages={images.length}
    >
      <div className="images-row-container">
        <div className="images-row">
          {images.map(i => (
            <div className="image" key={i.id}>
              {i && <Img fluid={i.fluid} />}
            </div>
          ))}
        </div>
      </div>
      {(title || text) && (
        <div className="copy-container">
          {title && <h3>{title}</h3>}
          {text && <p>{text}</p>}
        </div>
      )}
    </ImageMosaicContainer>
  )
}

CaseStudySectionMultipleImage.propTypes = {}

export default CaseStudySectionMultipleImage
