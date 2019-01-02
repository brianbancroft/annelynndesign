import React from 'react'
import { ComponentMultiImage } from '.'

const ConceptsAndIdeas = ({ conceptAndIdeas, color } = {}) => (
  <>
    {conceptAndIdeas.map(i => (
      <ComponentMultiImage
        key={i.id}
        color={color}
        title={i.title}
        images={i.images}
        cssClasses={i.cssClasses}
        copy={i.copy}
      />
    ))}
  </>
)

export default ConceptsAndIdeas
