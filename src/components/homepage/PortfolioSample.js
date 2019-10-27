import React, { useState } from 'react'
import { PortfolioItem } from '.'
import { Layer, Button } from 'grommet'

const PortfolioSample = item => {
  const [overlay, setOverlay] = useState(false)

  const {
    i: {
      node: { previewImage, title },
    },
  } = item

  return (
    <>
      {overlay && (
        <Layer
          onEsc={() => setOverlay(false)}
          onClickOutside={() => setOverlay(false)}
        >
          <Button label="close" onClick={() => setOverlay(false)} />
        </Layer>
      )}
      <div
        onClick={() => {
          setOverlay(true)
        }}
      >
        <PortfolioItem previewImage={previewImage} title={title} />
      </div>
    </>
  )
}

export default PortfolioSample
