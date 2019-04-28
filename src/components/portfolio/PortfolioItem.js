import React from 'react'
import styled from '@emotion/styled'

import { PortfolioHeader, ImageModal } from '.'

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
  headerSectionTextColor,
  singleImageSections,
  multiImageSections,
} = {}) => {
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
