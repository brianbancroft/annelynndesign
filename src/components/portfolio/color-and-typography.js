import React from 'react'
import { ComponentMultiImage } from '.'

const ColorAndTypography = ({ colorAndTypography, color } = {}) => (
  <>
    {colorAndTypography.map(i => (
      <ComponentMultiImage
        key={i.id}
        id={i.id}
        color={color}
        copy={i.copy}
        images={i.images}
      />
    ))}
  </>
)

export default ColorAndTypography
