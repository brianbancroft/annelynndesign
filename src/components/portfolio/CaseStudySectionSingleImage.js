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
  grid-template-rows: 1fr 400px;
  grid-row-gap: 10px;

  .image-row-container {
    padding: 20px;
  }
  .image-row {
    display: grid;
    padding: 10px;
    background-color: white;
    
  }

  .image {
    ${'' /* min-width: 300px;
    min-height: 300px; */}
    max-height: 80vh;
  }

  .copy-container {
    padding-left: 130px;


    width: 85vw;
    max-width: 800px; 

    h3 {
      color: ${({ color, altColor, evenElement }) =>
        evenElement ? color : altColor};
      font-weight: 900;
      font-size: 1.2em;
      margin-bottom: 0.4em;
      text-transform: uppercase;
    }
  }
`

function CaseStudySectionMultipleImage(props) {
  console.log('Case study single image props', props)
  const { element, color, evenElement } = props

  const { title, description, image, imagePosition } = element

  const altColor =
    color && compose(lightOrDark, getValueFromRGB, convertCSSToRGB)({ color })

  return (
    <ImageMosaicContainer
      color={color}
      altColor={altColor}
      evenElement={evenElement}
    >
      <div className="image-row-container">
        <div className="image-row">
            <div className="image">
              {image && <Img fluid={image.fluid} />}
            </div>
        </div>
      </div>
      {(title || description) && (
        <div className="copy-container">
          {title && <h3>{title}</h3>}
          {description && <p>{description?.text}</p>}
        </div>
      )}
    </ImageMosaicContainer>
  )
}

CaseStudySectionMultipleImage.propTypes = {}

export default CaseStudySectionMultipleImage
