import React from 'react'
import { ComponentMultiImage } from '.'

const sectionMultiImage = ({ section, color } = {}) =>
  section
    ? section.map(i => (
        <ComponentMultiImage
          key={i.id}
          id={i.id}
          color={color}
          title={i.title}
          images={i.images}
          copy={i.copy}
          cssClasses={i.cssClasses}
        />
      ))
    : null

export default sectionMultiImage
