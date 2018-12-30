import React from 'react'
import { ComponentMultiImage } from '.'

const SupportingConcepts = ({ supportingConcepts, color } = {}) => (
  <>
    {supportingConcepts.map(i => (
      <ComponentMultiImage
        key={i.id}
        color={color}
        images={i.images}
        title={i.title}
        copy={i.copy}
      />
    ))}
  </>
)

export default SupportingConcepts
