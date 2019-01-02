import React from 'react'
import { ComponentMultiImage } from '.'
import { isUndefined } from 'util'

const ColorAndTypography = ({ colorAndTypography, color } = {}) => (
  <>
    {colorAndTypography.map(i => (
      <ComponentMultiImage
        key={i.id}
        id={i.id}
        color={color}
        title={i.title}
        copy={i.copy}
        images={i.images}
      />
    ))}
  </>
)

export default ColorAndTypography
