import React from 'react'
import styled from 'styled-components'

import { PortfolioHeader, ImageModal } from '.'
import { convertCSSToRGB, getValueFromRGB, lightOrDark } from '../../helpers'
import { compose } from 'ramda'

const ItemContainer = styled('article')`
  margin-bottom: 200px;
`

const PortfolioItem = ({
  showModal,
  modalTitle,
  modalImage,
  handleClose,
  headline,
  copy,
  color,
  singleImageSections,
  multiImageSections,
} = {}) => {
  const headerSectionTextColor =
    color &&
    compose(
      lightOrDark,
      getValueFromRGB,
      convertCSSToRGB
    )({ color })

  return (
    <ItemContainer>
      <ImageModal
        id="imageModal"
        display={showModal}
        modalTitle={modalTitle}
        modalImage={modalImage}
        handleClose={handleClose}
      />

      <PortfolioHeader
        headline={headline}
        copy={copy}
        backgroundColor={color}
        headerSectionTextColor={headerSectionTextColor}
      />
      {singleImageSections}
      {multiImageSections}
    </ItemContainer>
  )
}

export default PortfolioItem
