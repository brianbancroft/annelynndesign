import React from 'react'
import { Link } from 'gatsby'
import { PortfolioItem } from '.'

const PortfolioCaseStudy = item => {
  const {
    i: {
      node: { previewImage, slug, title },
    },
  } = item

  return (
    <>
      <Link to={`/portfolio/${slug}`}>
        <PortfolioItem previewImage={previewImage} title={title} />
      </Link>
    </>
  )
}

export default PortfolioCaseStudy
