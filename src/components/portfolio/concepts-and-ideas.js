import React from 'react'
import { ComponentMultiImage } from '.'

const ConceptsAndIdeas = ({ conceptAndIdeas, color } = {}) => (
  <>
    {conceptAndIdeas.map(i => (
      <ComponentMultiImage
        key={i.id}
        color={color}
        images={i.images}
        cssClasses={i.cssClasses}
        copy={i.copy}
      />
    ))}
  </>
)

export default ConceptsAndIdeas
