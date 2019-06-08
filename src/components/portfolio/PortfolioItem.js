import React from 'react'
import styled from '@emotion/styled'
import { compose } from 'ramda'

import { PortfolioHeader, ImageModal } from '.'
import { convertCSSToRGB, getValueFromRGB, lightOrDark } from '../../helpers'

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
