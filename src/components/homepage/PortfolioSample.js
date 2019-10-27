import React from 'react'
import { PortfolioItem } from '.'

const PortfolioSample = item => {
  const {
    i: {
      node: { previewImage, title },
    },
  } = item

  return (
    <>
      <PortfolioItem previewImage={previewImage} title={title} />
    </>
  )
}

export default PortfolioSample
